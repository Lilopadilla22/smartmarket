import logo from "../assets/images/SMART MARKET_logo sin fondo.png"
import "../assets/css/style.css"

export default function NavBar() {
    return (
<nav className="navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="" width="120" height="60" className="d-inline-block align-text-top"/>
    </a>
    <h3 className="align-middle mb-0 mr-2">Dashboard SmartMarket</h3>
  </div>
</nav>
    )
}