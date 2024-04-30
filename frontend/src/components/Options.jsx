import React, { useContext, useState } from 'react';
import { SocketContext } from '../SocketContext';

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, endCall, callUser } = useContext(SocketContext);
  const [localName, setLocalName] = useState(name);
  const [idToCall, setIdToCall] = useState('');

  const handleNameChange = (e) => {
    setLocalName(e.target.value);
    setName(e.target.value);
  };

  const handleCopyID = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(me);
  };

  const handleCall = (e) => {
    e.preventDefault();
    callUser(idToCall);
  }

  return (
    <div className=" items-start w-full">
      <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-2 rounded-md w-full">
        <form className="space-y-2">
          <div className="text-center">
            <h6 className="text-sm font-semibold text-white font-monoLisa">Account Info</h6>
          </div>
          <div>
            <input
              type="text"
              value={localName}
              onChange={handleNameChange}
              className="w-full  border rounded font-monoLisa"
              placeholder="Name"
            />
          </div>
          <div className="text-center ">
            <button
              onClick={handleCopyID}
              p-2
              className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 font-monoLisa text-sm rounded"
            >
              copy ID
            </button>
          </div>
          <div className="text-white border-b-2 "></div>
          <div className="text-center">
            <h6 className="font-semibold text-white text-sm font-monoLisa ">Make a call</h6>
          </div>
          <div>
            <input
              type="text"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
              className="w-full border rounded font-monoLisa"
              placeholder="ID to call"
            />
          </div>
          {callAccepted && !callEnded ? (
            <div className="text-center">
              <button
                className="bg-red-500  font-monoLisa
                text-sm hover:bg-red-700 text-white font-monoLisa font-bold py-2 px-4 rounded"
               
                onClick={endCall}
                py-1 px-4
              >
                end call
              </button>
            </div>
          ) : (
            <div className="text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-monoLisa  py-2 px-4 rounded"
                onClick={handleCall}>
                call
              </button>
            </div>
          )}
        </form>
        {children}
      </div>
    </div>
  );
}

export default Options;
