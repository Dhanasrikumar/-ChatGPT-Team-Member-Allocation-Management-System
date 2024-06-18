import React from 'react'
import { useState } from 'react'


const GroupedTeamMembers = ({employess, selectedTeams,setTeam}) => {
  const [groupedEmployess,setGroupedData]=useState(groupedTeamMembers());

  function groupedTeamMembers()
  {
    var teams=[];
    var teamMembers=employess.filter((employes)=>employes.teamName==="TeamA");
    var teamA={team:"TeamA",members:teamMembers,collapsed:selectedTeams==="TeamA"?false:true}
  }


  return (
    <main className='container mt-5'>
      <div className='row justify-content-center mt-3 mb-4'>
        <div className='col-8'>
    <h1>GroupedTeamMembers</h1>
    </div>
    </div>
    </main>
  )
}

export default GroupedTeamMembers
