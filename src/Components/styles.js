import styled from 'styled-components';

export const SApp = styled.div`
	&>h1 {
		font-size: 4rem;
		margin-top: 5rem;
		text-align: center;
	}
`

export const Banner = styled.div`
	min-height: 80vh;
	background: url(${props => props.src}) center no-repeat;
	background-size: cover;
	padding: 10vh 5rem;
	box-shadow: inset 0 -40px 20px -20px rgba(255,255,255,1);

	h1 {
		font-size: 5rem;
		color: white;
		margin-top: 3rem;
		text-shadow: 0px 2px 5px rgba(0,42,80,0.8);
	}
`

export const Panel = styled.div`
	background-color: ${props => props.color};
	min-height: 50vh;

	display: flex;
	align-items: center;

	& > div {
		max-width: 100rem;
		margin: 0 auto;
	}
`

export const GridPanel = styled(Panel)`
	& > div {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
`

export const ProfilePicture = styled.div`
	width: 25rem;
	height: 25rem;

	background: url(${props => props.src}) center no-repeat;
	background-size: cover;

	-webkit-filter: grayscale(100%);
	filter: gray;

	border-radius: 50%;

	border: .5rem solid white;
	box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.7);

	justify-self: start;
	align-self: center;
`

export const Project = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	margin: 10rem 0;
`

export const EmptyThumb = styled.div`
	width: 30rem;
	height: 30rem;

	background: #eee;

	border: .5rem solid white;
	box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.7);

	justify-self: start;
	align-self: center;

	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 2.4rem;
	color: #ccc;

	text-align: center;
`

export const Thumb = styled(EmptyThumb)`
	background: url(${props => props.src}) center no-repeat;
	background-size: cover;
`

export const ProjectDetails = styled.div`

	margin-left: 5rem;

	h2 {
		font-size: 2.8rem;
		border-bottom: 1px solid #ccc;
		margin-bottom: 2rem;
	}

	h3 {
		font-size: 2rem;
	}

	a, li {
		font-size: 1.6rem;
	}
`

export const Footer = styled.footer`
	max-width: 20rem;
	margin: 0 auto;

	padding: 5rem;

	display: flex;

	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	h1 {
		margin-bottom: 1rem;
	}

	p {
		margin: .5rem;
	}

	a {
		display: flex;
		align-items: center;

		text-decoration: none;
		color: cornflowerblue;

		:visited, :active, :focus {
			text-decoration: none;
			color: cornflowerblue;
		}
	}
`

export const Icon = styled.div`
	display: inline-flex;

	width: 1.6rem;
	height: 1.6rem;

	background: url(${props => props.src}) center no-repeat;
	background-size: contain;

	margin-right: 1rem;
`