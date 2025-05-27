"use client";
import React from "react";
import { CgClose } from "react-icons/cg";
import { GoMute, GoUnmute } from "react-icons/go";
import { IoMdPlay, IoMdPause } from "react-icons/io";
import Typo from "../Typo";

const Vids = [
  {
    title: "The Grand Stairway",
    url: "https://firebasestorage.googleapis.com/v0/b/fir-7542d.appspot.com/o/vids%2FGrand%20Stairway%20at%20Grand%20Egyptian%20Museum%20-%20Alan%20Boyle%20(1080p%2C%20h264).mp4?alt=media&token=a6fadc17-41d1-43d1-ad18-258baade169e",
  },
  {
    title: "Tutankhamun Immersive Exhibition",
    url: "https://firebasestorage.googleapis.com/v0/b/fir-7542d.appspot.com/o/vids%2FTutankhamun%20Immersive%20Exhibition.mp4?alt=media&token=682484b2-7ab6-4490-8c4b-4c78979fecd1",
  },
  {
    title: "The Official GEM Shop",
    url: "https://firebasestorage.googleapis.com/v0/b/fir-7542d.appspot.com/o/vids%2FThe%20Official%20GEM%20Shop%20-%20Grand%20Egyptian%20Museum%20(1080p%2C%20h264).mp4?alt=media&token=72d3287f-66f6-4918-a298-f7410298be57",
  },
];

export default function Videos() {
  const [selected, setSelected] = React.useState<number | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [showControls, setShowControls] = React.useState(false);

  const vidRefs = React.useRef<(HTMLVideoElement | null)[]>([]);

  React.useEffect(() => {
    if (selected !== null) {
      const video = vidRefs.current[selected];
      if (video) {
        video.muted = isMuted;
        const updateTime = () => setCurrentTime(video.currentTime);
        const setDur = () => setDuration(video.duration || 0);
        video.addEventListener("timeupdate", updateTime);
        video.addEventListener("loadedmetadata", setDur);
        return () => {
          video.removeEventListener("timeupdate", updateTime);
          video.removeEventListener("loadedmetadata", setDur);
        };
      }
    }
  }, [selected, isMuted]);

  const handlePlayPause = () => {
    if (selected !== null) {
      const video = vidRefs.current[selected];
      if (video) {
        isPlaying ? video.pause() : video.play();
        setIsPlaying(!isPlaying);
      }
    }
  };

  const handleMute = () => {
    setIsMuted((prev) => !prev);
    if (selected !== null) {
      const video = vidRefs.current[selected];
      if (video) video.muted = !isMuted;
    }
  };

  const handleClose = () => {
    if (selected !== null) {
      const video = vidRefs.current[selected];
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
    setSelected(null);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setShowControls(false);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selected !== null) {
      const video = vidRefs.current[selected];
      if (video) {
        const time = parseFloat(e.target.value);
        video.currentTime = time;
        setCurrentTime(time);
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="h-screen w-full md:flex relative my-32 hidden">
      <div
        className={`h-full w-full absolute top-0 left-0 p-10 flex flex-col items-center z-20 pointer-events-none duration-500 ${
          selected === null ? "opacity-100" : "opacity-0"
        }`}
      >
        <Typo className="relative text-secondary text-8xl text-center mt-20">
          Quik tour inside GEM
        </Typo>
        <div className="flex items-center gap-2">
          <div className="w-40 h-[1px] bg-gradient-to-l from-secondary to-transparent" />
          <div className="w-10 aspect-square hollow-shape bg-secondary" />
          <div className="w-40 h-[1px] bg-gradient-to-r from-secondary to-transparent" />
        </div>
        {/* <p className="w-1/3 text-center text-primary/50 mt-5 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          suscipit cum odio eius placeat ratione facere porro fugit, ullam odit
          consequatur excepturi tenetur. At, eaque. Cum dicta fugiat voluptas
          quo!
        </p> */}
      </div>
      {Vids.map((vid, index) => (
        <div
          key={index}
          className={`h-full object-cover duration-1000 relative overflow-hidden ${
            selected !== null && selected !== index ? "w-0 z-10" : "w-full z-0"
          }`}
        >
          <div
            className={`w-[100vw] h-screen relative group ${
              selected === null && " cursor-pointer"
            }`}
            onClick={() => {
              setSelected(index);
              const video = vidRefs.current[index];
              if (video) {
                video.play();
                setIsPlaying(true);
                setDuration(video.duration || 0);
                setShowControls(!showControls);
              }
            }}
          >
            <div
              className={`h-full w-1/3 absolute overflow-visible top-0 left-0 bg-red-95 z-10 p-10 flex justify-end pb-[25vh] items-center text-primary flex-col gap-5 duration-500 ${
                selected === null
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <Typo font="h2" className="text-xl">
                {vid.title}
              </Typo>
              <div className="w-5 aspect-square border border-secondary rotate-45 flex justify-center items-center">
                <div className="w-1/4 aspect-square bg-secondary group-hover:w-3/4 duration-300" />
              </div>
            </div>
            <video
              loop
              ref={(el: any) => (vidRefs.current[index] = el)}
              className={`w-full h-screen object-cover duration-500 ${
                selected === index
                  ? "grayscale-0 brightness-[0.9]"
                  : "grayscale brightness-[0.3]  group-hover:brightness-[0.5] group-hover:grayscale-0"
              }`}
            >
              <source src={vid.url} type="video/mp4" />
            </video>
          </div>
          {/* Controls */}
          <div
            className={`flex space-x-4 items-center absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] duration-500 ${
              showControls && selected === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Play / Pause */}
            <button
              onClick={handlePlayPause}
              className="w-10 h-10 text-xs relative text-primary flex justify-center items-center duration-500 z-30"
            >
              <span className="w-full h-full border border-secondary bg-neutral-900/15 rotate-45 absolute top-0 left-0 -z-10" />
              {isPlaying ? <IoMdPause /> : <IoMdPlay />}
            </button>

            {/* Seek Bar + Time */}
            <div className="flex flex-1 items-center gap-2">
              <div className="text-sm text-white font-mono">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>

              <div className="relative flex-1 h-4">
                {/* Visual bar */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/50 -translate-y-1/2 rounded-full" />
                <div
                  className="absolute top-1/2 left-0 h-[1px] bg-secondary -translate-y-1/2 rounded-full"
                  style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                />

                {/*range input */}
                <input
                  type="range"
                  min={0}
                  max={duration}
                  step={0.1}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-4 opacity-0 absolute top-0 left-0 cursor-pointer"
                />
              </div>
            </div>

            {/* Mute & Close */}
            <div className="flex items-center">
              <button
                onClick={handleMute}
                className="w-10 h-10 text-xs relative text-primary flex justify-center items-center duration-500"
              >
                <span className="w-full h-full border border-secondary bg-neutral-900/15 rotate-45 absolute top-0 left-0 -z-10" />
                {isMuted ? <GoMute /> : <GoUnmute />}
              </button>
              <button
                onClick={handleClose}
                className="w-10 h-10 text-xs relative text-primary flex justify-center items-center duration-500 ml-4"
              >
                <span className="w-full h-full border border-secondary bg-neutral-900/15 rotate-45 absolute top-0 left-0 -z-10" />
                <CgClose />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
