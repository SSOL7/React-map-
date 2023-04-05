import React from 'react'
import './App.css'

const Card = (props) => {
  return (
    <div className='cards'>
        <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name} />
            <h3>{props.name}</h3>
            <button onClick={props.removecard} className='remove-button'>Remove card</button>

            <div className='flex'>
                <button onClick={props.addlike} className='like'>Vote</button>
                {props.likes >= 0 ? <p>❤️{props.likes}</p> : <p>💔{props.likes}</p>}
                <button onClick={props.removelike} className='downvote'>Downvote</button>
            </div>
    </div>
  )
}

export default Card