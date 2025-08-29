import { BrowserRouter,Routes,Route } from "react-router"
import Test from "./pages/Test"
import Realtime from "./pages/Realtime"
import Collab from "./pages/collab"
import Home from "./pages/Home"
import './app.css';

function App() {
  

  return(
   <BrowserRouter>
  <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/Test" element={<Test />}/>
       <Route path="/realtime/:roomId" element={<Realtime />}/>
       <Route path="/collab/:roomId" element={<Collab />}/>

  </Routes>
  </BrowserRouter>
   
  )
}

export default App
