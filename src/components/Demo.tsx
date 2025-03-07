const VideoEmbed = () => {
    return (
      <div className="w-full  justify-center px-8">
        <h2 className="text-4xl text-center py-8 uppercase font-black">Watch me Use it!</h2>
        <div className="w-full max-w-7xl aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Yk-pwyU_TR8"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default VideoEmbed;
  