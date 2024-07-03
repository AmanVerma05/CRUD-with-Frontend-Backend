import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, addEmployee, updateEmployee, deleteEmployee } from './store/features/employeeSlice';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleViewEmployee = async (employee) => {
    dispatch(fetchEmployees());
  };

  const handleAddEmployee = async (employee) => {
    await dispatch(addEmployee(employee));
    dispatch(fetchEmployees());
  };

  const handleUpdateEmployee = async (emp_id, updatedData) => {
    await dispatch(updateEmployee({ emp_id, updatedData }));
    dispatch(fetchEmployees());
  };

  const handleDeleteEmployee = async (emp_id) => {
    await dispatch(deleteEmployee(emp_id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee CRUD App</h1>
      <EmployeeForm 
        onAddEmployee={handleAddEmployee} 
        onViewEmployee={handleViewEmployee}
      />
      <EmployeeList
        employees={employees}
        onUpdateEmployee={handleUpdateEmployee}
        onDeleteEmployee={handleDeleteEmployee}
        onViewEmployee={handleViewEmployee}
      />
    </div>
  );
}

export default App;