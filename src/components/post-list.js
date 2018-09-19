import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link }from 'react-router-dom';
import _ from 'lodash';


class PostList extends Component {
    componentDidMount() {
        console.log(this.props)
      this.props.fetchPost()     
    }

    renderPost() {
        return (
            _.map(this.props.post, post => {
               return( 
                 <li className="list-group-item" key={post.title}>
                  <Link to={`/${post.id}`}>
                    {post.title}
                  </Link>
                 </li>
               );
            })
        )
    }

    render() {
        console.log(this.props.post)
        return (
            <div>
                <div className="text-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Create Post
                    </Link>
                </div>
                <div>
                    <h2>Posts</h2>
                    <ul className="list-group">
                        {this.renderPost()}
                    </ul>
                </div>
            </div>
        );
    }
} 

function mapStateToProps(state) {
    return { post: state.post };
}


export default connect(mapStateToProps, { fetchPost })(PostList);