import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"
import './index.css'
import AdminPage from "./pages/AdminPage"
import AddProduct from "./components/Admin/AddProduct"
import EditProduct from "./components/Admin/EditProduct"
import Test2 from "./Test2"
import {CheckoutProvider} from "./context/CheckoutContext"
import Checkout from "./pages/Checkout"

const App = () => {

    return (
        <>
            < CheckoutProvider >
                <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/product/:id" element={<ProductDetail />}/>
                <Route path="/admin" element={<AdminPage/>}>
                <Route path="addProduct" element={<AddProduct/>}/>
                <Route path="/admin/editProduct/:id" element={<EditProduct/>}/>
                </Route>
                <Route path="/checkout" element={<Checkout/>}/>
                </Routes>
            </CheckoutProvider>
        </>
    )
}

export default App
