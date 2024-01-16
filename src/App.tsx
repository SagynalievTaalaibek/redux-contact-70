import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={'Contacts'} />
        <Route path='/new-contact' element={'Form New Contact'} />
        <Route path='/edit-contact/:id' element={'Form Edit Contact'} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Layout>
  );
};

export default App;