import React from 'react';

export default function SuperLikeButton({ otherUserId, choiceHandler }) {
    return (
        <>
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => choiceHandler(otherUserId, 'ADD_TO_SUPERLIKED_USERS')}
            >
                Like
            </button>
        </>
    );
}
