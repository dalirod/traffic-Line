import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";


//create your first component
const Home = () => {

const [luzRoja,setLuzRoja ] = useState("")  
const [luzAmarilla,setLuzAmarilla ] = useState("") 
const [luzVerde, setLuzVerde ] = useState("")     

const traffic = (lightColor) => {
    lightColor === "rojo" ? setLuzRoja("light") && setLuzAmarilla("") && setLuzVerde("") : setLuzRoja("") ;
     lightColor === "amarillo" ? setLuzAmarilla("light") && setLuzVerde("") && setLuzRoja("") : setLuzAmarilla("") ;
      lightColor === "verde" ? setLuzVerde("light") && setLuzAmarilla("") && setLuzRoja("") : setLuzVerde("") 
 }   

//lighColor == rojo dentro de la funcion traffic

return (
<>
<div id="tubo"></div>
<div id="container">
<div id="traffic-light">

<div className={`rojo ${luzRoja}`}
 onClick={() => traffic("rojo")}></div>

<div className={`amarillo ${luzAmarilla}`}
onClick={()=>traffic("amarillo")}></div>

<div className={`verde ${luzVerde}`}
onClick={()=>traffic("verde")}></div>
</div>
</div>

</>

)

}



	
	
        
        

export default Home;
