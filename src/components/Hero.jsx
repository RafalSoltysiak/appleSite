import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef();

  useEffect(function () {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Title" />

        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          autoPlay
          muted
          playsInline
        />
      </div>

      <button>Buy</button>
      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
}
