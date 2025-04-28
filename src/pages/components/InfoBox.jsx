"use client";

import { Play } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function InfoBox() {
  // State to track if video is playing
  const [isPlaying, setIsPlaying] = useState(false);
  // State for animation
  const [isVisible, setIsVisible] = useState(false);

  // Animate in on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`absolute bottom-12 left-48 max-w-80 bg-[#0E344C]/80  shadow-gray-700 rounded-lg p-6 transition-all duration-700 info-box ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h4 className="mb-2  text-xl font-bold text-white">
        <span className="relative inline-block ">
          What is Electro Music Festival?
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30"></span>
        </span>
      </h4>
      <p className="mb-4 text-white/90 text-sm">
        Experience innovation like never before. Our cutting-edge solutions
        transform the way you interact with technology.
      </p>
      <div
        className="relative aspect-video w-full overflow-hidden rounded-md  video-container"
        style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)" }}
      >
        {isPlaying ? (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/DVxpufsaR94?si=VceoG8_xUwMJIaIx &autoplay=1&mute=1"
            title="Video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write;"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ) : (
          <div className="relative h-full w-full overflow-hidden group">
            <img
              src="/images/hero_bg.jpg"
              alt="Video thumbnail"
              className="h-full w-full object-cover video-thumbnail"
            />
            <div
              className="absolute inset-0 video-overlay"
              style={{ backgroundColor: "rgba(52, 144, 191, 0.3)" }}
            ></div>
            <Button
              onClick={() => setIsPlaying(true)}
              className="absolute cursor-pointer left-1/2 top-1/2 rounded-full p-3 transition-all duration-300 play-button"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Play className="h-6 w-6" style={{ color: "#205879" }} />
              <span className="sr-only">Play video</span>
            </Button>
          </div>
        )}
      </div>
      <span className="text-sm text-gray-400">2023 officail Trailer</span>
    </div>
  );
}
