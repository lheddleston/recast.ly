import VideoListEntry from './VideoListEntry.js';
var VideoList = (props) => {
  // console.`log(props.videos[0].id.videoId);
  // console.log('props in VideoList', props.exampleVideoData[0].videoId);
  return (
    <div className="video-list">

      {props.videos.map( (video, index) => <VideoListEntry key={index} video={video} />)}

    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoList.propTypes = {
//   videos: PropTypes.array.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
