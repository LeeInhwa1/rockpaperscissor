import React from 'react';

const Box = (props) => {
    return (
        <div className={"box"}>
            <h1>{props.title}</h1>
            <img className={"item-img"} src="https://cf.shopee.ph/file/198c79d2375fce0c97aaa836df5df9a9" alt="가위"/>
            <h2>WIN</h2>
        </div>
    );
};

export default Box;