import React from "react";
import { useNavigate } from "react-router-dom";

const Eitem = (props) => {
    const navigate = useNavigate();

    return (
        <div className="eventItem" onClick={() => navigate("/five")}>
            <p className="eventItem-title">{props.data.title}</p>
            <p className="eventItem-description">{props.data.description}</p>
            <p className="eventItem-location">{props.data.place}</p>
            <div className="eventItem-bot">
                <p className="eventItem-date">{props.data.time}</p>
                <p className="eventItem-person">
                    {props.data.studentModel != null ? (
                        <>
                            {props.data.studentModel.firstname}{" "}
                            {props.data.studentModel.lastname}
                        </>
                    ) : (
                        <>
                            {props.data.teacherModel.firstname}{" "}
                            {props.data.teacherModel.lastname}
                        </>
                    )}
                </p>
            </div>
        </div>
    );
};

export default Eitem;
