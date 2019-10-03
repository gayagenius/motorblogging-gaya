import React from 'react'
import Post from './Post'

class Blog extends React.Component{
    constructor(props){
        super(props)
        this.state={
          post:[]
        }
      }
      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response =>response.json())
        .then (response=>{
          this.setState({
            post:response.slice(0,5)
          })
        })
      }
    render(){
        return (
            <section id="first">
						<header>
							<h2>Motor Blogging</h2>
						</header>
						<div className="content">
                            {
                                this.state.post.map(post=>{
                                    return <Post key = {post.id}post={post}/>
                                })
                            }
							
						</div>
					</section>

        )
    }
    
}

export default Blog;