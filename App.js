import React from "react";
import "./styles.css";

import { Sidebar } from "./components/sidebar";
import Navbar from "./components/navbar";
import { ThumbContainer } from "./components/thumb-container";

import fireIcon from "./icons/iconfinder_Icon_Element_Fire_03_513726.png";
import homeIcon from "./icons/iconfinder_ic_home_48px_3669170.png";
import playlist from "./icons/iconfinder_ic_playlist_play_48px_3669290.png";
import subscriptionsIcon from "./icons/iconfinder_ic_subscriptions_48px_3669213.png";
import logo from "./icons/iconfinder_youtube_294703.png";

import video1 from "./images/video1.jpg";
import video2 from "./images/video2.jpg";
import video3 from "./images/video3.jpg";
import video4 from "./images/video4.jpg";
import video5 from "./images/video5.jpg";
import video6 from "./images/video6.jpg";
import video7 from "./images/video7.jpg";
import video8 from "./images/video8.jpg";

import ico1 from "./icons/iconfinder_ic_video_call_48px_3669144.png";
import ico2 from "./icons/iconfinder_ic_videocam_48px_3669181.png";
import ico3 from "./icons/iconfinder_ic_view_module_48px_3669149.png";

const navbarItems = [
  {
    icon: ico1,
  },
  {
    icon: ico2,
  },
  {
    icon: ico3,
  },
]

const menuItems = [
  {
    icon: homeIcon,
    title: "Principal"
  },
  {
    icon: fireIcon,
    title: "Tendencias"
  },
  {
    icon: subscriptionsIcon,
    title: "Suscripciones"
  },
  {
    icon: playlist,
    title: "Biblioteca"
  }
];

const imagesVideos = [
  {image: video1,
    title: "video1"
  },
  {image: video2,
    title: "video2"
  },
  {image: video3,
    title: "video3"
  },
  {image: video4,
    title: "video4"
  },
  {image: video5,
    title: "video5"
  },
  {image: video6,
    title: "video6"
  },
  {image: video7,
    title: "video7"
  },
  {image: video8,
    title: "video8"
  }
];

function App() {
  return (
    <div className="App">
      <Sidebar icons={menuItems} />
      <Navbar logo={logo} items={navbarItems} />
      <ThumbContainer videos={imagesVideos} />
    </div>
  );
}

export default App;

