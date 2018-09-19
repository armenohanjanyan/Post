import { Switch, Route } from 'react-router-dom';
import React, {Component} from 'react';
import PostList from './components/post-list';
import { BrowserRouter } from 'react-router-dom';
import NewPost from './components/new-post'
import SinglePost from './components/single-post';
import Login from './components/login';



export default class Routes extends React.Component {
  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps)
  }
  
  render() {
    return (
      <BrowserRouter>
      <Switch>
          <Route exact path='/' component={PostList}/>
          <Route exact path='/posts' component={PostList}/>
          <Route exact path='/:id' component={SinglePost}/>
          <Route exact path='/posts/login' component={Login}/>
          <Route exact path='/posts/new' render={({history}) => {
            console.log('ok')
            if(!this.props.authUser) {
              history.push('/posts/login');
              return false
            } 
            return <NewPost />
          }}/>
        </Switch>
      </BrowserRouter>
    )
  }
   
}

