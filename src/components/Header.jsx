
import { useEffect, useRef, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import IconSun from "./icons/IconSun";

const inicialStateDarkMode = localStorage.getItem("theme")==="dark"

const Header = () => {

   const [darkMode, setDarkmode] = useState(inicialStateDarkMode)

          
   useEffect(() => {
     if (darkMode){ 
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme","dark");

      } else {
        document.documentElement.classList.remove("dark");  
        localStorage.setItem("theme","light");
 
      } 

   }, [darkMode]);


    return (
        <header className="container mx-auto px-4 pt-8">  
        <div className = "flex justify-between" >
        <h1 className="text-3x1 uppercase text-white font-semibold
        tracking-[0.3em] "> Todo </h1>
        <button onClick={ () => setDarkmode(!darkMode) } >
                 {
                   darkMode ?   <IconSun/> : <MoonIcon/> 

                 }
        </button>
        </div>
             
        </header>
    )
  
}

export default Header;
