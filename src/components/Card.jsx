import React from "react";
import Subtitle from "./Subtitle";
import Description from "./Description";

function Card(props) {
  return (
    <div className="w-50 m-auto mt-5 mb-5 custom-howitworkspage">
      <div className="list-group list-group-numbered">
        <div className=" d-flex justify-content-between align-items-start bg-dark text-white rounded-3 custom-howitworksbox">
          <div className="ms-2 me-auto">
            <div className="">
              <Subtitle subtitle={props.subtitle} />
            </div>
            <Description description={props.description} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
