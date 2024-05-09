import { useState } from 'react'
import Typo from './components/Typo'
import TextFieldComp from './components/TextFieldComp'
import CardComp from './components/CardComp'
import { AppBar } from '@mui/material'
import AppbarComp from './components/AppbarComp'

function App() {


  return (
    <>
     {/* <Typo/>
     <TextFieldComp/> */}
     <AppbarComp/>
     <CardComp/>
    </>
  )
}

export default App
