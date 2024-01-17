import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound';
import ContactForm from './containers/ContactForm/ContactForm';
import Home from './containers/Home/Home';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/new-contact' element={<ContactForm/>} />
        <Route path='/edit-contact/:id' element={<ContactForm/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Layout>
  );
};

export default App;