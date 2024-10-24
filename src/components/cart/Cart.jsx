
import PropTypes from 'prop-types';

const Cart = ({selectedProduct, handleDelete}) => {
    
    return (
        <div>
           {
            selectedProduct.map((p ,idx)=><div key={idx}>
                <div className='flex bg-gray-300 rounded-md p-2 items-center mt-2 gap-2'>
                    <img className='w-10' src={p.img} alt="" />
                    <h2 className='w-2/4'>{p.name}</h2>
                    <p>${p.price}</p>
                    <button onClick={()=>handleDelete(p.id)} className='border-black border px-2  rounded-sm  bg-white'>Delete</button>
                </div>
            </div>)
           }
        </div>
    );
};

Cart.propTypes = {
    selectedProduct:PropTypes.object,
    handleDelete:PropTypes.func
};

export default Cart;