import React, { useState } from 'react';
import Employee from './components/Employees';
import Data from './components/Data';
import './App.css';
import Teams from './components/Teams';
const App = () => {
  const [selectedTeam, setTeam] = useState('TeamB');

  const [employees, setEmployees] = useState(Data);
  console.log(Data);

  function handleClick(event) {
    const transformedEmployees = employees.map(
      employee =>
        employee.id === parseInt(event.currentTarget.id)
          ? employee.teamName === selectedTeam
            ? { ...employee, teamName: '' }
            : { ...employee, teamName: selectedTeam }
          : employee
    );

    setEmployees(transformedEmployees);
  }
  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }

  return (
    <div className="container">
      <Teams
        selectedTeam={selectedTeam}
        handleTeamSelectionChange={handleTeamSelectionChange}
      />
      <Employee
        employees={Data}
        handleClick={handleClick}
        selectedTeam={selectedTeam}
      />
    </div>
  );
};

export default App;
