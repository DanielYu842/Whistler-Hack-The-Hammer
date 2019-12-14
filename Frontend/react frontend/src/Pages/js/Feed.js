import React from 'react';
import '../css/Feed.css'
import Post from './Post.js';
import UploadFileButton from './Button.js'
import JSON from './dummy.json'


class Feed extends React.Component {
    constructor(){
        super()
        this.state = {
            
        }
    }

    render(){
        return(
            <div  className="feed-div">
                <div className="posts-div">

                    {JSON.map( (data, index) => {
                        return(<Post title={data.title} key={index}></Post>)
                    } )}

                </div>

                <div className="button-div">
                    <UploadFileButton></UploadFileButton>
                </div>
            </div>
        )
    }
}


export default Feed