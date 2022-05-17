import React from "react";
import video from "../../image/fujisann.mp4"
import styled from "styled-components"


const VideoStyled = styled.video`
  z-index: 000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

`


const Video = () => {
  return (
    <>
      <VideoStyled src={video} autoPlay muted loop />
    </>
  );
};

export default Video;
