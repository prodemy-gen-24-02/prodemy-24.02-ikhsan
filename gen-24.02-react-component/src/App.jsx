import './App.css';
import { ListProduct } from './listProduct';
import Card from './components/ProductCard';

const App = () => {

  return (
    <>
    <Card list={ListProduct}/>
    </>
  )
}

export default App
