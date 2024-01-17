import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { toggleModal } from '../../store/contact/contactSlice';
import { fetchOneContact } from '../../store/contact/contactThunks';

interface Props {
  id: string;
  name: string;
  photo: string;
}

const ContactCard: React.FC<Props> = ({ id, name, photo }) => {
  const dispatch = useAppDispatch();
  const getOneContact = async (id: string) => {
    dispatch(toggleModal());
    dispatch(fetchOneContact(id));
  };

  return (
    <div className="card mb-3" onClick={() => getOneContact(id)}>
      <div className="row">
        <div className="col-4">
          <img className="w-50" src={photo} alt={name} />
        </div>
        <div className="col-8">
          <h5 className="mt-3">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;