import React from 'react'

function Character(props){
  const {starWarsData} = props
  
  return(
    <div>
      <h2>{starWarsData.name}</h2>
      <h3>{starWarsData.birth_year}</h3>
    </div>
  )
}

export default Character