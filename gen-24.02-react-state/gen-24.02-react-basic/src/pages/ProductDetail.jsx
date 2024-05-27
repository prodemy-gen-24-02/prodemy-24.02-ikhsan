import Header from "../layout/Header";
import Thumbnail from "../components/DetailProduct/Thumbnail";
import {Products} from "../data/Products";
import Footer from "../layout/Footer";
import MessageButton from "../components/MessageButton";

const ProductDetail = () => {
    return(
        <>
        <div className="flex flex-col">
            <Header/>
            <Thumbnail product= {Products}/>
            <MessageButton/>
            <Footer/>
        </div>
        </>
    )
    }

export default ProductDetail;