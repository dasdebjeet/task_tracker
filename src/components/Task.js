import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
      <div className={`task ${task.reminder ? 'reminder' : ''} flexc`} onDoubleClick={() => onToggle(task.id)}>
          <div className='task_content flexc'>
            <h3>
                {task.text}
            </h3>
            <p>{task.day}</p>    
          </div>
          <div className='task_clsBtn flexc'  onClick={() => onDelete(task.id)}>
            <FaTimes />
          </div>
      </div>
  )
}

export default Task