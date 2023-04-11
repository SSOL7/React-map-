import React from 'react'
import Card from './Card'
import Search from './Search'

function Animals(props) {
    const search_filter = props.data.filter(animal => {
        return animal.name.toLowerCase().includes(props.search.toLowerCase())
    })

  return (
    <div>
        <Search searchEvent={props.searchEvent} />
        {search_filter.map((item) =>
        <Card
        name={item.name}
        likes={item.likes}
        key={item.name}
        removecard={() => props.removecard(item.name)}
        addlike={() => props.likehandler(item.name, 'add')}
        removelike={() => props.likehandler(item.name, 'remove')}
        />)}
    </div>
  )
}

export default Animals

