import React, { useState, useEffect } from 'react';

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('/api/employees');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  return (
    <div>
      <h1>Employee List</h1>
      {employees.map((employee) => (
        <div key={employee._id}>
          <p>Name: {employee.name}</p>
          <p>Email: {employee.email}</p>
          <p>Phone Number: {employee.phoneNumber}</p>
          <p>Designation: {employee.designation}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
