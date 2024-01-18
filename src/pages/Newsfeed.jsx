import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Backgroundimage from "../components/Backgroundimage";
import NavigationForHome from "../components/NavigationForHome";


const NewsFeed = () => {
    
    const [userData, setUserData] = useState({});
    

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await axios.get("http://localhost:5000/ProfilePage", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching profile", error);
                // Handle error (e.g., redirect to login if unauthorized)
            }
        };

        fetchProfile();
    }, []);

    return (
        <div>
            
            <NavigationForHome />
            <div className="bg-warning w-75 m-auto rounded-4">
                <h1 className="text-center fw-bold mt-5 p-5">Apologies {userData.name}. This page is still under construction</h1>
            </div>
            
            
            
        </div>
    );
};

export default NewsFeed;