import Navbar from "./Navbar";
import PropTypes from 'prop-types';

const Header = ({selectedProduct}) => {
    return (
        <div>
            <Navbar selectedProduct={selectedProduct}></Navbar>
            
        </div>
    );
};
Header.propTypes={
    selectedProduct:PropTypes.func
}

export default Header;