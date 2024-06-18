import React from 'react'

import femaleProfile from'./images.js/femaleProfile.jpg';

import maleProfile from './images.js/maleProfile.jpg';

const Employess = ({employess,selectedTeams,handleEmployeeCardClick,handleTeamChange}) => {
    
  return (
    <main className='container'>
      <div className="row justify-content-center mb-4 mt-4">
        <div className='col-8'>
          <select className='form-select form-select-lg 'value={selectedTeams} onChange={handleTeamChange}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>

        </div>
        </div>
      <div class="row justify-content-center mb-4 mt-4">
        <div class='col-8'>
          <div class='card-collection'>
        {
      employess.map((employes)=>(

        <div key={employes.id}id={employes.id} className={(employes.teamName===selectedTeams?'card m-2 standout':'card m-2'
        )} 
        style={{cursor:"pointer"}} onClick={handleEmployeeCardClick}>
        {
          (employes.gender==='male')?
        < img src={maleProfile} className='card-img-top'/>:
        < img src={femaleProfile} className='card-img-top'/>

        }
        <div className='card-body'>
        <h5 className='card-title'>Full Name:{ employes.firstName}</h5>
        <p className='card-text'><b>Course:{employes.course}</b></p>
        
        </div>
          
        </div>
          ))
        }
        </div>
        
        
        </div>
      </div>
    </main>
    

  )
  
}

export default Employess