// import './App.css';
// import Header from '../src/Components/Header';
// import AddContact from '../src/Components/AddContact';
// import ContactList from '../src/Components/ContactList';
// import { useState , useEffect} from 'react';

// const App = () => {
//   const LOCAL_STORAGE_KEY ="contacts";
//   const [contacts ,setContacts] = useState([])

//   const addContactHandler = (contact) =>{
//     console.log(contact);
//     setContacts([...contacts, contact])
//   };
  
//   useEffect(()=>{
//     const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     if(retriveContacts) setContacts(retriveContacts);
//       },[]);

//   useEffect(()=>{
// localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
//   },[contacts])

//   return (
//     <div className='ui container'>
//         <Header />
//     <AddContact addContactHandler={addContactHandler}/>
//     <ContactList contacts={contacts}/>
//     </div>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react'

const storedContacts = ()=>{
  const savedContacts = localStorage.getItem("contacts");
  if(savedContacts) return  JSON.parse(savedContacts);
  localStorage.setItem("contacts", JSON.stringify([]));
  return [];
}

export default function App() {
  const [contacts, setContacts] = useState(storedContacts);
  
  const [detail, setDetail] = useState({
    name: "",
    email: "",
  });

  const handleInputChage = (e) =>{
    setDetail({...detail, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts([...contacts, detail])
    setDetail({email: "", name: ""})
  }

  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts));
    console.log(contacts);
  },[contacts]);  
  

  return (
    <div>
      <header>Header</header>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='name' value={detail.name} onChange={(e)=> handleInputChage(e)} />
        <input type="text" name='email' placeholder='email' value={detail.email}  onChange={(e)=> handleInputChage(e)}/>
        <button>submit</button>
      </form>
      <ul>
        {contacts?.map((_, i)=>{
          return <li key={i} style={{marginBottom: "16px"}}>
            <p>{_.name}</p>
            <p>{_.email}</p>
            </li>
        })}
      </ul>
    </div>
  )
}
