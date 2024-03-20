import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import Form_46 from './form_46'
import Items_46 from './items_46'
import { nanoid } from 'nanoid'
import "./index.css";
const defaultItems = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false },
];

function App() {
  const [items, setItems] = useState(defaultItems);
  
  return (
      <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form_46 />
      <Items_46 items={items} />
    </section>
  )
}

export default App
