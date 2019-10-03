import React from 'react'

class Photo extends React.Component{
    render(){
        return (
            <a href={this.props.photos.url} className="landscape">
                <img src={this.props.photos.url} alt="" /></a>
        )
        
    }
    
}

export default Photo;