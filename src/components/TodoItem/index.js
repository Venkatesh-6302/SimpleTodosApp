// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list">
      <p className="title">{title}</p>
      <button className="btn" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
