import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import Estudio1Longe from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-09.png";


export default function Transition1() {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/phases/propriedade/estudio1/transition2");
        }, 3000);
    }, [navigate]);

    return (
        <div className="">
            <img src={Estudio1Longe} className="img-100" />
        </div>
    );
}