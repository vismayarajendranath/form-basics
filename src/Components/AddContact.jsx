import React, { useState } from "react";

const AddContact = (props) => {
  const [detail, setDetail] = useState({
    name: "",
    email: "",
  });
  console.log(detail);
  let add = (e) => {
    e.preventDefault();
    if (detail.name === "" || detail.email === "") {
      alert("all feilds are mandetory");
      return;
    }
    props.addContactHandler(detail);
    setDetail({name:'', email:''})
  };
  return (
    <>
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={detail.name}
              onChange={(e) => setDetail({ ...detail, name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="name"
              value={detail.email}
              onChange={(e) => setDetail({ ...detail, email: e.target.value })}
            />
          </div>
          <button className="ui button blue"> ADD</button>
        </form>
      </div>
    </>
  );
};

export default AddContact;
