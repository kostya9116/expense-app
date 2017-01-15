import React, {Component} from "react";

class HomePageBackgroundVideoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videoURL: "videos/homePageBackgroundVideo.mp4"
        };
    }

    render() {
        return (
            <video id="background-video" loop autoPlay muted>
                <source src={this.state.videoURL} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        );
    }
}

export default HomePageBackgroundVideoComponent;