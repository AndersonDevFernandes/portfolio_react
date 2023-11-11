import email from "../icones/email.gif";
import github from "../icones/icons8-github.svg";
import instagram from "../icones/icons8-instagram.svg";
import linkedin from "../icones/icons8-linkedin.svg";
import twitter from "../icones/icons8-twitter.svg";

function Footer() {
 return(
  <>
        <section class="module content">
          <div class="container3">
              <a href="https://www.instagram.com/andersonrfpe/"><img src={instagram} alt="icon" class="icon"/></a>
              <a href="https://www.linkedin.com/in/anderson-fernandes-da-silva-12aa6932/"><img src={linkedin} alt="icon" class="icon"/></a>
              <a href="https://twitter.com/AndersonRFPE"><img src={twitter} alt="icon"class="icon"/></a>
              <a href="https://github.com/Sexyspell"><img src={github} alt="icon" class="icon"/></a>
          </div>
          <div class="container4">
            <img src={email} alt="email" class="email"/>
            <p class="text-3">andersonrfpe@gmail.com</p>          
          </div>
          <div class="text-end-container">
            <p class="text-end">Make with luv by Anderson Fernandes</p>
          </div>        
        </section>   
  </>
 )
}

export default Footer