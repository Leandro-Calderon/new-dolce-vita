import classes from "./Header.module.scss";
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
       <header className={classes.headerContainer}>      
          <img src ={logo} alt="logo" className="logoBatidora" ></img>         
       </header>    
  )
}

export default Header