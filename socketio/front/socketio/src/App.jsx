import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";
import { IoIosSend } from "react-icons/io";

function App() {
  const [count, setCount] = useState(0);
  const [room, setRoom] = useState(0);
  const [socket, setSocket] = useState(undefined);
  const [position, setPosition] = useState(false);
  const [inbox, setInbox] = useState("");
  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    console.log("message", message, room);
    socket.emit("message", message, room);
    setPosition(!position);
  };

  useEffect(() => {
    const socket = io("http://localhost:4000/");

    socket.on("message", (message) => {
      setInbox([...inbox, message]);
    });

    setSocket(socket);
  }, [inbox]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #86CBF5, #5EAEE1)",
        display: "flex",
        justifyContent: "center",
        paddingTop: "200px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "white",
          height: "600px",
          position: "relative",
          borderRadius: "22px",
        }}
      >
        <div
          style={{
            padding: "10px",
            position: "relative",
            overflowY: "scroll",
            height: "570px",
          }}
        >
          <ul>
            {inbox &&
              inbox.map((elem, i) => {
                const isRightAligned = i % 2 === 0;
                const messageClass = isRightAligned
                  ? "right-aligned"
                  : "left-aligned";
                return (
                  <li key={i} className={messageClass}>
                    {elem}
                  </li>
                );
              })}
          </ul>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            display: "flex",
            border: "2px solid black",
            borderRadius: "22px",
          }}
        >
          <input
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            style={{
              width: "100%",
              fontSize: "20px",
              border: "none",
              outline: "none",
              borderRadius: "22px",
              padding: "0 10px",
            }}
          />
          <button
            onClick={handleSendMessage}
            style={{
              fontSize: "28px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "7px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: "#86CBF5",
              color: "white",
            }}
          >
            <IoIosSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
