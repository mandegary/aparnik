import React, { Component  } from 'react';
import videojs from 'video.js'

export default class VideoPlayer extends Component {


    static defaultProps = {
        style: {},
        onVideoEvent: console.log,
        src: '',
        poster: ''
    }

    componentDidMount = () => {
        // This is a hack because I don't import video.js as a hard dependency
        // but load it alongside my app bundle
        if (typeof videojs === 'undefined') {
            setTimeout(this.componentDidMount, 500);
            return;
        }
        const { onVideoEvent } = this.props;
        this.player = videojs(this.videoNode);
        const exportEvents = ['timeupdate', 'play', 'playing', 'pause',
            'ended', 'error', 'waiting'];
        exportEvents.forEach(ev => this.player.on(ev, this.props.onVideoEvent));
    }

    componentWillUnmount = () => {
        this.player && this.player.dispose();
        this.player = null;
    }

    render = () => (
        <div alt="snap"
             key="media"
             style={ this.props.style }
             data-vjs-player>

            <video playsInline
                   className="video-js"
                   preload="auto"
                   width="500"
                   poster={ this.props.poster }
                   autoPlay={false}
                   controls= {true}
                   ref={ r => { this.videoNode = r; } } >

                <source src={this.props.src}
                        type="application/x-mpegURL" />

            </video>
        </div>
    )
}