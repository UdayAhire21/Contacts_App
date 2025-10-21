import React from 'react';
import user from '../Images/user.png';
const ContactCard = (props) => {
    const {id,name,email} = props.contact;
    return (
         <div className="item">
            <div className="content">
                <img className="ui avatar image" src={user} alt="user"/>
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <div className="right floated content">
                <i className="trash alternate outline icon" style={{color: "red", marginTop: "7px"}}></i>
            </div>
            </div>
    );
};
export default ContactCard; 