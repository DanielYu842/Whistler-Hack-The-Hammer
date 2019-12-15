import React from 'react';
import Card from './Post Animation'


class Post extends React.Component {
    constructor(){
        super()
        this.state = {
            verified : false
        }
    }



    render(){

        return(
            <Card title={this.props.title}></Card>
        )
    }
}


export default Post