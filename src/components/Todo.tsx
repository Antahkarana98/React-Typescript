import { type Todo as TodoType } from '../types'

type Props = TodoType

const Todo: React.FC<Props> = ({ id, title, completed }) => {
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onClick={() => {}}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => {}} />
    </div>
  )
}

export default Todo;
