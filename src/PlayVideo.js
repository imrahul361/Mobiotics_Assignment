import React, { Component } from 'react';
import './Videos.css';
import ClapprPlayer from './ClapprComponent';

class PlayVideo extends Component {
  render() {
    //initially the first video is played by default else the user last played
    return (
      <div >
        <ClapprPlayer id="video" width="700" height="500"
        source={(localStorage.getItem('videoSource')!=null)?localStorage.getItem('videoSource'): "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"}  />
        <h3 className="video-main-title">{(localStorage.getItem('title')!=null)?localStorage.getItem('title'): "Freerunning Across Rooftops in Greece"}</h3>
        <p className="video-sub-title">{(localStorage.getItem('description')!=null)?localStorage.getItem('description'):"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."}</p>
      </div>
    );
  }
}

export default PlayVideo;
