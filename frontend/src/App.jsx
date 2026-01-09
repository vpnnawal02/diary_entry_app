import React from 'react'
import Navbar from './assets/components/Navbar'
import Form from './components/Form'
import Notes from './components/Notes'
import BackToTopButton from './components/BackToTopButton'

const App = () => {
  return (
    <>
      <Navbar />
      <Form />
      <Notes />
      <BackToTopButton />
    </>
  )
}

export default App
