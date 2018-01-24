import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';


class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state = {postTitle: '', postContent: ''};


    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }
  handleChange1(e){
    this.setState({
      postTitle: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      postContent: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const posts = {
      title: this.state.postTitle,
      content: this.state.postContent
    }
    let uri = MyGlobleSetting.url + '/api/posts';
    axios.post(uri, posts).then((response) => {
      browserHistory.push('/display-item');
    });
  }


    render() {
      return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Post Title:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Post Content:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange2}></textarea>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Add Post</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreatePost;