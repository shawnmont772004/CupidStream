import React from 'react'
import { SocketContext } from '../SocketContext';
import { useContext } from 'react';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div className="mt-2 flex justify-around flex-col mb-2">
          <h1 className="font-monoLisa text-lg text-white text-center">{call.name} is calling:</h1>
          <button
            onClick={answerCall}
            className="bg-green-500 hover:bg-green-700 text-white font-monoLisa  py-1 px-4 rounded"
          >
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
