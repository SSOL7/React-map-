import React from 'react'

function Search(props) {
  return (
    <div>
        <input onChange={props.searchEvent} placeholder='Search for an animal'/>
    </div>
  )
}

export default Search