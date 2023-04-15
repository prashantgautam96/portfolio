// import React from 'react'
import React, { useState, useEffect } from 'react';
import RepoCard from './RepoCard';

export const Github = () => {
    const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/prashantgautam96/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <div>
        <h1>Repositories</h1>
      <div className='github'>
        {Array.isArray(repos) && repos.map(repo => (
        <RepoCard props={repo} key={repo.id} />
        ))}
      </div>
      
     
    </div>
  )
}
