import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {fetchPosts} from '../actions/post-actions';
import styled from 'styled-components';

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const posts = this.props.posts.map((post) => 
            <Post key={post.id}>
                <Title>{post.title}</Title>
                <Body>{post.body}</Body>
            </Post>
        )
        return (
            <div>
                <h1>asdf</h1>
                <Posts>
                    {posts}
                </Posts>
                
            </div>
        )
    }
}

const Posts = styled.div`
    display:flex;
    flex-direction:column;
    width:1200px;
    max-width:100%;
`;

const Post = styled.div`

`;

const Title = styled.h2``;

const Body = styled.p``;

const mapStateToProps = state => {
    return {
        posts : state.posts.items
    }
}



export default connect(mapStateToProps, {fetchPosts})(PostList);

