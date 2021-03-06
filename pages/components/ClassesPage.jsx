import { Button, Box, Grid, Toolbar } from '@mui/material'

import LeftNav from './LeftNav'
import RightNav from './RightNav'
import HeaderBar from './HeaderBar'
import ClassesDisplay from './ClassesDisplay'
import CentralNav from './CentralNav'

export default function LandingPage() {
	return (
		<>
			<HeaderBar />
			<Toolbar />
			<Toolbar />
			<Box sx={{ marginLeft: '30px', marginRight: '30px' }}>
				<Grid container direction='row' columnSpacing={5}>
					<Grid item lg={2} md={2} sm={2} sx={{ marginLeft: '0px' }}>
						<LeftNav />
					</Grid>
					<Grid item lg={7} md={7} sm={7}>
						<ClassesDisplay />
					</Grid>
					<Grid item lg={3} md={3} sm={3}>
						<RightNav />
					</Grid>
				</Grid>
			</Box>
		</>
	)
}
