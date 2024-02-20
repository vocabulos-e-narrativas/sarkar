import React from "react";
import { Link } from "react-router-dom";
import Sala1DentroLonge from "../../../../images/materialpisopitch/material_separado_pitch-01.png";


export default function Far() {
    return (
        <div>
            <img src={Sala1DentroLonge} useMap="#estudio1far-map" className="img-100" />
            <map name="#estudio1far-map">
                <Link to="/phases/pitch/estudio1/transition1">
                    <area
                        target=""
                        alt="estudio_1"
                        title=""
                        coords="140,237,15,393,13,691,132,803,461,650,505,542,503,387,462,291"
                        shape="poly"
                    />
                </Link>
            </map>
        </div>
    );
}