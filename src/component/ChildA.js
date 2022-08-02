import React from 'react';
import { ToDoContext } from '../App';

function ChildA(props) {
    const dispatch = React.useContext(ToDoContext);

  function handleClick() {
    dispatch({ type: "COMPLETE", id: 1 });
  }

  return (
    <button onClick={handleClick}>Add todo</button>
  );
}

export default ChildA;