import React from 'react'
import Main from '/src/Components/Main/Main.jsx'
import Popular from '/src/Components/Popular-watches/Popular-watches.jsx'
import Gender from '/src/Components/gender/Gender.jsx'
import Recent from '/src/Components/Recently/Recently.jsx'

function Home(){
  return (
    <>
        <Main/>
        <Popular/>
        <Gender/>
        <Recent/>
    </>
  )
}

export default Home