import {
    FETCH_POSTS,
    ADD_POST
} from './types';


export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json()) 
        .then(posts => 
            dispatch({
                type : FETCH_POSTS,
                payload : posts
            })
        );
}


export const addPost = (post) => dispatch => {
    dispatch({
        type:ADD_POST,
        payload : post
    })
}


