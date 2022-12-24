import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./Header"
import Card from "./Card"
import data from "./data"
function App() {
  const cards = data.map(item => {
    return (
      <Card item={item}/>
    )
  })
  return (
    <div>
      <Header/>
      {cards}
    </div>
  )
}

export default App
