import React from 'react';

const List = ({ toggle, items, remove }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id} style={{ cursor: 'pointer' }}>
        <span
          onClick={ () => toggle && toggle(item.id) }
          style={{ textDecoration: item.complete ? 'line-through' : 'none' }}
        >
          {item.name}
        </span>
        <button onClick={ () => remove(item) }>X</button>
      </li>
    ))}
  </ul>
)

export default List;