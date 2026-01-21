import React from 'react'
import { Routes, Route } from "react-router-dom";
import Form from './components/Form'
import Notes from './components/Notes'
import BackToTopButton from './components/BackToTopButton'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/notes" element={<Notes />} />
        {/* You can add more later: /menu, /contact, etc. */}
      </Routes>
      <BackToTopButton />
    </>
  )
}

export default App
