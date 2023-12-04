interface Todo {
  id: number
  title: string
  completed: boolean
}

type listTodos = Todo[]

interface Props {
  todos: listTodos
}

const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.title}
        </li>
      ))}
    </ul>
  )
}

export default Todos
