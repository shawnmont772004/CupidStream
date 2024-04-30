import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {
  //const context = useContext(SocketContext);
  const {name,callAccepted,myVideo,userVideo,callEnded,stream,call} = useContext(SocketContext);
  return (
    <div>
    {
     stream &&(
        <div className=" border-black p-2 m-2 hidden">
        <h5 className="text-lg font-monoLisa"> {name || 'Name'}</h5>
        <video playsInline muted ref={myVideo} autoPlay className="w-80 md:w-96 rounded-lg" />
        
      </div>

      )
    }
    {
      callAccepted && !callEnded &&(
        <div className=" border-black p-2 m-2">
          <h5 className="text-lg font-monoLisa">{call.name || 'Name'}</h5>
          <video playsInline  ref={userVideo} autoPlay className="w-80 md:w-96 rounded-lg" />
          
        </div>
      )
    }
    </div>
    
     

      
    
  )
}

export default VideoPlayer