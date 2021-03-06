import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }
  componentDidMount() {
    this.getYouTubeVideos('cats');
  }
  getYouTubeVideos(query) {
    var options = {
      key: this.props.YOUTUBE_API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  onListItemClick(video) {
    this.setState({currentVideo: video});
  }

  render() {
    return (

      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentVideo}/> </h5></div>
          </div>
          <div className="col-md-5">


            <div><h5><em>videoList</em>
              <VideoList
                onClick={this.onListItemClick.bind(this)}
                videos ={exampleVideoData} /></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> <VideoPlayer videos={exampleVideoData}/> </h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> <VideoList videos={exampleVideoData} /></h5></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;