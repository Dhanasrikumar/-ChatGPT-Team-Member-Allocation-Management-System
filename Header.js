import React from 'react'

const Header = ({selectedTeams,teamcount}) => {
  return (
    <header className='container mt-5'>
      <div className='row justify-content-center mt-3 mb-4'>
        <div className='col-8'>
    <h1>Team Members Allocation</h1>

    <h3>{selectedTeams} has {teamcount} Members</h3>
    </div>
    </div>
    </header>
  )
}

export default Header
