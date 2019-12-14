import React from 'react';
import '../css/Post.css'

class Post extends React.Component {
    constructor(){
        super()
        this.state = {
            verified : false
        }
    }

    render(){
        return(
            <div className="post-div">
                <div className="post-title-div">
                    {this.props.title}
                </div>
                <div className="post-file-div">
                    filename
                </div>
            </div>
        )
    }
}


export default Post