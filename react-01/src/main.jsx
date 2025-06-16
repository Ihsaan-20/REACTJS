import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToggleMessage from './ToggleMessage.jsx'
import TextInput from './TextInput.jsx'
import TodoList from './TodoList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoList />
    {/* <TextInput /> */}
    {/* <App /> */}
    {/* <ToggleMessage /> */}
  </StrictMode>,
)
