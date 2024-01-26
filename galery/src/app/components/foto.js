"use client"
import Image from "next/image";
import style from "./foto.module.css";
import { useState, useEffect} from "react";
 function Foto(){
    const [perrito,setPerrito]=useState("/vercel.svg");
    const [estado, setEstado]=useState("esperanto");
    const url="https://dog.ceo/api/breeds/image/random"
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setPerrito(data.message),setEstado(data.status)
        });
    },[]);

     return(
        <div className={style.contenedor}>
            <h1>{estado}</h1>
            <Image src={perrito} height={250} width={250}/>
            <h1></h1>
        </div>
     )
 }
 export default Foto;