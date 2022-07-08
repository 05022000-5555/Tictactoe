import React from 'react';
import { YoutubeData } from '../../data';
import YoutubeItem from './YoutubeItem';

const YoutubeList = () => {
    return (
        <div className='youtube-list'>
      {
        YoutubeData.map((item, index) => (
          <YoutubeItem
            key = {item.id}
            imgHeader = {item.imgHeader}
            imgAvatar = {item.imgAvatar}
            title = {item.title}
            time = {item.time || "anonymous"}
            className= {index===1 ? "abc" : ""}
          ></YoutubeItem>
        ))
      }
    </div>
    );
};

export default YoutubeList;