import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './assets/Pages/Home'

function App() {
  const fuhadShiblu_myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={fuhadShiblu_myRoute}/>
    </>
  )
}

export default App
