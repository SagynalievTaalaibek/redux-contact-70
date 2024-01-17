import React from 'react';

interface Props {
  id: string;
  name: string;
  photo: string;
}

const ContactCard: React.FC<Props> = ({ name, photo }) => {
  return (
    <div className="card mb-3">
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