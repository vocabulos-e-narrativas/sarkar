import React from "react";
import { Link } from "react-router-dom";
import Sala1DentroLonge from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-07.png";

export default function Far() {
    return (
        <div>
            <img src={Sala1DentroLonge} useMap="#estudio1far-map" className="img-100" />
            <map name="#estudio1far-map">
                <Link to="/phases/propriedade/estudio1/puzzle1">
                    <area
                        target=""
                        alt="estudio_1"
                        title=""
                        coords="1100,300,1300,450"
                        shape="rect"
                    />
                </Link>
            </map>
        </div>
    );
}