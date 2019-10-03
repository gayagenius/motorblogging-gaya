import React from 'react'
import Photo from './Photo'

class Gallery extends React.Component{
    constructor(props){
        super(props)
        this.state={
          photos:[]
        }
      }
      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response =>response.json())
        .then (response=>{
          this.setState({
            photos:response.slice(0,5)
          })
        })
      
      }
    render(){
        return (
            <section>
									<header>
										<h2>Gallery</h2>
										<p>Magical Cars</p>
									</header>
									<div className="content">
										<div className="gallery">{
                                            this.state.photos.map(photos =>{
                                                return<Photo key ={photos.id} photos={photos}/>
                                            })
                                        }
											
										</div>
									</div>
								</section>
        )
    }
    
}

export default Gallery;