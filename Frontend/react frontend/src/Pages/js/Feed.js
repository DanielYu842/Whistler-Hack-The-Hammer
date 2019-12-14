import React from 'react';
import '../css/Feed.css'
import Post from './Post.js';


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
                    <Post title="this is a post "></Post>
                    <Post title="this is a larger post this is a larger post this is a larger post"></Post>
                    <Post title="this is a post "></Post>

                    <Post title="this is a post "></Post>
                    <Post title="this is a larger post this is a larger post this is a larger post"></Post>
                    <Post title="this is a post "></Post>
                    <Post title="this is a post this is a post"></Post>


                </div>
            </div>
        )
    }
}


export default Feed