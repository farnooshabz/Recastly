/* START SOLUTION */
import VideoListEntry from './VideoListEntry.js';

var VideoList = ({videos, handleVideoListEntryTitleClick}) => (
  <div className="video-list">
    {videos.map((video) =>
      <VideoListEntry
        key={video.etag}
        video={video}
        handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
      />
    )}
  </div>
);


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoList;
