import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectContacts, selectFetchLoading } from '../../store/contact/contactSlice';
import ContactCard from '../../components/ContactCard/ContactCard';
import { useEffect } from 'react';
import { fetchContacts } from '../../store/contact/contactThunks';
import Spinner from '../../components/Spinner/Spinner';

const Home = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const fetchLoading = useAppSelector(selectFetchLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          {fetchLoading ? <Spinner/> : contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              id={contact.id}
              name={contact.name}
              photo={contact.photo}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;