import React from 'react'

class Home extends React.Component{
    render(){
        return (
            <section className="intro">
						<header>
							<h1>Cars into Beasts</h1>
							<p>Black is the new gold</p>
							<ul className="actions">
								<li><a href="#first" className="arrow scrolly"><span className="label">Next</span></a></li>
							</ul>
						</header>
						<div className="content">
							<span className="image fill" data-position="center"><img src="https://images.unsplash.com/photo-1570089434134-9fe163fcfb8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=348&q=80" alt="" /></span>
						</div>
					</section>
        )
    }
    
}

export default Home;