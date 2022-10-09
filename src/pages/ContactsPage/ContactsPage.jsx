import Contacts from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter";
import PhonebookForm from "components/PhonebookForm/PhonebookForm";

export const ContactsPage = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </>
  );
};
