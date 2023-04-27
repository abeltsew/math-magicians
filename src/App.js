import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Layout from './components/Layout';
import Quote from './components/Quote';
import Home from './components/Home';

const App = () => (
  <BrowserRouter>
    <Layout />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="*" element={<div>Not Found 404</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
