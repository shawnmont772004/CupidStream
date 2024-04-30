import React, { useState, useEffect } from 'react';

const YouTubePlayer = () => {
  const [player, setPlayer] = useState(null);
  const [done, setDone] = useState(false);
  const [videoId, setVideoId] = useState('T-8vVY-IECk'); // Default video ID

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    return () => {
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  useEffect(() => {
    if (player !== null) {
      player.addEventListener('onReady', onPlayerReady);
      player.addEventListener('onStateChange', onPlayerStateChange);

      return () => {
        player.removeEventListener('onReady', onPlayerReady);
        player.removeEventListener('onStateChange', onPlayerStateChange);
      };
    }
  }, [player]);

  const onYouTubeIframeAPIReady = () => {
    setPlayer(new window.YT.Player('player', {
      height: '510',
      width: '800',
      videoId: videoId,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    }));
  }

  const onPlayerReady = (event) => {
    event.target.playVideo();
  }

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING && !done) {
      setDone(true);
    }
    if (event.data === window.YT.PlayerState.ENDED) {
      playVideoForSixSeconds();
    }
  }

  const playVideoForSixSeconds = () => {
    if (player !== null && player.getPlayerState() === window.YT.PlayerState.PLAYING) {
      setTimeout(stopVideo, 6000);
    }
  }

  const stopVideo = () => {
    if (player !== null && player.getPlayerState() === window.YT.PlayerState.PLAYING) {
      player.stopVideo();
    }
  }

  const handleVideoIdChange = (event) => {
    setVideoId(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (player !== null) {
      player.loadVideoById(videoId);
      player.playVideo();
    }
  }

  return (
    <div>
    <div  style={{ borderRadius: '30px', overflow: 'hidden' }}>
      <div id="player" ></div>
    </div>
    <div className="items-center text-center">
      <form onSubmit={handleSubmit}>
        <div className="pt-4 py-1 space-x-8">
          <input 
            type="text" 
            placeholder="YouTube ID" 
            className="rounded py-1 px-2"
            value={videoId} 
            onChange={handleVideoIdChange} 
          />
          <button type="submit" className="bg-red-500 text-white rounded py-1 px-8 font-semibold ">Play</button>
        </div>
      </form></div>
    </div>
  );
};

export default YouTubePlayer;
