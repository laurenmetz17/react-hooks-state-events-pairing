import React from 'react';

function Comments({comments, commentDisplay, handleComments}) {

    const commentItems = comments.map((item) => (
        <div>
            <h5>{item.user}</h5>
            <p>{item.comment}</p>
        </div>
    ))

    return (
        <div>
            <button onClick={handleComments}>{commentDisplay ? 'Hide Comments' : 'Show Comments'}</button>
            {/*line*/}
            <h3>{`${comments.length} Comments`}</h3>
            {commentDisplay ? commentItems : null}

        </div>
    )
}

export default Comments;