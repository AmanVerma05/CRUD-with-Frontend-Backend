import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
  const response = await axios.get('http://3.25.154.221:8000/api/view');
  return response.data;
});

export const addEmployee = createAsyncThunk('employees/addEmployee', async (employee) => {
  await axios.post('http://3.25.154.221:8000/api/addemployee', employee);
});

export const updateEmployee = createAsyncThunk('employees/updateEmployee', async ({ emp_id, updatedData }) => {
  await axios.patch(`http://3.25.154.221:8000/api/empupdate?emp_id=${emp_id}`, updatedData);
});

export const deleteEmployee = createAsyncThunk('employees/deleteEmployee', async (emp_id) => {
  await axios.delete(`http://3.25.154.221:8000/api/empdelete?emp_id=${emp_id}`);
});

const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.employees = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addEmployee.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(updateEmployee.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(deleteEmployee.fulfilled, (state) => {
        state.status = 'succeeded';
      });
  },
});

export default employeeSlice.reducer;
