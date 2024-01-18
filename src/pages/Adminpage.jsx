import React, { useState, useEffect } from "react";
import axios from "axios";
import NavigationForSuperAdmin from "../components/Navigationforsuperadmin";

const AdminPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get("http://localhost:5000/admin/users", {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users", error);
        }
    };

    const handleNameChange = async (userId, newName) => {
        const token = localStorage.getItem("token");
        try {
            await axios.put(`http://localhost:5000/admin/users/${userId}`, { name: newName }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchUsers(); // Refresh user data
        } catch (error) {
            console.error("Error updating user name", error);
        }
    };

    const handleDeleteUser = async (userId) => {
        const token = localStorage.getItem("token");
        try {
            await axios.delete(`http://localhost:5000/admin/users/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchUsers(); // Refresh user data
        } catch (error) {
            console.error("Error deleting user", error);
        }
    };

    return (
        <div className="bg-dark" style={{ minHeight: "100vh" }}>
            <NavigationForSuperAdmin />
            <h1 className="text-center fw-bold mt-5 text-success">Admin Dashboard</h1>
            <div className="m-3">
                <h2 className="text-center text-success">Manage User Accounts</h2>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>
                                    <input 
                                        type="text" 
                                        defaultValue={user.name} 
                                        onBlur={(e) => handleNameChange(user._id, e.target.value)}
                                        className="bg-success text-white"
                                    />
                                </td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user._id)} className="btn btn-danger">Delete User</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPage;
