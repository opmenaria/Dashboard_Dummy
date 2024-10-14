import React, { useEffect, useState } from 'react';
import { Button, Card } from 'antd';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import RowForm from './components/RowForm';
import SiderComp from '../src/components/Sider';
import SetForm from './components/RowForm';
import Header from './components/AddUser';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import AddUser from './components/AddUser';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard_Dummy" element={<Dashboard />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
