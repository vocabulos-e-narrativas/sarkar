import React from "react";
import PitchCorridorN from "../../../../images/oldsarkar/salas3.png";


export default function PitchHall1() {
    return (
        <div>
            <img src={PitchCorridorN} useMap="#estudio3-map" className="img-100" />
            <map name="#estudio3-map">
                <area
                    target=""
                    alt="estudio_1"
                    title=""
                    href="/phases/pitch/estudio1/opening"
                    coords="466,401,507,501,510,645,466,761,133,922,13,803,15,505,139,345"
                    shape="poly"
                    id="area1" />
                <area
                    target=""
                    alt="estudio_2"
                    title=""
                    href="/phases/pitch/estudio2/opening"
                    coords="600,423,539,497,535,645,598,702,773,618,787,570,787,494,766,446"
                    shape="poly"
                    id="area1" />
                <area
                    target=""
                    alt="estudio_3"
                    title=""
                    href="/phases/pitch/estudio3/opening"
                    coords="1278,432,1511,395,1602,500,1599,709,1511,787,1280,677,1253,605,1249,497"
                    shape="poly"
                    id="area1" />
            </map>
        </div>
    );
}