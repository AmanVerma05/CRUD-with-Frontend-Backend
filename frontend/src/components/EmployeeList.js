import React, { useEffect, useState } from 'react';

function EmployeeList({ employees, onUpdateEmployee, onDeleteEmployee, onViewEmployee}) {
  const [editEmpId, setEditEmpId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editAge, setEditAge] = useState('');
  const [editCompany, setEditCompany] = useState('');
  const [editRole, setEditRole] = useState('');

  const handleEdit = (employee) => {
    setEditEmpId(employee.emp_id);
    setEditName(employee.name);
    setEditAge(employee.age);
    setEditCompany(employee.company);
    setEditRole(employee.role);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdateEmployee(editEmpId, { name: editName, age: editAge, company: editCompany, role: editRole });
    setEditEmpId(null);
    setEditName('');
    setEditAge('');
    setEditCompany('');
    setEditRole('');
  };

  const handleDelete = (emp_id) => {
    onDeleteEmployee(emp_id)
  };

  useEffect(()=>{
    onViewEmployee()
  },[employees])

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.emp_id} className="mb-2">
            {employee.name} - {employee.age} - {employee.company} - {employee.role}
            <button onClick={() => handleEdit(employee)} className="ml-2 text-blue-500">Edit</button>
            <button onClick={() => handleDelete(employee.emp_id)} className="ml-2 text-red-500">Delete</button>
          </li>
        ))}
      </ul>
      {editEmpId && (
        <form onSubmit={handleUpdate} className="mt-4">
          <div className="mb-2">
            <label className="block text-sm font-medium">Edit Name</label>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="mt-1 block w-full p-2 border rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium">Edit Age</label>
            <input
              type="number"
              value={editAge}
              onChange={(e) => setEditAge(e.target.value)}
              className="mt-1 block w-full p-2 border rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium">Edit Company</label>
            <input
              type="text"
              value={editCompany}
              onChange={(e) => setEditCompany(e.target.value)}
              className="mt-1 block w-full p-2 border rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium">Edit Role</label>
            <input
              type="text"
              value={editRole}
              onChange={(e) => setEditRole(e.target.value)}
              className="mt-1 block w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update Employee</button>
        </form>
      )}
    </div>
  );
}

export default EmployeeList;
