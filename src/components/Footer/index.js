import { Link } from "react-router-dom";
import FooterCovid from "./Footer.styled";


function Footer() {
  return (
    <>
    <FooterCovid>
      <div className="container">
          <div className="logo">
            <h2>SIGAP</h2>
          </div>
          <ul className="list">
            <li className="item">
              <Link to="/">Covid</Link>
            </li>
            <li className="item">
              <Link to="/provinsi">Provinsi</Link>
            </li>
            <li className="item">
              <Link to="/about">Gempa</Link>
            </li>
            
      </ul> 
      </div>
    </FooterCovid>
    </>
  );
}

export default Footer;
