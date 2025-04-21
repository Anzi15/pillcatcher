const VideoEmbed = () => {
    return (
      <div className="w-full  justify-center px-8">
        <h2 className="text-4xl text-center py-8 uppercase font-black">Watch me Use it!</h2>
        <p className="text-center pb-4">
        This clever little device can make any pill bottle seem full, and makes taking medication easy, hygienic and safe.
        </p>
        <div className="w-full max-w-7xl aspect-video pb-6">
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
  