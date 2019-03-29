import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getProjects } from './../redux/actions'

import {
	SApp,
	Banner,
	Panel,
	GridPanel,
	ProfilePicture,
	Project,
	Thumb,
	ProjectDetails
} from './styles';

import bannerImage from './../Assets/background-mountain.jpg';
import profilePic from './../Assets/adamProfile.jpg';

class App extends Component {

	componentDidMount = () => {
		this.props.getProjects();
	}


	render() {
		const { data } = this.props;
		return (
			<SApp>
				<Banner src={bannerImage}>
					<h1>Hello, my name is Adam.</h1>
				</Banner>
				<Panel color={'#ffffff'}>
					{
						data.map(({ name, link, thumb, tech, details }) => <Banner>
							{thumb && <Thumb src={thumb} />}
							<ProjectDetails>
								<h2>{name}</h2>
								<h3>{tech}</h3>
								{link && <a href={link} rel='noopener noreferrer' target='_blank'>Demo here</a>}
								<ul>
									{details.map(d => <li>{d}</li>)}
								</ul>
							</ProjectDetails>
						</Banner>
						)
					}
				</Panel>
				<GridPanel color={'#ffffff'}>
					<ProfilePicture src={profilePic} />
					<div className="content">
						<p>I received my bachelor’s from Brigham Young University-Idaho in Business Management with an emphasis in Marketing and am now a front-end web developer.</p>
						<p>I recently dove into the world of coding and front-end web development through Dev-Mountain. I have experience with full-stack web development and love working with a team to solve problems using React, Redux, Node.js, Javascript, HTML5, CSS3, Bootstrap, jQuery, Postgress, and any other tech I can get my hands on.</p>
						<p>My previous 7 years were spent working as a social media marketer (SMM), content curator, search engine optimizer (SEO), and event marketer.</p>
						<p>I am a seeker of fresh powder, avid gamer, and enjoy most things adventurous.</p>
					</div>
				</GridPanel>
				<Panel color={'#FFD700'}>
					<p>Github, LinkedIn, Email</p>
				</Panel>
			</SApp>
		);
	}
}

const mapStateToProps = state => ({
	data: state.data
});

const mapStateToDispatch = {
	getProjects
};

export default connect(mapStateToProps, mapStateToDispatch)(App);
