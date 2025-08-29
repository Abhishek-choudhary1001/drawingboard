import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(null);

  // Random roomId generator
  const generateRoomId = () =>
    Math.random().toString(36).substring(2, 10); // short unique id

  const handleTest = () => {
    navigate("/Test");
  };

  const handleRealtime = () => {
    const roomId = generateRoomId();
    setPopup(roomId);
    setTimeout(() => {
      setPopup(null);
      navigate(`/realtime/${roomId}`);
    }, 5000); // show popup for 2s before redirect
  };

  const handleCollab = () => {
    const roomId = prompt("Enter Room ID (or leave empty to generate):");
    const finalId = roomId && roomId.trim() !== "" ? roomId : generateRoomId();
    navigate(`/collab/${finalId}`);
  };

  return (
    <div className="flex items-center justify-center h-screen 
      bg-gradient-to-br from-pink-600  via-green-400 to-blue-600">
      
      <div className="bg-white/90 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center w-[350px]">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
          Choose Mode
        </h1>
        <div className="flex flex-col gap-4">
          <button
            onClick={handleTest}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 
            text-white font-semibold transition duration-300"
          >
            Test Mode
          </button>
          <button
            onClick={handleRealtime}
            className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 
            text-white font-semibold transition duration-300"
          >
            Realtime Mode
          </button>
          <button
            onClick={handleCollab}
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 
            text-white font-semibold transition duration-300"
          >
            Collab Mode
          </button>
        </div>
      </div>

      {popup && (
        <div className="fixed top-5 right-5 bg-black/80 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
          Room created: <b>{popup}</b>
        </div>
      )}
    </div>
  );
}

export default Home;
