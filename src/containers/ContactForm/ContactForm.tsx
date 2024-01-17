import { useParams } from 'react-router-dom';
import Form from '../../components/Form/Form';

const ContactForm = () => {
  const params = useParams();

  return (
    <>
      <h3>{params && params.id ? 'Edit' : 'Add new'} contact</h3>
      <Form
        id={params ? params.id : null}
      />
    </>
  );
};

export default ContactForm;