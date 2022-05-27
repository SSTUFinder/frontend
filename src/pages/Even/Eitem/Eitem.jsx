import React from "react";


const Eitem = (props) => {
    return (
        <div className="eventItem">
            <p className="eventItem-title">title</p>
            <p className="eventItem-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis eos, voluptates veniam reiciendis dolorem officia
            </p>
            <p className="eventItem-location">5/278</p>
            <div className="eventItem-bot">
                <p className="eventItem-date">11.12.2000</p>
                <p className="eventItem-person">Julia Hulia</p>
            </div>
        </div>
    );
};

export default Eitem;
