import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Employess from './Employess';
import Footer from './Footer';
import Nav from './nav';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupedTeamMembers from './GroupedTeamMembers';
import NotFound from './NotFound';

function App() {
  const [selectedTeams, setselectedTeams] = useState(JSON.parse(localStorage.getItem('selectedTeams')) || 'TeamB');
  const [employess, setEmployess] = useState(JSON.parse(localStorage.getItem('employesList')) || [
    { id: 1, firstName: "shree", course: "computerScience", gender: "Female", teamName: "TeamA" },
    { id: 2, firstName: "Mano", course: "AI", gender: "male", teamName: "TeamA" },
    { id: 3, firstName: "Amul", course: "Bcom", gender: "Female", teamName: "TeamA" },
    { id: 4, firstName: "Kumar", course: "computerScience", gender: "male", teamName: "TeamB" },
    { id: 5, firstName: "Bhuvanesh", course: "computerScience", gender: "male", teamName: "TeamB" },
    { id: 6, firstName: "ajith", course: "computerScience", gender: "Female", teamName: "TeamB" },
    { id: 7, firstName: "Sandhu", course: "computerScience", gender: "Female", teamName: "TeamC" },
    { id: 8, firstName: "vijay", course: "computerScience", gender: "male", teamName: "TeamC" },
    { id: 9, firstName: "jom", course: "computerScience", gender: "female", teamName: "TeamD" }
  ]);

  useEffect(() => {
    localStorage.setItem('employesList', JSON.stringify(employess));
  }, [employess]);

  useEffect(() => {
    localStorage.setItem('selectedTeams', JSON.stringify(selectedTeams));
  }, [selectedTeams]);

  function handleTeamChange(event) {
    setselectedTeams(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transform = employess.map((employes) =>
      employes.id === parseInt(event.currentTarget.id) ?
        (employes.teamName === selectedTeams) ?
          { ...employes, teamName: '' } :
          { ...employes, teamName: selectedTeams } :
        employes
    );
    setEmployess(transform);
  }

  return (
    <Router>
      <Nav />
      <Header
        selectedTeams={selectedTeams}
        teamcount={employess.filter((employes) => employes.teamName === selectedTeams).length}
      />
      <Routes>
        <Route path='/' element={
          <Employess
            employess={employess}
            selectedTeams={selectedTeams}
            handleEmployeeCardClick={handleEmployeeCardClick}
            handleTeamChange={handleTeamChange}
          />
        } />
        <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers employess={employess} selectedTeams={selectedTeams} setTeam={setselectedTeams} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
