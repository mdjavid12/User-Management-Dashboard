import { useState } from 'react';
import EditUserModal from './EditUserModal';
import { updateUser, deleteUser } from '../services/api'; // Combined import

export default function UserTable({ users }) {
  const [editingUser, setEditingUser] = useState(null);

  // No need for separate handleEdit function since we're using setEditingUser directly
  const handleSave = async (updatedData) => {
    try {
      const savedUser = await updateUser(editingUser.id, updatedData);
      console.log('Successfully updated:', savedUser);
      setEditingUser(null);
      //alert('Hello User updated successfully! (Note: Changes not persisted in JSONPlaceholder)');
    } catch (error) {
      console.error('Failed to update:', error);
      alert('Update failed - check console for details');
    }
  };

  const handleDelete = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    
    try {
      await deleteUser(userId);
      alert(`User ${userId} deleted successfully!\n(Note: JSONPlaceholder won't actually delete)`);
      // In real app: update local state here
    } catch (error) {
      alert('Delete failed - check console for details');
      console.error(error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="space-x-6">
                <button 
                  className="btn btn-sm btn-warning"
                  onClick={() => setEditingUser(user)} // Directly using setter
                >
                  Edit
                </button>
                <button 
                  className="btn btn-sm btn-error"
                  onClick={() => handleDelete(user.id)} // Fixed to use handleDelete
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

