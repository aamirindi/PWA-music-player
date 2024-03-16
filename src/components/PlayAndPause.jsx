export default function PlayAndPause({ isPaused, songRef, setIsPaused }) {
  return (
    <>
      {isPaused ? (
        <svg
          onClick={() => {
            songRef.current.play();
            setIsPaused(!isPaused);
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-20 h-20 hover:bg-white hover:text-blue-700 hover:shadow-2xl rounded-full p-3 cursor-pointer transition-all duration-300 mt-5 font-bold">
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
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-20 h-20 hover:bg-white hover:text-blue-700 hover:shadow-2xl rounded-full p-3 cursor-pointer transition-all duration-300 mt-5  font-bold">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25v13.5m-7.5-13.5v13.5"
          />
        </svg>
      )}
    </>
  );
}
