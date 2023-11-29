/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import { SearchView } from '../../Components/SearchView';
import MyAccount from '../MyAccount';
import MyOrders from '../MyOrders';
import MyOrderLast from '../MyOrderLast';
import NotFound from '../NotFound';
import SingIn from '../SingIn';
import Navbar from '../../Components/Navbar';
// import { ProductDetail } from '../../Components/ProductDetail';
import { MiContextProvider } from '../../Components/Context'
import './App.css';



//Usamos userRoutes
const AppRoutes = () => {
  let routes = useRoutes ([
    { path: '/', element: <Home />},
    { path: '/clothes', element: <Home />},

    { path: '/my-account', element: <MyAccount />},
    { path: '/my-orders', element: <MyOrders />},
    { path: '/my-orders/last', element: <MyOrderLast />},
    { path: '/my-orders/:id', element: <MyOrderLast />},
    { path: '/*', element: <NotFound />},
    { path: '/sing-in', element: <SingIn />},

  ])
  return routes
}


const App = () => {   
  return (

    //Envuelvo en BrowserRouter 
    //la funcion contenedora de rutas
    <MiContextProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar/>
      </BrowserRouter>
    </MiContextProvider>
  ) 
}

export default App
