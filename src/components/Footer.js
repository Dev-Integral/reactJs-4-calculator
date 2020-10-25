import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<div>
				<div className="footer">
					<div className="content">
						<p>
							Made with <i className="fa fa-heart heart-icon" style={{color: "tomato"}}></i> | <a href="https://twitter.com/Dev_Integral" target="_blank" style={{color: "skyblue"}}> @Dev_Integral <i className="fa fa-twitter twitter-icon"></i></a> | &copy; 2020

						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;