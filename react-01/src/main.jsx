import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToggleMessage from './ToggleMessage.jsx'
import TextInput from './TextInput.jsx'
import TodoList from './TodoList.jsx'
import DataSubmissionForm from './DataSubmissionForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataSubmissionForm />
    {/* <TodoList /> */}
    {/* <TextInput /> */}
    {/* <App /> */}
    {/* <ToggleMessage /> */}
  </StrictMode>,
)
