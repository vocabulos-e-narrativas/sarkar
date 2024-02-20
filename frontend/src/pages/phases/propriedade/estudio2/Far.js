import React from "react";
import { Link } from "react-router-dom";
import Sala2DentroLonge from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-11.png";

export default function Far() {
    return (
        <div>
            <img src={Sala2DentroLonge} useMap="#estudio1far-map" className="img-100" />
            <map name="#estudio1far-map">
                <Link to="/phases/propriedade/estudio2/transition1">
                    <area
                        target=""
                        alt="estudio_2"
                        title=""
                        coords="600,400, 1000,700"
                        shape="rect"
                    />
                </Link>
            </map>
        </div>
    );
}