import './NavBar.scss'
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="navigationContainer">
      <Link to='/' className="navigationContainer__home">Accueil</Link>
      <Link to='/rules' className="navigationContainer__rules">Règles</Link>
      <Link to='/ranking' className="navigationContainer__ranking">Rang</Link>
      <Link to='/friendList' className="navigationContainer__rivals">Rivaux</Link>
    </div>
  );
}