/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SingIn from '../SingIn';
import Navbar from '../../Components/Navbar';
import './App.css';


//Usamos userRoutes
const AppRoutes = () => {
  let routes = useRoutes ([
    { path: '/', element: <Home />},
    { path: '/my-account', element: <MyAccount />},
    { path: '/my-order', element: <MyOrder />},
    { path: '/my-orders', element: <MyOrders />},
    { path: '/*', element: <NotFound />},
    { path: '/sing-in', element: <SingIn />}
  ])
  return routes
}


const App = () => {   
  return (

    //Envuelvo en BrowserRouter 
    //A la funcion contenedora de rutas
    <BrowserRouter>
      <AppRoutes />
      <Navbar/>
    </BrowserRouter>
  )
}

export default App
