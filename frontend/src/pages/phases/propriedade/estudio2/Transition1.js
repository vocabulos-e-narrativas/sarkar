import React from "react";
import { Link } from "react-router-dom";
import Sala2Dentro from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-12.png";

export default function Transition1() {
    return (
        <div>
            <img src={Sala2Dentro} useMap="#estudio2-map" className="img-100" />
            <map name="#estudio2-map">
                <Link to="/phases/propriedade/estudio2/challenge1">
                    <area
                        target=""
                        alt="estudio_2"
                        title=""
                        coords="500,300, 1400,700"
                        shape="rect"
                    />
                </Link>
            </map>
        </div>
    );
}