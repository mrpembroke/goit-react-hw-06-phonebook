import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import Container from './components/Container';
import './App.css';

export default function App() {
  return (
    <Container>
      <h1 className="title">My Phonebook </h1>
      {/* <h2 className="subtitle">Add new contact</h2> */}
      <ContactForm />
      {/* <h2 className="subtitle">Find contact</h2> */}
      <Filter /*value={filter} onChange={changeFilter} */ />
      <h2 className="subtitle">My contacts:</h2>
      <ContactList /*contacts = { getVisibleContacts() }
         onDeleteContact = {deleteContact}*/
      />
    </Container>
  );
}
