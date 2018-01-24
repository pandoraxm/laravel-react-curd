import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';


class UpdatePost extends Component {
  constructor(props) {
      super(props);
      this.state = {title: '', content: ''};
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount(){
    axios.get(MyGlobleSetting.url + `/api/posts/${this.props.params.id}/edit`)
    .then(response => {
      this.setState({ title: response.data.title, content: response.data.content });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  handleChange1(e){
    this.setState({
      title: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      content: e.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault();
    const posts = {
      title: this.state.title,
      content: this.state.content
    }
    let uri = MyGlobleSetting.url + '/api/posts/'+this.props.params.id;
    axios.patch(uri, posts).then((response) => {
          this.props.history.push('/display-item');
    });
  }
  render(){
    return (
      <div>
        <h1>Update Post</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/display-item" className="btn btn-success">Return to Post</Link>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Post Title</label>
                <input type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.handleChange1} />
            </div>


            <div className="form-group">
                <label name="post_content">Post Content</label>
                <textarea className="form-control"
                  onChange={this.handleChange2} value={this.state.content}></textarea>  
            </div>


            <div className="form-group">
                <button className="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
    )
  }
}
export default UpdatePost;