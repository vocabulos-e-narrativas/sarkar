import React from "react";
import { Row, Col } from "react-bootstrap";

export default function RangeInput({ value, onChange }) {
    return (
        <div className="mb-3">
            <div className="range-container">
                <input
                    type="range"
                    min={0}
                    max={5}
                    value={value}
                    onChange={(e) => {
                        onChange(parseInt(e.target.value));
                    }}
                    style={{ "--value": value, "--min": 0, "--max": 5 }}
                />
                <div
                    className="value-indicator"
                    style={{ left: `calc(${value * 19.8}%)` }}
                >
                    {value}
                </div>
            </div>
            <Row>
                <Col md={1} className="text-left">
                    <span>0</span>
                </Col>
                <Col />
                <Col md={1} className="text-right">
                    <span>5</span>
                </Col>
            </Row>
        </div>
    );
};
