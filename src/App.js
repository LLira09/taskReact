import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:20pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Dentist Appointment',
      day: 'Feb 5th at 12:00pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Dinner With Wife',
      day: 'Feb 5th at 8:20pm',
      reminder: true
    },
    {
      id: 4,
      text: 'App Due',
      day: 'Feb 10th at 10:00am',
      reminder: false
    }
  ])

  // Delete Task
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No tasks'
      )}
    </div>
  )
}

export default App
