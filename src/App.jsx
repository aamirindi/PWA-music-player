import "./App.css";
import PreBtn from "./components/PreBtn";
import PlayAndPause from "./components/PlayAndPause";
import NextBtn from "./components/NextBtn";
import { useEffect, useRef, useState } from "react";
import audios from "./static/audios";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function App() {
  const songRef = useRef(null);
  const [songTimeLine, setSongTimeLine] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [hasChanged, setHasChanged] = useState(false);
  const [showPausedImage, setShowPausedImage] = useState(true);
  const currentSong = audios[currentSongIndex];

  useEffect(() => {
    window.document
      .getElementById("audio_element")
      .addEventListener("loadedmetadata", (e) => {
        // console.log(e);
        songRef.current = e.target;
      });
  }, []);

  useEffect(() => {
    setShowPausedImage(isPaused);
  }, [isPaused]);

  let durationFormatted = "0:00";
  if (songRef.current && songRef.current.duration) {
    const minutes = Math.floor(songRef.current.duration / 60);
    const seconds = Math.floor(songRef.current.duration % 60);
    durationFormatted = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const goToNextSong = (value) => {
    const nextSongIndex = currentSongIndex + value;
    const firstSongIndex = 0;
    const lastSongIndex = audios.length - 1;
    if (nextSongIndex >= audios.length) {
      setCurrentSongIndex(firstSongIndex);
    } else if (nextSongIndex < firstSongIndex) {
      setCurrentSongIndex(lastSongIndex);
    } else {
      setCurrentSongIndex(nextSongIndex);
    }
    setHasChanged(true);
    setIsPaused(false);
  };

  return (
    <div className="flex justify-center items-center h-[100svh] bg-[#dfe7ef]">
      <div className="bg-[#eaeef3] w-96 p-5 rounded-lg text-center shadow-2xl song-container relative">
        <div className="absolute left-[-20%] img-container">
          {!showPausedImage ? (
            <div className="relative w-96 img-container-img">
              <img
                src={currentSong.img}
                alt=""
                className="w-80 h-80 rounded-full select-none absolute top-0 z-50"
              />
              <img
                src={currentSong.img}
                alt=""
                className="w-80 h-80 rounded-full select-none absolute top-3 z-0 blur-sm "
              />
            </div>
          ) : (
            <div className="relative w-96 img-container-img">
              <img
                src={currentSong.pic}
                alt=""
                className="w-80 h-80 rounded-full select-none absolute top-0 z-50"
              />
              <img
                src={currentSong.pic}
                alt=""
                className="w-80 h-80 rounded-full select-none absolute top-3 z-0 blur-sm "
              />
            </div>
          )}
        </div>
        <div className="flex flex-col justify-evenly items-end pt-32 ">
          <div className="flex flex-col justify-center items-center ">
            <PreBtn goToNextSong={goToNextSong} />

            <NextBtn goToNextSong={goToNextSong} />
            <PlayAndPause
              songRef={songRef}
              isPaused={isPaused}
              setIsPaused={setIsPaused}
            />
          </div>
        </div>
        <div className="text-4xl font-semibold text-[#71829e] font-['Poppins'] space-y-2  text-left ml-5 w-fit">
          <h1>{currentSong.songName}</h1>
          <p className="text-xl font-thin text-[#aab5c6]">
            {currentSong.songDesc}
          </p>
          <audio
            autoPlay={hasChanged}
            onEnded={() => goToNextSong(1)}
            src={currentSong.src}
            id="audio_element"
            onTimeUpdate={() => setSongTimeLine(songRef.current.currentTime)}
          />
        </div>
        <div className="relative text-[#aab5c6] text-xl font-bold mt-5">
          <p className="absolute left-5 top-12">{formatTime(songTimeLine)}</p>
          <p className="absolute right-5 ">{durationFormatted}</p>
          <input
            value={songTimeLine}
            type="range"
            min={0}
            max={songRef.current?.duration}
            className="w-[90%] my-8 appearance-none outline-none h-2 rounded-lg bg-[#d0d8e6] range-slider"
            onChange={(e) => (songRef.current.currentTime = e.target.value)}
          />
        </div>
      </div>
      <a
        href="https://github.com/aamirindi"
        target="_blank"
        className="font-['Cedarville_Cursive'] text-[#71829e] absolute bottom-1 right-1">
        aamirindi
        <GitHubIcon style={{ fontSize: "20px" }} />
      </a>
    </div>
  );
}
