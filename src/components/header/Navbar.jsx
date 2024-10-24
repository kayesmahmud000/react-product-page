

const Navbar = () => {
    return (
        <div className="navbar max-w-5xl border-b-2 mx-auto bg-base-100">
  <div className="navbar-start">
   
    <a className="btn btn-ghost text-xl">Products</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Products</a></li>
      
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <p>cart 0</p>
    <p>$ 500</p>
  </div>
</div>
    );
};

export default Navbar;