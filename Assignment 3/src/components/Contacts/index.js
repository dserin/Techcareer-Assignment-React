import { useState } from "react";
import List from "./List";
import Form from "./Form";
import { friendList } from "../../data";

function Contacts() {
  const [contacts, setContacts] = useState(friendList);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
