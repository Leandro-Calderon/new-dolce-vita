import cocinera from "../../assets/img/cocinera-de-frente.png";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (


<div className={classes.heroContainer}>
<div className={classes.cocineraContainer}>
  <img src ={cocinera} alt="cocinera" className="cocinera" ></img>
  {/* <h1 className={classes.titulo}>"Cada torta la hacemos con el mismo amor que para nuestros seres queridos"</h1> */}
</div>
</div>
  )
}

export default Hero