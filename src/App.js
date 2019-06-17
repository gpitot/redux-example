import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import PostList from './components/post-list';
import AddPost from './components/add-post';

export default () => {
    return (

        <Provider store={store}>
            <div>
            <AddPost />
            <PostList />
            </div>
        
        </Provider>

    )

    
}