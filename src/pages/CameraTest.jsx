import React, { useRef, useState } from "react";

export default function CameraTest() {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);

  const startCam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;

      videoRef.current.onloadedmetadata = () => {
        videoRef.current.play();
      };

      setStarted(true);
    } catch (err) {
      alert("Camera error: " + err.message);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Camera Test</h2>

      {!started && (
        <button onClick={startCam} style={{ padding: 10 }}>
          Start Camera
        </button>
      )}

      {started && (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          width="500"
          height="350"
          style={{ background: "#000", objectFit: "cover" }}
        />
      )}
    </div>
  );
}
