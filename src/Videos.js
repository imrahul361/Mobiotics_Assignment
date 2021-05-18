import React, { Component } from 'react';
import './Videos.css';
// import ClapprPlayer from './clappr-player.jsx';
// import { Container, Row, Col } from 'reactstrap';
import VideoThumb from './VideoThumb';


class Videos extends Component {
  // playSelectedVideo = () =>{
  //   console.log('clicked:' ,  this);
  //   console.log('clicked:' ,  this.props.title);
  // }
  //
  render() {
//since there are limited number of videos just placing the components, ideally should map the details from a database so that all the
//videos are places without hardcoding the number of components
    return (
      <div className='video-list'>
        <VideoThumb imgSource="../thumb1.png" title="Freerunning Across Rooftops in Greece" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
        videoSource="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
        onClick={this.props.playSelectedVideo} />
        <VideoThumb imgSource="../thumb2.png" title="Sintel - Durian Open Movie" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
        videoSource="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" onClick={this.props.playSelectedVideo}/>
        <VideoThumb imgSource="../thumb3.png" title="Chevaliers de la Table ronde" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
        videoSource="https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8" onClick={this.props.playSelectedVideo}/>
        <VideoThumb imgSource="../thumb4.png" title="Big Buck Bunny" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
        videoSource="http://184.72.239.149/vod/smil:BigBuckBunny.smil/playlist.m3u8" onClick={this.props.playSelectedVideo}/>
        <VideoThumb imgSource="../thumb5.png" title="Histoire, Geschichte" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
        videoSource="http://www.streambox.fr/playlists/test_001/stream.m3u8" onClick={this.props.playSelectedVideo}/>

      </div>
    );
  }
}

export default Videos;
