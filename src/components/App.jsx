/* START SOLUTION */
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null,
      isLoading: true,
      videos: []
    };

    this.getYouTubeVideos('react tutorials');
  }


  getYouTubeVideos(query) {
    searchYouTube(query, (videos) =>
      this.setState({
        currentVideo: videos[0],
        isLoading: false,
        videos: videos,

      })
    );
  }

  handleVideoListEntryTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <Search
                handleSearchInputChange={this.getYouTubeVideos.bind(this)}
              />
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList
              handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
