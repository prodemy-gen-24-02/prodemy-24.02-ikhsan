import Button from "./AddToCardButton";
import {toRupiah} from "../utils/formatter";
import {Link, createSearchParams, useNavigate} from "react-router-dom";

const ProductCard = ({product}) => {

    const navigate = useNavigate();

    const onClickCard = (id, fullName) => {
        navigate({
            pathname: `/product/${id}`,
            search: createSearchParams({name: fullName}).toString()
        });
    };

    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-2xl">Produk Terlaris di Kategori Pria</h2>
            <div className="flex flex-row flex-wrap pt-2 gap-7">
                {
                    product.map((product) => (
                        // <Link to={`/product/${product.id}`}>
                            <div
                                key={product.id}
                                className="flex flex-col w-[236px] group"
                                onClick={() => onClickCard(product.id, product.fullName)}>
                                <div className="p-1 rounded-2xl shadow">
                                    <img className="group-hover:scale-95" src={product.img[0]} alt={product.name}/>
                                </div>
                                <div className="flex justify-between px-1 pt-1 items-end">
                                    <p className="font-bold text-lg">{product.brand}</p>
                                    <a href="">
                                        <svg
                                            className="tagline hover:fill-red-300"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M16.308 8.335c1.68-1.666 3.691-2.219 5.9-1.571 2.168.635 3.57 2.147 4.13 4.394.058.229.082.409.122.802l.012.127.028.279c-.039 1.496-.545 2.874-1.502 4.4-1.454 2.318-3.335 4.298-6.147 6.683-.362.306-.666.549-1.317 1.058l-.031.025c-.454.356-.665.522-.916.727-.375.305-.767.329-1.162.027-3.318-2.532-5.666-4.724-7.574-7.255-1.107-1.467-1.826-2.832-2.196-4.323-.805-3.25 1.625-6.761 4.946-7.141 1.989-.228 3.692.368 5.086 1.786.16.163.228.246.296.248.072 0 .145-.087.325-.266zm9.196 4.083a10.708 10.708 0 01-.04-.361 4.378 4.378 0 00-.095-.658c-.477-1.907-1.621-3.142-3.441-3.676-1.853-.543-3.49-.093-4.915 1.322-.74.735-1.317.744-2.04.01-1.176-1.199-2.574-1.688-4.258-1.495-2.721.312-4.75 3.243-4.09 5.907.334 1.345.993 2.594 2.024 3.962 1.836 2.435 4.11 4.56 7.339 7.028.244-.198.459-.368.898-.712l.032-.025c.64-.502.938-.74 1.287-1.034 2.74-2.324 4.557-4.237 5.946-6.451.87-1.387 1.316-2.602 1.353-3.817z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div>
                                    <p className="text-left px-1">{product.name}</p>
                                </div>
                                <div>
                                    <p className="text-left px-1 font-semibold text-lg">{toRupiah(product.price)}</p>
                                </div>
                                <Button>
                                    <p>Masukkan ke Tas</p>
                                </Button>
                            </div>
                        // </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default ProductCard;