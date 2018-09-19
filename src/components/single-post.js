import React, { Component } from 'react';
import { showPost, deletePost } from '../actions/index';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

class SinglePost extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.showPost(id);
    }

    onDelete() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/')
        });
    }

    render() {
        const { post } = this.props;
        return (
            <div>          
                    <Link to={'/'} className="btn btn-primary">{'<<<'} Posts</Link>
                    
                    <button
                      className="btn btn-danger"
                      onClick={this.onDelete.bind(this)}
                      >
                        Delete
                    </button>  
                <div style={{width: "100%", textAlign: "center"}}>   
                    <h3>{post && post.title}</h3>
                    <p>{post && post.content}</p>
                </div> 
            </div>
        )
    }
}

function mapStatetoProps({ post }, ownProps) {
    return (
        { post: post[ownProps.match.params.id] }
    )
}

export default connect(mapStatetoProps, {showPost, deletePost})(SinglePost);