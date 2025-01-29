import React from "react";
import {Person} from '../models/Person';

export default function PersonComponent(props: Person){
    return (
        <div className = "person-card">
            <ul>
                <li>Nombre: {props.nombre}</li>
                <li>Ocupacion: {props.ocupacion}</li>
                <li>Pais: {props.pais}</li>
            </ul>
        </div>
    )
}

