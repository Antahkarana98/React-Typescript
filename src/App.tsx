import { useState } from 'react'
const mockTodos = [
  {
    id: 1,
    name: 'tool1',
    completed: false
  },
  {
    id: 2,
    name: 'tool2',
    completed: true
  },
  {
    id: 3,
    name: 'tool3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  return (
    <>
      <h1>todomvc</h1>
    </>
  )
}

export default App
