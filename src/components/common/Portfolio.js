import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

import image1 from '../assets/img/portfolio/01-thumbnail.jpg';
import image2 from '../assets/img/portfolio/02-thumbnail.jpg';
import image3 from '../assets/img/portfolio/03-thumbnail.jpg';
import image4 from '../assets/img/portfolio/04-thumbnail.jpg';
import image5 from '../assets/img/portfolio/05-thumbnail.jpg';
import image6 from '../assets/img/portfolio/06-thumbnail.jpg';

const PortfolioItems =[
	{title: 'Threads', subtitle: 'Illustration', image: image1},
	{title: 'Explore', subtitle: 'Graphics Designer', image: image2},
	{title: 'Finish', subtitle: 'Identity', image: image3},
	{title: 'Lines', subtitle: 'Branding', image: image4},
	{title: 'Southwest', subtitle: 'Web Design', image: image5},
	{title: 'Window', subtitle: 'Photography', image: image6},
];

class Portfolio extends Component {
	render() {
		return (
			<div>
				<section className="page-section bg-light">
					<div className="container">
						<div className="text-center">
							<h2 className="section-heading text-uppercase">Portfolio</h2>
							<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
						</div>
						<div className="row">
							{
								PortfolioItems.map((pItem, index)=> {
									return <PortfolioItem key={index} {...pItem} />
								})
								}
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Portfolio;