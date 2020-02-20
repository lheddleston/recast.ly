var searchYouTube = ({query, max = 5, key, callback}) => {
  $.get('https://www.googleapis.com/youtube/v3/search?', {
    part: 'snippet',
    q: query,
    maxResults: max,
    key: key,
    type: 'video',
    videoEmbeddable: 'true',
    videoCaption: 'any'
  })
    .done(({items}) =>{
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) => console.log(err));
    });
};
export default searchYouTube;
