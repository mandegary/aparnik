import React, {useContext, useState} from "react";
import "./home.css"
import "video.js/dist/video-js.css"
import {Col, Container, Row} from "react-bootstrap";
import videojs from 'video.js'
import VideoPlayer from "../video/video"
import Hls from "../video/hls"

const HomePage = (props) => {
    const [showAddress, setShowAddress] = React.useState(false);
    const [show, setShow] = React.useState(false);

    const videoJsOptions1 = {
        autoplay: false,
        controls: true,
        width: 500,
        sources: [{
            src: 'https://test.api.learnwise.io/media/20e22325-2bf5-40c7-87bd-c3de37f95644/daily.mp4',
            type: 'video/mp4',
        }]
    }
    const videoJsOptions2 = {
        autoplay: false,
        controls: true,
        width: 500,
        sources: [{
            src: 'https://test.api.learnwise.io/media/20e22325-2bf5-40c7-87bd-c3de37f95644/sway.m4a',
            type: 'audio/mp4',
        }]
    }

    return <Container>
        <Row className="mt-4 justify-content-center">
            <h1>VideJS</h1>
        </Row>
        <Row className="mt-4 justify-content-center">
            <Col>
                <p>MP4 File</p>
                <VideoPlayer {...videoJsOptions1} />
            </Col>
        </Row>
        <Row className="mt-4 justify-content-center">
            <Col>
                <p>M4A File</p>
                <VideoPlayer {...videoJsOptions2} />
            </Col>
        </Row>
        <Row className="mt-4 justify-content-center">
            <Col>
                <p>HLS File</p>
                <Hls src="https://test.api.learnwise.io/media/20e22325-2bf5-40c7-87bd-c3de37f95644/daily.mp4.m3u8"/>
            </Col>
        </Row>
        <Row className="mt-4 justify-content-center">
            <Col>
                <p>
                    WEBVTT
                </p>
                <video width="500" controls>
                    <source src="https://test.api.learnwise.io/media/20e22325-2bf5-40c7-87bd-c3de37f95644/daily.mp4"
                            type="video/mp4"/>
                    <track id="caption-track" kind="subtitles" srcLang="en" label="English"
                           src="https://test.api.learnwise.io/media/20e22325-2bf5-40c7-87bd-c3de37f95644/daily_thumbs.vtt"
                           default/>
                </video>
            </Col>
        </Row>
    </Container>
}
export default HomePage