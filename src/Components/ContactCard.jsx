import React from "react";
import user from "../Images/1144760.png";

const ContactCard = ({ contact, removeContactHandler }) => {
  return (
    <div>
      <div className="item">
        <img
          className="ui avatar images"
          src={user}
          alt=""
          style={{ width: "10%", height: "10%" }}
        />
        <div className="content">
          <div className="header">{contact.name}</div>
          <div>{contact.email}</div>
          <button onClick={() => removeContactHandler(contact.id)}>
            <i
              className="trash alternate outline icon"
              style={{ color: "red", marginTop: "7px" }}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
