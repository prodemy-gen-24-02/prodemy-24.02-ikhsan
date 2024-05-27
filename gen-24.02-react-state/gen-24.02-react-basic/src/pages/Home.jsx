import '../App.css';
import { Products } from '../data/Products';
import { Highlight } from '../data/Highlight';
import { DiscountProduct } from '../data/DiscountProduct';
import { Featured } from '../data/Featured';
import Card from '../components/ProductCard';
import Header from '../layout/Header';
import MessageButton from '../components/MessageButton';
import Footer from '../layout/Footer';
import HighlightCard from '../components/HighlightCard';
import BannerOne from '../components/BannerOne';
import DiscountCard from '../components/ProductDiscountCard';
import BannerTwo from '../components/BannerTwo';
import BannerThree from '../components/BannerThree';
import FeaturedCard from '../components/FeaturedCard';
import ProductCardTwo from '../components/ProductCardTwo';
import { ProductFav } from '../data/ProductFav';

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center pb-0'>
            <Header/>
            <HighlightCard highlight={Highlight}/>
            <BannerOne/>
            <Card product={Products}/>
            <BannerTwo/>
            <BannerThree/>
            <ProductCardTwo productTwo={ProductFav}/>
            <FeaturedCard featured={Featured}/>
            <DiscountCard discounted={DiscountProduct}/>
            <MessageButton/>
            <Footer/>
        </div>
    )
}
export default Home;