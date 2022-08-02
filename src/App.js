
import React , { createContext,useReducer } from 'react';
import "./App.css";
import ChildA from "./component/ChildA";
import ChildB from "./component/ChildB";
import ChildC from "./component/ChildC";
import {reducer} from './reducers/CountReducer';


export const ToDoContext = createContext(null);

function App() {

  const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
  ];

  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (

    <ToDoContext.Provider value={dispatch}>
      <ChildA todos={todos} />
      <ChildB todos={todos} />
      <ChildC todos={todos} />
    </ToDoContext.Provider>
  );

}

export default App;