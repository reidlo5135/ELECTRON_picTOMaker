import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/image/Logo.png";
import "../styles/top.css";
import "../styles/font.css";

export default function Top() {
    return(
        <div className={'top'} id={'1'}>
            <div className={'topMenu'}>
                <Link to='/'>
                    <img src={Logo} className='img_logo' alt="PictoMaker-Logo" style={{width:"100px",height:"50px"}}/>
                </Link>
            </div>
        </div>
    );
};