import { useSelector } from "react-redux";
import { selectContacts, selectFiltered } from "../../redux/contactSlice";
import "./ContactList.css";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const filteredContacts = useSelector(selectFiltered);

  return (
    <ul className="contactsList">
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className="listElement">
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
}
