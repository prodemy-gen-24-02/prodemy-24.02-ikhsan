import { useContext, useEffect, useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { toRupiah } from "../utils/formatter";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/reducers/checkoutSlice";

const Checkout = () => {

    const [updateQty, setUpdateQty] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const {dataCheckout} = useSelector((state) => state.checkout)

    const removeCartProduct = (id) => {
        dispatch(removeFromCart(id));
    }

    let totalPrice = 0
    for(let i = 0; i < dataCheckout.length; i++){
        totalPrice += dataCheckout[i].price * dataCheckout[i].qty +7000;
    }

    const updatingQty = (id, updatedQty) => {
        dispatch(updateQty(id, updatedQty))
    }

    console.log(dataCheckout);

    return (
        <div className="flex flex-col">
            <Header/>
            <div className="mt-40 grid-cols-2 gap-5 container mx-auto" key={dataCheckout}>
                <h1 className="text-xl font-bold my-5 ml-[100px]">Tas ({dataCheckout.length})</h1>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col border rounded-3xl bg-neutral-50 gap-3 p-5 w-[1080px] self-center">
                        <div className="flex flex-col ml-4">
                            <div className="flex">
                            <svg width="26" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block h-6 w-6 !size-7"><rect x="1" y="1" width="24" height="23" rx="4" stroke="#262626"></rect><path d="M6.778 5.813v1.088h10.583L6.256 18.75v.435H19.79v-1.088H8.616l11.1-11.77-.004-.515H6.778z" fill="#262626"></path></svg>
                                <p className="font-medium pl-2">Zalora ({dataCheckout.length}/{dataCheckout.length}) barang</p>
                            </div>
                            <div className="text-sm text-gray-500 ml-9">
                                <p className="py-0">Estimasi biaya pengiriman:</p>
                                <p className="inline line-through">Rp 27.000</p>
                                <span className="text-black pl-2">Rp 7.000</span>
                            </div>
                        </div>
                        
                        {dataCheckout.length === 0 ? 
                        <h2 className="self-center font-medium text-rose-800">Belum ada produk yang disimpan di dalam tas</h2> 
                        : dataCheckout?.map((product) => (
                        <div>
                            <div className="flex rounded-3xl border items-center justify-between bg-white gap-5 mx-3 py-1 pl-5 pr-10 shadow-md w-[996px]" key={product.id}>
                                <div className="w-[100px] rounded-md p-1">
                                    <img src={import.meta.env.BASE_URL + product?.image[0]} alt="img-product" />
                                </div>
                                <div className="flex flex-col gap-1 w-42">
                                    <p className=" font-bold">{product.brand}</p>
                                    <p>{product.name}</p>
                                    <p>size: <strong className="font-medium">EU {product.selectedSize}</strong></p>
                                </div>
                                <div className="flex">
                                    <p className="font-medium">{toRupiah(product.price)} <strong className="font-normal">x</strong></p>
                                    <div>
                                        <input type="number"
                                            value={product.qty}
                                            onChange={(event) =>{updatingQty(product.id, parseInt(event.target.value))}
                                            }/>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-medium">{toRupiah(product.qty * product.price)}</p>
                                </div>
                            </div>
                            <div className="relative h-[0px]">
                                <button onClick={() => removeCartProduct(product.id)}>
                                    <svg className="w-6 absolute -top-36 right-11 hover:scale-125 active:scale-100" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="40px" height="40px" viewBox="0 0 256 256" id="Flat">
                                        <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                    ))}
                    <div className="self-end pr-10 text-right">
                        <p className="font-bold">Total: {toRupiah(
                            totalPrice
                        )}
                        </p>
                        <span className=" font-normal text-gray-500 text-xs">biaya pengiriman Rp 7.000</span>
                    </div>
                    
                    </div>
                    <div>
                        <button className="ml-[100px] btn btn-primary rounded-xl bg-black border-black text-white font-normal hover:bg-white hover:border-black hover:text-black">
                            <p>Lanjut ke Pembayaran</p>
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Checkout;