import React from 'react'
import { TodoListItem } from './TodoListItem'

interface TodoListItemProps {
    todos: Array<Todo>
    toggleTodo: toggleTodo
}

export const TodoList: React.FC<TodoListItemProps> = ({todos, toggleTodo}) => {
    return ( <ul>
        {todos.map(todo => {
            return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        })}
    </ul>
    )
}
