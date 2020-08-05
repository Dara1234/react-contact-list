import React from "react";

export default React.createContext();

export const ContactProvier = props => {
    const [contacts, setContacts] = React.useState([]);

    return <React.ContactContext.Provider value={[contacts, setContacts]}>{props.choldren}</React.ContactContext.Provider>;
}
