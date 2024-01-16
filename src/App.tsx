import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound';
import ContactForm from './containers/ContactForm/ContactForm';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={'Contacts'} />
        <Route path='/new-contact' element={<ContactForm/>} />
        <Route path='/edit-contact/:id' element={<ContactForm/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Layout>
  );
};

export default App;