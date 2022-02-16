import { Header } from './components/Header'
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './views/Home';
import { Devs } from './views/Devs';


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="devs" element={<Devs />} />
      </Routes>
    </div>
  )
}

export default App
