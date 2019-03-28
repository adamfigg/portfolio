import styled from 'styled-components';

export const SApp = styled.div`

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
	padding: 5rem;

	max-width: 100rem;
	margin: 0 auto;

	.content {
		justify-self: center;
		align-self: center;
	}
`

export const GridPanel = styled(Panel)`
	display: grid;
	grid-template-columns: 1fr 2fr;
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

`

export const Thumb = styled.div`

`