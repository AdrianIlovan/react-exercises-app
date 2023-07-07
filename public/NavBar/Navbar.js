import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
         <div>
          <Link to="/"> Home </Link>
          <Link to="/Comanda"> Comanda </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/Produse"> Produse </Link>
          <Link to="/Despre"> Despre </Link>
        </div>
    );
}
//