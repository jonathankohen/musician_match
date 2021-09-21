import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { matchesActions } from '../redux/slices/matches_slice';
import axios from 'axios';

import Person from '../components/Person';
import NoMoreMatches from '../views/NoMoreMatches';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
});

export default function Main({ user }) {
    const dispatch = useDispatch();
    const potentialMatches = useSelector(
        state => state.matches.potentialMatches
    );

    // => find potential matches
    useEffect(() => {
        api.get(`users/matches/${user.seeking}`, {
            withCredentials: true,
        })
            .then(res => {
                let response = res.data.results;
                dispatch(
                    matchesActions.populate(
                        response.filter(obj => !(obj._id === user.id))
                    )
                );
            })
            .catch(err => console.log(err));
        // eslint-disable-next-line
    }, []);

    const removeFromDataSrc = (targetArr, otherUserId) =>
        targetArr.filter(user => user._id !== otherUserId);

    const choiceHandler = (userId, action) => {
        switch (action) {
            case 'ADD_TO_LIKED_USERS':
                if (!user.likes.includes(userId)) {
                    user.likes.push(userId);

                    // TODO: update potentialMatches state, update DB
                    dispatch(
                        matchesActions.populate(
                            removeFromDataSrc(potentialMatches, userId)
                        )
                    );

                    console.log(potentialMatches);

                    // TODO: update DB by doing a put request with logged
                }
                break;
            case 'ADD_TO_DISLIKED_USERS':
                if (!user.dislikes.includes(userId)) {
                    user.dislikes.push(userId);

                    dispatch(
                        matchesActions.populate(
                            removeFromDataSrc(potentialMatches, userId)
                        )
                    );
                }
                break;
            case 'ADD_TO_SUPERLIKED_USERS':
                if (!user.superlikes.includes(userId)) {
                    user.superlikes.push(userId);

                    dispatch(
                        matchesActions.populate(
                            removeFromDataSrc(potentialMatches, userId)
                        )
                    );
                }
                break;
            default:
                return potentialMatches;
        }
    };

    return (
        <div className="container">
            {potentialMatches[1] ? (
                <Person
                    {...potentialMatches[1]}
                    choiceHandler={choiceHandler}
                />
            ) : (
                <NoMoreMatches />
            )}
        </div>
    );
}
