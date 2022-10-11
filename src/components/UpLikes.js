import React from 'react';

function UpLikes({upLikes,handleLike}) {

    return (
        <button onClick={handleLike}>{`${upLikes}👍`}</button>
    )
}

export default UpLikes;