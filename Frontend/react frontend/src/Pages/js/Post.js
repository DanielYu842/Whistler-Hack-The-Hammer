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
        console.log(this.props.index)
        return(
            <Card title={this.props.title}></Card>
        )
    }
}


export default Post