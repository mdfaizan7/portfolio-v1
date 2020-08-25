import React, { useState } from 'react'
import VizSensor from 'react-visibility-sensor'

import Container from '@material-ui/core/Container'
import Fade from '@material-ui/core/Fade'
import Grid from '@material-ui/core/Grid'

import Radar from './Radar'
import Photo from './Photo'
import MyDetails from './MyDetails'

import '../../styles/details.scss'

const RenderDetails = () => {
	const [visible, setVisiblility] = useState(false)

	return (
		<VizSensor
			partialVisibility
			onChange={isVisible => {
				setVisiblility(isVisible)
			}}
		>
			<div className='details'>
				<Container>
					<Fade in={visible} direction='up' timeout={1500}>
						<div className='head'>ABOUT ME</div>
					</Fade>
					<Grid container alignItems='flex-start' justify='center'>
						<Grid item xs={12} md={4}>
							<Radar />
						</Grid>
						<Grid item xs={12} md={4}>
							<Photo />
						</Grid>
						<Grid item xs={12} md={4}>
							<MyDetails />
						</Grid>
					</Grid>
				</Container>
			</div>
		</VizSensor>
	)
}

export default RenderDetails
