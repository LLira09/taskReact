import { useState } from 'react'
const Tasks = () => {
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
  return (
    <>
      {tasks.map(task => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}

export default Tasks
