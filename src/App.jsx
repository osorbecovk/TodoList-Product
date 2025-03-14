import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import About from "./Components/About"
import Services from "./Components/Services"
import { Route, Routes } from 'react-router-dom'
import Errorr from './Components/Error'

function App() {
   
  let routers = [
    { id: 1, link: "/", element: <Hero /> },
    { id: 2, link: "/about", element: <About /> },
    { id: 3, link: "/services", element: <Services /> },
    { id: 4, link: "/*", element: <Errorr />}
  ]

  return (
    <div className='App'>
      <Header />
      <Routes>
        {routers.map((el) => (
          <Route key={el.id} path={el.link} element={el.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
