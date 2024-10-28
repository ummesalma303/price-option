import './App.css'
import BarChat from './components/BarChat/BarChat'
import DaisyNav from './components/DaisyNav/DaisyNav'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <BarChat></BarChat>
      <Phones></Phones>
    </>
  )
}

export default App
