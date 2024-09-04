import Home from "./pages/Home"
import Customizer from "./pages/Customizer"
import CanvasModel from "./canvas"

function App() {
  return (
    <main className='app transition-all ease-in'>
      <Home />
      <CanvasModel />
      <Customizer />
      {/* Add more routes here */}


    </main>
  )
}

export default App
