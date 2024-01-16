import React from "react";
function SocialLink(){
    return(
        <figure>
            <a href ={props.enlace}/> 
            <img src={props.ruta}/>
        </figure>
    );
}
export default SocialLink;