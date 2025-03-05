// EmployeeList.js
import React from "react";
import { useSelector } from "react-redux";

const EmployeeList = () => {
  const employees = useSelector((state) => state.user.employees);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
