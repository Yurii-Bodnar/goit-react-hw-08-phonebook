import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import LoaderSpiner from 'components/LoaderSpiner/LoaderSpiner';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import { Suspense } from 'react';

const ContactsPage = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <Suspense fallback={<LoaderSpiner />}>
        <Contacts />
      </Suspense>
    </>
  );
};

export default ContactsPage;
