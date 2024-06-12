import React from 'react'
import user from "../Images/1144760.png"

const ContactCard = (props) => {
    const{ id, name, email} = props.contact
  return (

    <div>
    <div className='item'>
        <img className='ui avatar images' src={user} alt="" style={{width:'10%', height:'10%'}}/>
         <div className='content'>
            <div className='header'>
                {name}
            </div>
            <div>{email}</div>

            <i className='trash alternate outline icon' style={{color:'red', marginTop:'7px'}}></i>
         </div>
        </div>

    </div>
  )
}

export default ContactCard