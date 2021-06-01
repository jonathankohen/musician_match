import React from 'react';

export default function LikeButton({ otherUserId, choiceHandler }) {
    return (
        <>
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => choiceHandler(otherUserId, 'ADD_TO_LIKED_USERS')}
            >
                Like
            </button>
        </>
    );
}
