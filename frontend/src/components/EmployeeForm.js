import React, { useState } from 'react';

function EmployeeForm({ onAddEmployee, onViewEmployee}) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEmployee({ name, age, company, role });
    setName('');
    setAge('');
    setCompany('');
    setRole('');
    onViewEmployee()
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="mt-1 block w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Company</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="mt-1 block w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Role</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="mt-1 block w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
