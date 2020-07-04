import React from 'react'
import "./TodoListItem.css"

interface TodoListItemProps {
    todo: Todo
    toggleTodo: toggleTodo
    }

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
    return (
       <li>
           <label className={ todo.complete ? "complete" : undefined }>
               <input type="checkbox" checked={todo.complete} onChange={()=> toggleTodo(todo)} />
               {todo.text} 
               {/* renders the todo list */}
           </label>
       </li>
    )
}
