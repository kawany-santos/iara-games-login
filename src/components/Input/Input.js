import React from "react";
import * as C from "../Input/styles";

const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <C.Input
         type={type} 
         onChange={onChange}
         value={value}
         placeholder={placeholder}

        />
    );
};


export default Input;

