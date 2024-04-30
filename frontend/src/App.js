import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import YouTubePlayer from './components/Youtube';
const App = () => {
  return (
    
    <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ">
    <div className="font-monoLisa text-3xl pt-8 text-white  text-center p-8 font-monoLisa border-b-2 border-w-2 flex flex-row justify-center items-center">   
      Cupid<div className="bg-white text-black p-2 rounded-lg">Stream</div>
    </div>
    <div class="flex flex-row gap-2">
        <div class="pt-8 pl-12 w-2/3 ">
          <YouTubePlayer />
        </div>
      
      <div class="flex items-start justify-end p-8 w-1/3">
        <div class="bg-white p-4 rounded-md w-full">
          <div class="flex flex-col space-y-2">
            <VideoPlayer />
            <Options>
              <Notifications />
            </Options>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default App;
