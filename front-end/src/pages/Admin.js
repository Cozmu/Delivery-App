import { useEffect, useState } from 'react';
import AdminForm from '../components/AdminForm';
import NavBar from '../components/NavBar';
import Table from '../components/Table';
import { HOST, PROTOCOL } from '../utils/apiHost';

export default function Admin() {
  const [users, setUsers] = useState([]);

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  useEffect(() => {
    const getUser = async () => {
      const request = await fetch(`${PROTOCOL}://${HOST}/users`, {
        method: 'GET',
        mode: 'cors',
        headers,
      });
      const response = await request.json();
      setUsers(response);
    };
    getUser();
  });

  return (
    <div>
      <NavBar />
      <AdminForm />
      <Table users={ users } setUsers={ setUsers } />
    </div>
  );
}
