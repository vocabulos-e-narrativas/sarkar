import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Sala1Dentro2 from "../../../../images/oldsarkar/sala1dentro2.png";
import keyDown from "../../../../images/materialpisopitch/material_separado_pitch-15.png";
import keyUp from "../../../../images/materialpisopitch/material_separado_pitch-16.png";
import raposa from "../../../../images/materialpisopitch/material_separado_pitch-19.png";
import urso from "../../../../images/materialpisopitch/material_separado_pitch-20.png";
import lobo from "../../../../images/materialpisopitch/material_separado_pitch-21.png";
import ovelha from "../../../../images/materialpisopitch/material_separado_pitch-22.png";
import raposa1 from '../../../../images/oldsarkar/raposa.png';
import papel from '../../../../images/oldsarkar/papel.png';
import livro1 from '../../../../images/oldsarkar/livro1.png';
import livro2 from '../../../../images/oldsarkar/livro2.png';
import locked from "../../../../images/materialpisopitch/material_separado_pitch-12.png";
import unlocked from "../../../../images/materialpisopitch/material_separado_pitch-13.png";
import Timer from '../../../../components/phases/pitch/Timer';

export default function Puzzle1() {
    const navigate = useNavigate();
    const images = [raposa, urso, lobo, ovelha];

    const [currentImageCol1, setCurrentImageCol1] = useState(0);
    const [currentImageCol2, setCurrentImageCol2] = useState(0);
    const [currentImageCol3, setCurrentImageCol3] = useState(0);
    const [currentImageCol4, setCurrentImageCol4] = useState(0);
    const [currentImageCol5, setCurrentImageCol5] = useState(0);

    const handleImageClickUpCol1 = () => {
        setCurrentImageCol1((prevImage) => (prevImage + 1) % images.length);
    };
    const handleImageClickDownCol1 = () => {
        const currentIndex = currentImageCol1 === 0 ? images.length - 1 : currentImageCol1 - 1;
        setCurrentImageCol1(currentIndex);
    };

    const handleImageClickUpCol2 = () => {
        setCurrentImageCol2((prevImage) => (prevImage + 1) % images.length);
    };
    const handleImageClickDownCol2 = () => {
        const currentIndex = currentImageCol2 === 0 ? images.length - 1 : currentImageCol2 - 1;
        setCurrentImageCol2(currentIndex);
    };

    const handleImageClickUpCol3 = () => {
        setCurrentImageCol3((prevImage) => (prevImage + 1) % images.length);
    };
    const handleImageClickDownCol3 = () => {
        const currentIndex = currentImageCol3 === 0 ? images.length - 1 : currentImageCol3 - 1;
        setCurrentImageCol3(currentIndex);
    };

    const handleImageClickUpCol4 = () => {
        setCurrentImageCol4((prevImage) => (prevImage + 1) % images.length);
    };
    const handleImageClickDownCol4 = () => {
        const currentIndex = currentImageCol4 === 0 ? images.length - 1 : currentImageCol4 - 1;
        setCurrentImageCol4(currentIndex);
    };

    const handleImageClickUpCol5 = () => {
        setCurrentImageCol5((prevImage) => (prevImage + 1) % images.length);
    };
    const handleImageClickDownCol5 = () => {
        const currentIndex = currentImageCol5 === 0 ? images.length - 1 : currentImageCol5 - 1;
        setCurrentImageCol5(currentIndex);
    };

    const checkOrder = () => {
        const expectedOrder = [raposa, urso, lobo, ovelha, lobo];
        const selectedImages = [
            images[currentImageCol1],
            images[currentImageCol2],
            images[currentImageCol3],
            images[currentImageCol4],
            images[currentImageCol5]
        ];
        console.log(JSON.stringify(selectedImages));
        console.log(JSON.stringify(expectedOrder));
        return JSON.stringify(selectedImages) === JSON.stringify(expectedOrder);
    };

    useEffect(() => {
        const images = document.querySelectorAll('img');

        images.forEach(function (image) {
            image.addEventListener('dragstart', function (event) {
                event.preventDefault();
            });
        });
        checkOrder();
    }, [currentImageCol1, currentImageCol2, currentImageCol3, currentImageCol4, currentImageCol5]);

    function showImage(src) {
        var overlay = document.getElementById('overlay');
        var image = document.createElement('img');
        image.src = src;
        overlay.innerHTML = '';
        overlay.appendChild(image);
        overlay.style.display = 'block';
        image.style.width = '50%';
    }

    function hideOverlay() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
    }

    const passCodeCorrect = checkOrder();

    return (
        <>
            <div className="img-container">
                <div id="overlay" onClick={hideOverlay}></div>
                <div className="timer-container">
                    <Timer />
                </div>
                <div className="pitch-puzzle1-container">
                    {passCodeCorrect ?
                        <img src={unlocked} className="cadeado" alt="" />
                        :
                        <img src={locked} className="cadeado" alt="" />
                    }
                    <div className="pitch-puzzle1-puzzle">
                        <Row>
                            <Col md={3} />
                            <Col>
                                <div>
                                    <img className="key key-up pointer" src={keyUp} alt="" onClick={handleImageClickUpCol1} />
                                </div>
                                <div>
                                    <img className="pass" src={images[currentImageCol1]} alt="" />
                                </div>
                                <div>
                                    <img className="key key-down pointer" src={keyDown} alt="" onClick={handleImageClickDownCol1} />
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <img className="key key-up pointer" src={keyUp} alt="" onClick={handleImageClickUpCol2} />
                                </div>
                                <div>
                                    <img className="pass" src={images[currentImageCol2]} alt="" />
                                </div>
                                <div>
                                    <img className="key key-down pointer" src={keyDown} alt="" onClick={handleImageClickDownCol2} />
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <img className="key key-up pointer" src={keyUp} alt="" onClick={handleImageClickUpCol3} />
                                </div>
                                <div>
                                    <img className="pass" src={images[currentImageCol3]} alt="" />
                                </div>
                                <div>
                                    <img className="key key-down pointer" src={keyDown} alt="" onClick={handleImageClickDownCol3} />
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <img className="key key-up pointer" src={keyUp} alt="" onClick={handleImageClickUpCol4} />
                                </div>
                                <div>
                                    <img className="pass" src={images[currentImageCol4]} alt="" />
                                </div>
                                <div>
                                    <img className="key key-down pointer" src={keyDown} alt="" onClick={handleImageClickDownCol4} />
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <img className="key key-up pointer" src={keyUp} alt="" onClick={handleImageClickUpCol5} />
                                </div>
                                <div>
                                    <img className="pass" src={images[currentImageCol5]} alt="" />
                                </div>
                                <div>
                                    <img className="key key-down pointer" src={keyDown} alt="" onClick={handleImageClickDownCol5} />
                                </div>
                            </Col>
                            <Col md={3} />
                        </Row>
                    </div>
                    <div className="pitch-puzzle1-button">
                        {passCodeCorrect ?
                            <Button className="bg-marine-green pointer" onClick={() => navigate('../phases/pitch/estudio1/transition2')}>Desbloquear</Button>
                            :
                            <Button className="bg-orange no-hover">Done</Button>
                        }
                    </div>
                </div>
                <img src={Sala1Dentro2} useMap="#estudio1puzzle1-map" className="img-100" alt="" />
                <map name="#estudio1puzzle1-map" className="pointer">
                    <area target="" alt="raposa" title="raposa" onClick={() => showImage(raposa1)} coords="185,689,59"
                        shape="circle" />
                    <area target="" alt="papel" title="papel" onClick={() => showImage(papel)} coords="129,339,273,497"
                        shape="rect" />
                    <area target="" alt="urso" title="urso" onClick={() => showImage(livro1)} coords="1552,88,1603,273"
                        shape="rect" />
                    <area target="" alt="lobo" title="lobo" onClick={() => showImage(livro2)} coords="1804,100,1849,284"
                        shape="rect" />
                </map>
            </div>
        </>
    );
}