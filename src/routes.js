import Pedidos from './pages/PedidosProductos.vue'
import Ventas from './pages/VentasNew.vue'
import Productos from './pages/ProductosCard.vue'
import Home from './pages/HomePage.vue'
import Agregar from './pages/AgregarProductos.vue'


export const routes = [
    {path:'/Ventas',component:Ventas},
    {path:'/Pedidos',component:Pedidos},
    {path:'/Productos',component:Productos},
    {path:'/Home',component:Home},
    {path:'/Agregar',component:Agregar}
]