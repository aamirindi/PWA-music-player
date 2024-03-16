export default function PlayAndPause({ isPaused, songRef, setIsPaused }) {
  return (
    <div className=" rounded-full border-solid border-8 shadow-2xl border-[#ffffff] mb-5">
      {isPaused ? (
        <svg
          onClick={() => {
            songRef.current.play();
            setIsPaused(!isPaused);
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-20 h-20 rounded-full p-3 cursor-pointer transition-all duration-300 text-[#ffffff] font-bold shadow-sm">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          />
        </svg>
      ) : (
        <svg
          onClick={() => {
            songRef.current.pause();
            setIsPaused(!isPaused);
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-20 h-20 rounded-full p-3 cursor-pointer transition-all duration-300 text-zinc-500 font-bold shadow-2xl">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25v13.5m-7.5-13.5v13.5"
          />
        </svg>
      )}
    </div>
  );
}
