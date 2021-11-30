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
	EmptyThumb,
	ThumbSmall,
	EmptyThumbSmall,
	ProjectDetails,
	Footer,
	Icon
} from './styles';

import bannerImage from './../Assets/background-mountain.jpg';
import profilePic from './../Assets/adamProfile.jpg';
import github from './../Assets/github-logo.svg'
import linkedin from './../Assets/linkedin.svg'

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
				<h1>Projects</h1>
				<Panel>
					<div>
						{
							data.map(({ name, link, thumb, tech, details }) => <Project>
								{thumb ? <Thumb src={require(`./../Assets/${thumb}`)} /> : <EmptyThumb>Project is not yet public</EmptyThumb>}
								<ProjectDetails>
									<h2>{name}</h2>
									<h3>{tech}</h3>
									{link && <a href={link} rel='noopener noreferrer' target='_blank'>See it here</a>}
									<ul>
										{details.map(d => <li>{d}</li>)}
									</ul>
								</ProjectDetails>
								{thumb ? <ThumbSmall src={require(`./../Assets/${thumb}`)} /> : <EmptyThumbSmall>Project is not yet public</EmptyThumbSmall>}
							</Project>
							)
						}
					</div>
				</Panel>
				<GridPanel color={'#eee'}>
					<div>
						<ProfilePicture src={profilePic} />
						<div className="content">
							<p>I am a front-end web developer, though I received my bachelor’s from Brigham Young University-Idaho in Business Management.</p>
							<p>I dove into the world of coding and front-end web development through Dev-Mountain and have about 5 years of developing experience with React and Redux. I have worked with a full-stack of web and mobile development and love working with a team to solve problems using React, Redux, Javascript, HTML, CSS, and any other tech I can get my hands on.</p>
							<p>My previous 7 years were spent as a social media marketer (SMM), content curator, and search engine optimizer (SEO).</p>
							<p>I am a seeker of fresh powder, avid gamer, and enjoy most things adventurous.</p>
						</div>
					</div>
				</GridPanel>
				<Footer>
					<h1>Adam Figgat</h1>
					<p>
						<a href={'https://www.github.com/adamfigg'} rel='noopener noreferrer' target='_blank'><Icon src={github} /> Github</a>
					</p>
					<p>
						<a href={'https://www.linkedin.com/in/adam-figgat/'} rel='noopener noreferrer' target='_blank'><Icon src={linkedin} /> LinkedIn</a>
					</p>
					<p>
						<a href={'mailto:afiggat@gmail.com'} rel='noopener noreferrer' target='_blank'>afiggat@gmail.com</a>
					</p>
				</Footer>
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

// do changes
// git checkout netlify branch
// git merge master
// git push