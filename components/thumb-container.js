import React from "react";
import VideoThumbnail from "./video-thumbnail"

export function ThumbContainer(props) {
  return <div className="thumb-container">
    {props.videos.map(v => <VideoThumbnail image={v.image}/>)}
  </div>
}
