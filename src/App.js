import React from "react";
import storage from './localStorage';
import './player.css';
export default class App extends React.Component {
  state = {
    loading: true,
    videoCode: false,
    exists:false,
  };
  async getVideo(update) {
    const url = "https://shitfinder.azurewebsites.net/api/videoAdress?code=i9eWqIRGJ9Viri0/lV0X88Od3J9cjkUKaLHP5BpmJpPKQwUqXRBuPQ==";
    const response = await fetch(url);
    const data = await response.text();
    let code = data.split("=")[1]
    console.log(code)
    let Storage = new storage('videos');
    if (Storage.exists(code) ) {
      this.getVideo()
    } else {
      Storage.setVideo(code)
    }
    
    if (update == undefined) this.setState({ videoCode: code, loading: false,exists : false });
  }
  nextVideo() {
    let Storage = new storage('videos');
    let videoIndex = Storage.getVideosJson().codes.indexOf(this.state.videoCode)
    let nextVideo = Storage.getVideosJson().codes[videoIndex + 1]
    if (nextVideo != undefined) {
      this.setState({ videoCode: nextVideo, loading: false });
    } else {
      this.getVideo();
    }
  }
  lastVideo() {
    let Storage = new storage('videos');
    let last = Storage.getLastItem();
    console.log("Ultimo video: ",last)
    this.setState({ videoCode: last, loading: false,exists:false});
  }
  componentDidMount() {
    this.getVideo()
  }
  componentWillUnmount() {
    this.getVideo()
  }
  
  render() {
    if (this.state.loading) {
      return <div>Carregando...</div>;
    }
    if (this.state.exists) {
      return 
    }
    let url = "https://www.youtube.com/embed/"+this.state.videoCode+"?autoplay=0&origin=http://example.com";
    return (
      <div>
        <iframe title="YoutubePlayer" id="ytplayer" type="text/html" width="640" height="360" src={url} frameBorder="0"/>
        <br></br>
        <div className="buttons">
        <button className="btn" onClick={() => this.lastVideo()} >Anterior</button>
        <button className="btn" onClick={() => this.nextVideo()}>Próximo </button>
        </div>
      </div>
    );
  }
}