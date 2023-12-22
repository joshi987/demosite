import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Conatct/Contact'
import User from './Components/User/User'
import Github, {githubInfoLoader} from './Components/Github/Github'


// const router = createBrowserRouter([
//   {
//     Path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         Path:"",
//         element:<Home/>
//       },
//       {Path:"About",
//     element:<About/>}
//     ]

//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    
    <Route path='home' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route  path='github' element={<Github/>}
      loader={githubInfoLoader}
    />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RouterProvider router={router}/>
 
</React.StrictMode>,
)
