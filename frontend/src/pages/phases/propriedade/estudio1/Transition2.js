import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import Estudio1Perto from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-10.png";


export default function Transition2() {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/phases/propriedade/estudio1/tutorial1");
        }, 3000);
    }, [navigate]);

    return (
        <div className="">
            <img src={Estudio1Perto} className="img-100" />
        </div>
    );
}