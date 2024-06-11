import { useContext } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { CheckoutContext } from "../context/CheckoutContext";
import { toRupiah } from "../utils/formatter";

const Checkout = () => {

    const {dataCheckout} = useContext(CheckoutContext);

    let totalPrice = 0
        for(let i = 0; i < dataCheckout.length; i++){
            totalPrice += dataCheckout[i].price * dataCheckout[i].qty;
        }

    const onNextPayment = () => {
        
    }

    return (
        <div className="flex flex-col">
            <Header/>
            <div className="mt-40 grid-cols-2 gap-5 container mx-auto">
                <h1 className="text-2xl font-bold">Tas</h1>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col border rounded-lg bg-neutral-50 gap-3 py-3">
                        {dataCheckout.length === 0 ? 
                        <h2>data tidak ditemukan</h2> : dataCheckout?.map((product) => (
                        <div className="flex rounded-lg border items-center justify-between bg-white gap-5 mx-3 p-1">
                            <div className="w-[100px] rounded-md p-1">
                                <img src={import.meta.env.BASE_URL + product?.image[0]} alt="img-product" />
                            </div>
                            <div className="flex flex-col gap-1 w-42">
                                <p className=" font-semibold">{product.brand}</p>
                                <p>{product.name}</p>
                            </div>
                            <div>
                                <p>{product.qty}</p>
                            </div>
                            <div>
                                <p>{toRupiah(product.price)}</p>
                            </div>
                            <div>
                            <p>Total: {toRupiah(product.qty * product.price)}</p>
                    </div>
                        </div>
                    ))}
                    <div className="self-end pr-3">
                        <p>Total: {toRupiah(
                            totalPrice
                        )} 
                        </p>
                    </div>
                    
                    </div>
                    <div>
                        <button className="btn btn-primary bg-black border-black text-white font-normal hover:bg-white hover:border-black hover:text-black">
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