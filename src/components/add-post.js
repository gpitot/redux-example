import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addPost} from '../actions/post-actions';

class AddPost extends Component {

    state = {
        title : '',
        body : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const post = {
            id : this.props.posts.length + 1,
            title: this.state.title,
            body: this.state.body
        };

        this.props.addPost(post);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type = "text" name = "title" value={this.state.title} onChange={this.handleChange} />
                <input type = "text" name = "body" value={this.state.body} onChange={this.handleChange} />
                <input type = "submit" value="Submit" />
            </form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        posts : state.posts.items
    }
}

export default connect(mapStateToProps, {addPost})(AddPost);