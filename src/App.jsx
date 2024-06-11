import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")

  useEffect(() => {
    fetch('/api/hello').then(res => res.json()).then(data => {
      setText(data.hello);
    });
  }, []);

  return (
    <>
    {text}
    </>
  )
}

export default App
