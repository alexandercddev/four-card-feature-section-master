/*
 * @athur: Alexander Chi
 * @description: 
 * @date: 07/septiembre/2021
**/
import React, { Children, useState } from 'react';  

const Card = (props) => {
    const { title, children, icon, color } = props;
    return (
        <div className={`card ${color}`}>
            <div className="title">{title}</div>
            <div className="body">
                {children}
            </div>
            <img className="image" alt={title} src={icon} />
        </div>
    );
}

export default Card;
