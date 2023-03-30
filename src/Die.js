import React from "react"
import DieFace1 from "./img/dieFace1.png"

export default function Die(props) {
    let dieFace = "";
    switch (props.value) {
        case 1:
            dieFace = {DieFace1}
            break;
        case 2:
            dieFace = "/img/dieFace2.png"
            break;
        case 3:
            dieFace = "/img/dieFace3.png"
            break;
        case 4:
            dieFace = "/img/dieFace4.png"
            break;
        case 5:
            dieFace = "/img/dieFace5.png"
            break;
        case 6:
            dieFace = "/img/dieFace6.png"
            break;
        default:
            break;
    }
    
    return (
        <div
            className={props.isHeld ? "die-face isHeld" : "die-face"}
            style={{
                backgorundImage: `url(${dieFace})`,
                backgorundSize: "cover"
            }}
            onClick={props.holdDice}
        >
            {/* <h2 className="die-num">{props.value}</h2> */}
        </div>
    )
}