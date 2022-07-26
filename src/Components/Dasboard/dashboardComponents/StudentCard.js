import React from "react";

export default function StudentCard(props) {
  return (
    <div className="student-card">
      <div className="individual-card">
        <div className="staff-count">
          <h2>{props?.staffCount}</h2>
          <p>{props?.catagory}</p>
        </div>
        <div className="teaching-nonTeaching">
          <div className="teaching">
            <h4>{props?.teachingCount}</h4>
            <p>{props?.teaching}</p>
          </div>
          <div className="nonTeaching">
            <h4>{props?.nonTeachingCount}</h4>
            <p>{props?.nonTeaching}</p>
          </div>
        </div>
      </div>
      <div className="right-image">
        <img
          src={require("../../../assets/personAvator.png")}
          className="student-avator"
        />
      </div>
    </div>
  );
}
