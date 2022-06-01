import React from "react";


const Eitem = (props) => {
    return (
        <div className="eventItem">
            <p className="eventItem-title">{props.data.title}</p>
            <p className="eventItem-description">
                {props.data.description}
            </p>
            <p className="eventItem-location">{props.data.place}</p>
            <div className="eventItem-bot">
                <p className="eventItem-date">28.05 12:00</p>
                <p className="eventItem-person">{props.data.studentModel.firstname} {props.data.studentModel.lastname}</p>
            </div>
        </div>
    );
};

export default Eitem;
