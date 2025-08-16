import { useState, useEffect } from 'react';
import { fetchUsers } from './services/api';
import UserTable from './components/UserTable';

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => { //This means: When React calls me, I'll run loadUsers()
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    loadUsers();
  }, []); //Run this effect only once.It's like telling React: "You don't need to re-run this effect for any reason"

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">User Management Dashboard</h1>
      <UserTable users={users} />
    </div>
  );
}
