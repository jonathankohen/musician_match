import React from 'react';

export default function DislikeButton({ otherUserId, choiceHandler }) {
    return (
        <>
            <button
                className="btn btn-primary"
                type="button"
                onClick={() =>
                    choiceHandler(otherUserId, 'ADD_TO_DISLIKED_USERS')
                }
            >
                Pass
            </button>
        </>
    );
}
