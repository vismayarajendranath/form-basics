import './App.css';
import Header from '../src/Components/Header';
import AddContact from '../src/Components/AddContact';
import ContactList from '../src/Components/ContactList';
import { useState , useEffect} from 'react';

const App = () => {
  const LOCAL_STORAGE_KEY ="contacts";
  const [contacts ,setContacts] = useState([])

  const addContactHandler = (contact) =>{
    console.log(contact);
    setContacts([...contacts, contact])
  };
  
  useEffect(()=>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
      },[]);

  useEffect(()=>{
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts])

  return (
    <div className='ui container'>
        <Header />
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts}/>
    </div>
  )
}

export default App