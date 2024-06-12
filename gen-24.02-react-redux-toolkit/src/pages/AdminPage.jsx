import useSWR from "swr";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import NavbarAdmin from "../components/Admin/NavbarAdmin";
import ProductList from "../components/Admin/ProductList";
import { useState } from "react";

const AdminPage = () => {

    const getProduct = (url) => axios
        .get(url)
        .then(resp => resp.data, mutate);

    const {data: product, error: err, mutate} = useSWR(
        "http://localhost:3000/products",
        getProduct,
    );
    if (err) 
        return alert(JSON.stringify(err));

    const [status, setStatus] = useState(false);

    return (
        <div className="w-full flex flex-col">
            <NavbarAdmin/>
        <div className="admin-page flex flex-col container my-20 self-center w-[1057px]">
            <div className="flex self-end gap-1">
                <div className="join">
                    <input type="text" name="search" className="input-bordered join-item search-input border px-2 rounded-md py-3" placeholder="Search..."/>
                    <button className="btn-bordered border-green-900 join-item border rounded-md px-5 py-2 bg-green-900 text-green-50 hover:bg-green-600 transition-colors duration-200 shadow-lg active:translate-y-1">
                        Search  
                    </button>
                </div>
                <button className="border rounded-md px-5 py-2 bg-orange-900 text-orange-50 hover:bg-orange-600 transition-colors duration-200 shadow-lg active:translate-y-1"
                        onClick={() => setStatus(!status)}>
                        {status?  <Link to="/admin/addProduct">Add Product</Link> : <Link to="/admin">Add Product</Link>}
                </button>
            </div>
            <div>
                <Outlet product={product}/>
            </div>
            <div className="flex justify-center mt-5">
                <table className="table w-auto bg-neutral-200 shadow-md shadow-neutral-400">
                    <thead>
                        <tr className="text-center font-bold text-black">
                            <th>Id</th>
                            <th>Brand</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Size</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                        <tbody>
                            <ProductList 
                                product = {product}
                                mutate = {mutate}/>
                        </tbody>
                </table>
            </div>
        </div>
        </div>
        
    )
}
export default AdminPage;