import { Link } from "react-router-dom";

const EditDeleteButton = ({product, onClickDelete, onClickEdit}) => {
    return (
        <div className="join flex">
            <button
                onClick={() => onClickEdit(product.id)}
                className="btn join-item rounded-md bg-sky-950 text-sky-50 hover:bg-sky-600 transition-colors duration-200 active:translate-y-1">
                    <Link to={`/admin/editProduct/${product.id}`} ></Link>
                Edit
            </button>
            <button
                onClick={() => onClickDelete(product.id)}
                className="btn join-item rounded-md bg-rose-950 text-rose-50 hover:bg-rose-600 transition-colors duration-200 active:translate-y-1">
                Delete
            </button>
        </div>
    )
}
export default EditDeleteButton;