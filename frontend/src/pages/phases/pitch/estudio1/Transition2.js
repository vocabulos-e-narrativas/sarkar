import React from "react";
import { Link } from "react-router-dom";

import Sala1DentroPerto from "../../../../images/materialpisopitch/material_separado_pitch_computador-10.png";


export default function Transition2() {
    return (
        <div className="img-container">
            <img src={Sala1DentroPerto} useMap="#estudio1next-map" className="img-100" />
            <map name="#estudio1next-map">
                <Link to="/phases/pitch/estudio1/tutorial1">
                    <area
                        target=""
                        alt=""
                        title=""
                        coords="700,300,1500,800"
                        shape="rect"
                    />
                </Link>
            </map>
        </div>
    );
}