import About from "../about/About";
import Cart from "../cart/cart";
import PropTypes from 'prop-types';

const Carts = ({handleActiveBtn, isActive}) => {
    return (
        <div className="w-2/4  my-5 ">
           <div className="flex justify-center gap-10">
           <button onClick={()=>handleActiveBtn('card')} className={`${isActive?'btn btn-primary':'btn'}`}>Cart</button>
           <button onClick={()=>handleActiveBtn('about')} className={`${isActive?'btn':'btn btn-primary'}`}>About</button>
           </div>
          <div className=" flex justify-center my-3">
          {
            isActive?<Cart></Cart>:<About></About>
           }
          </div>
        </div>
    );
};
Carts.propTypes = {
    handleActiveBtn:PropTypes.func,
    isActive:PropTypes.bool
};
export default Carts;