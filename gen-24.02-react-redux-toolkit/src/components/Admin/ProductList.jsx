import axios from "axios";
import EditDeleteButton from "./EditDeleteButton";
import { useNavigate, useParams } from "react-router-dom";

const ProductList = ({product, mutate}) => {

    const onClickDelete = (id) => {
        axios.delete(`http://localhost:3000/products/${id}`).then(() => mutate ());
    };

    const navigate = useNavigate();

    const onClickEdit = (id) => {
        navigate({
            pathname:`/admin/editProduct/${id}`
        });
    }

    return (
        <>
            {product?.map(product => (
                <tr key={product.id} className=" border-slate-800 text-center">
                    <td>
                        <p>{product.id}</p>
                    </td>
                    <td>
                        <p>{product.brand}</p>
                    </td>
                    <td>
                        <p>{product.name}</p>
                    </td>
                    <td>
                        <p>{product.price}</p>
                    </td>
                    <td>
                        <div className="flex gap-1">
                            {product?.size.map(size => (
                                <p className="rounded-md px-1" key={size}>{size}</p>
                            ))}
                        </div>
                    </td>
                    <td className="w-auto">
                        <div className="flex gap-1">
                            {product?.image?.map(image => (
                                <img key={image} src={image} alt="images" className="border bg-white p-1 rounded-xl w-10" />
                            ))}
                        </div>
                    </td>
                    <td className="flex justify-center gap-2 my-auto">
                        <EditDeleteButton 
                            product = {product}
                            onClickDelete = {onClickDelete}
                            onClickEdit = {onClickEdit}/>
                    </td>
                </tr>
            ))}
        </>
    )
}
export default ProductList;