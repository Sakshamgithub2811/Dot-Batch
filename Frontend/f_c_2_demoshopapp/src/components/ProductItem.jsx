

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {


  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
      
      </div>
      
    </Card>
  );
}

export default ProductItem;