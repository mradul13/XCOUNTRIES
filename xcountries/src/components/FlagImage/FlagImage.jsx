import React from "react";
import styles from "./FlagImage.module.css";

const FlagImage = ({path, alt})=>{
    return (
        <>
            <img src={path} alt={alt} height={50} width={50}/>
        </>
    )
};

export default FlagImage;