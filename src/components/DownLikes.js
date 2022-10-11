import React from 'react';

function DownLikes({downLikes,handleDislike}) {

    return (
        <button onClick={handleDislike}>{`${downLikes}👎`}</button>
    )
}

export default DownLikes;