import {useEffect, useState} from "react";

export default function FormularioContador(){

    const [texto, setTexto] = useState("")
    const [ContadorLetras, setContadorLetras] = useState(0);
    const [ColorLetras, setColorLetras] = useState("white")

    useEffect(() =>{
        const contarPalabras = texto.length
        setContadorLetras(contarPalabras)

    }, [texto]);

    const manejarTexto = (e:any)=>{
        setTexto(e.target.value)

        if(e.target.value.length < 10){
            setColorLetras("yellow");
        }else if(e.target.value.length >= 10 && e.target.value.length < 50){
            setColorLetras("green");
        }else{
            setColorLetras("red")
        }
    };

    return(
        <div>

            <h1>Contadoor de letras</h1>

            <textarea name="letras" id="letras" rows={15} cols={50}
            placeholder="Ingresar una palabra"
            value={texto}
            onChange={manejarTexto}
            style={{ color: ColorLetras}}

            ></textarea>

            <h2>Cantidad de palabras {ContadorLetras}</h2>

        </div>
    )
}