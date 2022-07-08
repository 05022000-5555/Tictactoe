/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const YoutubeItem = (props) => {
    return (
        <div className={`youtube-item ${props.className}`}>
            <div className='header'>
                <img src={props.imgHeader}/>
            </div>
            <div className='footer'>
                <img src={props.imgAvatar}/>
                <div className='content'>
                <h3 className='title'>{props.title}</h3>
                <p className='time'>{props.time}</p>
                </div>
            </div>
        </div>
            );
};

export default YoutubeItem;