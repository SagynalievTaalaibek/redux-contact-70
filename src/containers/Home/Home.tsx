import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  selectContacts,
  selectDeleteLoading,
  selectFetchLoading,
  selectFetchOneLoading,
  selectFormContact,
  toggleModal,
} from '../../store/contact/contactSlice';
import ContactCard from '../../components/ContactCard/ContactCard';
import { deleteContact, fetchContacts } from '../../store/contact/contactThunks';
import Spinner from '../../components/Spinner/Spinner';
import Modal from '../../components/Modal/Modal';
import ButtonSpinner from '../../components/Spinner/ButtonSpinner';

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const contacts = useAppSelector(selectContacts);
  const oneContact = useAppSelector(selectFormContact);
  const fetchLoading = useAppSelector(selectFetchLoading);
  const fetchOneLoading = useAppSelector(selectFetchOneLoading);
  const deleteContactLoading = useAppSelector(selectDeleteLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onEdit = () => {
    navigate(`/edit-contact/${oneContact && oneContact.id}`);
    dispatch(toggleModal());
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          {fetchLoading ? <Spinner /> : contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              id={contact.id}
              name={contact.name}
              photo={contact.photo}
            />
          ))}
        </div>
        <Modal>
          <div className="modal-header">
            <button type="button" className="btn-close" onClick={() => dispatch(toggleModal())}></button>
          </div>
          {fetchOneLoading ? <Spinner /> : (
            <div className="modal-body">
              <div className="row">
                <div className="col-5">
                  <img style={{ height: '100px' }} src={oneContact?.photo} alt={oneContact?.name} />
                </div>
                <div className="col-7">
                  <h5>{oneContact?.name}</h5>
                  <p>Phone: <strong>{oneContact?.phone}</strong></p>
                  <p>Email: <strong>{oneContact?.email}</strong></p>
                </div>
              </div>
            </div>
          )}
          <div className="modal-footer">
            <button
              className="btn btn-danger"
              onClick={onEdit}
              disabled={deleteContactLoading}
            >
              Edit
            </button>
            <button
              className="btn btn-success"
              onClick={() => dispatch(deleteContact(oneContact && oneContact.id))}
              disabled={deleteContactLoading}
            >
              {deleteContactLoading && <ButtonSpinner />}
              Delete
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Home;