
import Card from './Card';
import ProductDate from './ProductDate';
import './ProductItem.css';
const ProductItem = (props) => {
    const title=props.title;
    
    return (
        <Card className='product-item'>
          <ProductDate date={props.date}/>
          <div className='product-item__description'>
         <h2>{title}</h2>
          </div>
          
        </Card>
        );
      }
      
      export default ProductItem;