import './Navbar.css';


function Navbar (){
    return(
        <nav className="navbar">
               <div className="logo">
        MeuLogo
      </div>
      <ul className="navLinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
        </nav>
    )
}
export default Navbar