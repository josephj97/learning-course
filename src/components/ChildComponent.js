import React from 'react'

function ChildComponent(props) {
  return (
    <button onClick={() => props.greetHandler('Joseph')}>Greet Parent</button>
  )
}

export default ChildComponent