import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props)=> {

    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contact.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler = {deleteContactHandler} key={contact.id} />
        );
    });
    return (
        <div className="ui celled list">
        {renderContactList}
        <Link to="/add"><button className="ui button blue right">Add Contact</button></Link>
        Contact List
        
        </div>
        
    );
};

export default ContactList;