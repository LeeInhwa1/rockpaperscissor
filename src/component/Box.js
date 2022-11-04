import React from 'react';

const Box = (props) => {
        console.log("props", props);
        console.log("props2", (props.result && props.title));
        let result;
        if (props.result === null) {
            result = "";
        } else if (props.title === "Computer" && props.result !== "tie" && props.result !== "") {
            result = props.result === "win" ? "lose" : "win";
        } else {
            result = props.result;
        }
        return (
            <div className={`box ${result}`}>
                <h1>{props.title}</h1>
                <img className={"item-img"} src={props.item && props.item.img} alt={""}/>
                <h2>{result}</h2>
            </div>
        );
    }
;

export default Box;