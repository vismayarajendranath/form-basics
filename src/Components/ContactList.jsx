import React from 'react'
import ContactCard from './ContactCard';

const ContactList = ({contacts,removeContactHandler,editContactHandler}) => {
    
    // const renderContactList = props.contacts.map((contact)=>{
    //     return <div className='item'>
    //      <div className='content'>
    //         <div className='header'>
    //             {contact.name}
    //         </div>
    //         <div>{contact.email}</div>

    //         <i className='trash alternate outline icon'></i>
    //      </div>
    //     </div>
    // })
        const renderContactList = contacts.map((contact)=>{
        return (
            
            <ContactCard contact={contact} removeContactHandler={removeContactHandler} editContactHandler={editContactHandler}/>
        )
       
    })
  return (
    <>
    <div className='ui celled list'>
        {renderContactList}
    </div>
    </>
  )
}

export default ContactList