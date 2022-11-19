import styles from './TaskItem.module.css';
import { CheckIcon } from '@heroicons/react/24/outline';
import { PencilIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const TaskItem = ({task, deleteTask, updateTask}) => {

    const[isChecked, setIsChecked] = useState(task.checked);

    const handleCheckBoxChange = (e) => {
        setIsChecked(!isChecked);
        updateTask(task.id);
    }

  return (

    <li className={styles.task}>
        <div className={styles['task-group']}>
            <input 
               type="checkbox"
               className={styles.checkbox}
               checked={isChecked}
               onChange={handleCheckBoxChange}
               name={task.name}
               id={task.id} 
            />
            <label 
                htmlFor={task.id}
                className={styles.label}
            >
                    {task.name}

                    <p className={styles.checkmark}>
                    <CheckIcon  strokeWidth={2} width={24} height={24} />
                    </p>
            </label>
        </div>

        <div className={styles["task-group"]}>
            <button
                className='btn'
                aria-label={`Update &{task.name} Task`}
                onClick={ () => updateTask(task.name)} 
                >
                <PencilIcon width={24} height={24} />
            </button>

            <button
                className={`btn ${styles.delete}`}
                aria-label={`Delete &{task.name} Task`}
                onClick={ () => deleteTask(task.id)} 
                >
                <TrashIcon width={24} height={24} />
            </button>            

        </div>

    </li>
  )
}

export default TaskItem;
