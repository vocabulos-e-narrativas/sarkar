import React from "react";
import PitchCorridorN from "../../../../images/oldsarkar/salas2.png";


export default function PitchHall2() {
    return (
        <div>
            <img src={PitchCorridorN} useMap="#estudio2-map" className="img-100" />
            <map name="#estudio2-map">
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
            </map>
        </div>
    );
}