/*
 * @athur: Alexander Chi
 * @description: 
 * @date: 07/septiembre/2021
**/
import React, { useState } from 'react';   

const Card = (props) => {
    const { title, children, icon, color } = props;
    return (
        <div className={`card ${color}`}>
            <div className="card-container">
                <div className="title">{title}</div>
                <div className="body">
                    <p className="paragraph">
                        {children}
                    </p>
                </div>
                <div className="footer">
                    <img className="image" alt={title} src={icon} />
                </div>
            </div>
        </div>
    );
}

export default Card;
