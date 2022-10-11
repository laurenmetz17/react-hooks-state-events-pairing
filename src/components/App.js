import video from "../data/video.js";
import React, {useState} from 'react';
import UpLikes from './UpLikes.js';
import DownLikes from './DownLikes.js';
import Comments from './Comments.js';

function App() {
  console.log("Here's your data:", video);

  const [upLikes, setUpLikes] = useState(video.upvotes);
  const [downLikes, setDownLikes] = useState(video.downvotes);
  const [commentDisplay, setCommentDisplay] = useState(true);

  function handleLike(event) {
    setUpLikes((upLikes) => upLikes+1)
  }

  function handleDislike(event) {
    setDownLikes((downLikes) => downLikes+1)
  }

  function handleComments(event) {
    setCommentDisplay((commentDisplay) => !commentDisplay);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{`${video.views} Views | Uploaded ${video.createdAt}`}</p>
      <div class="Likes">
        <UpLikes upLikes={upLikes} handleLike={handleLike}/>
        <DownLikes downLikes={downLikes} handleDislike={handleDislike}/>
      </div>
      <Comments comments={video.comments} commentDisplay={commentDisplay} handleComments={handleComments}/>

    </div>
  );
}

export default App;
