import "./App.css";
import Header from "../src/Components/Header";
import AddContact from "../src/Components/AddContact";
import ContactList from "../src/Components/ContactList";
// import Study from "./Components/Study";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchedContacts, setSearchedContacts] = useState([]);

  const [editItem, setEditItem] = useState({})

  const searchHandler = () => {
    // setSearchTerm(term)
    const arr = contacts.filter((item) => {
      // console.log(Object.values(item).join('')); => to search both email & name by using Object.value property
      return Object.values(item).join('').includes(searchTerm);
    });
    setSearchedContacts(arr)
    console.log(arr);
  };

  // const [soo, setSoo] = useState('vis')
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([{ id: uuid(), ...contact },...contacts, ]);
  };

  const removeContactHandler = (id) => {
    console.log(id);
    const filteredContact = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(filteredContact);
  };


const editContactHandler =(id) =>{
const filteredEditItem = contacts.filter((item)=>{
  return item.id === id
})

// spread values inside array in a object
setEditItem(...filteredEditItem)
// console.log(...filteredEditItem);
}

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header
        searchTerm={searchTerm}
        searchHandler={searchHandler}
        setSearchTerm={setSearchTerm}
      />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList
        contacts={searchedContacts.length > 0 ? searchedContacts : contacts}
        removeContactHandler={removeContactHandler} editContactHandler={editContactHandler}
      />
      {/* <Study soo={soo} />
    <button onClick={() => {setSoo('sneham')}}>click</button> */}
    </div>
  );
};

export default App;

// import React, { useEffect, useState } from 'react'

// const storedContacts = ()=>{
//   const savedContacts = localStorage.getItem("contacts");
//   if(savedContacts) return  JSON.parse(savedContacts);
//   localStorage.setItem("contacts", JSON.stringify([]));
//   return [];
// }

// export default function App() {
//   const [contacts, setContacts] = useState(storedContacts);

//   const [detail, setDetail] = useState({
//     name: "",
//     email: "",
//   });

//   const handleInputChage = (e) =>{
//     setDetail({...detail, [e.target.name]: e.target.value});
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setContacts([...contacts, detail])
//     setDetail({email: "", name: ""})
//   }

//   useEffect(()=>{
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//     console.log(contacts);
//   },[contacts]);

//   return (
//     <div>
//       <header>Header</header>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name='name' placeholder='name' value={detail.name} onChange={(e)=> handleInputChage(e)} />
//         <input type="text" name='email' placeholder='email' value={detail.email}  onChange={(e)=> handleInputChage(e)}/>
//         <button>submit</button>
//       </form>
//       <ul>
//         {contacts?.map((_, i)=>{
//           return <li key={i} style={{marginBottom: "16px"}}>
//             <p>{_.name}</p>
//             <p>{_.email}</p>
//             </li>
//         })}
//       </ul>
//     </div>
//   )
// }
