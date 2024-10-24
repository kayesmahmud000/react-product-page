
import PropTypes from 'prop-types';

const SingleProduct = ({product, handleSelectedProduct}) => {
    const {name, price, img, description, category }=product
    return (
        <div>
           <div className="card bg-base-100 mb-5 shadow-xl">
  <figure>
    <img className='w-full'
      src={img}
      alt={description} />
  </figure>
  <div className="card-body text-center">
    <h2 className=" text-2xl font-bold">
      {name}
    </h2>
    <p>{description}</p>
    <p className='text-xl font-bold'>${price}</p>
    <p>{category}</p>
    <div className="card-actions justify-center">
      <button onClick={()=>handleSelectedProduct(product )} className="btn border-2 border-gray-500">Add to cart</button>
      
    </div>
  </div>
</div>
        </div>
    );
};

SingleProduct.propTypes = {
    product:PropTypes.object,
    handleSelectedProduct:PropTypes.func
};

export default SingleProduct;