import React from 'react';

import LikeButton from './LikeButton';
import SuperLikeButton from './SuperLikeButton';
import DislikeButton from './DislikeButton';

export default function Person({
    firstName,
    lastName,
    bio,
    _id,
    choiceHandler,
}) {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        {firstName} {lastName}
                    </h4>
                    <p className="card-text">{bio}</p>
                    <div className="container d-flex justify-content-around">
                        <DislikeButton
                            otherUserId={_id}
                            choiceHandler={choiceHandler}
                        />
                        <SuperLikeButton
                            otherUserId={_id}
                            choiceHandler={choiceHandler}
                        />
                        <LikeButton
                            otherUserId={_id}
                            choiceHandler={choiceHandler}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
