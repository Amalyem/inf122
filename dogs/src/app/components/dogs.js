import react, { useEffect, useState } from "react";
import style from "./dogs.module.css"
function Dog(){
    return(
    const dog[dog , setDog] = useState ("/vercel.svg")
    const url="https://dog.ceo/api/breed/rottweiler/images/random"
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            setDog(data.message)

        },[])
    })
    ),
}