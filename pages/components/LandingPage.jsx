import { Button, Box, Grid } from '@mui/material'

import LeftNav from './LeftNav'
import CentralNav from './CentralNav'
import RightNav from './RightNav'
import HeaderBar from './HeaderBar'

export default function LandingPage() {
	return (
		<>
			<HeaderBar />
			<Box>
				<Box display='flex' flexDirection='column' alighItems='center'>
					<Grid container spacing={9}>
						<Grid item lg={2} md={2} sm={2}>
							<LeftNav />
						</Grid>
						<Grid item lg={7} md={7} sm={7}>
							<CentralNav />
							{/* This might need to change depending on the navigation */}
						</Grid>
						<Grid item lg={3} md={3} sm={3}>
							<RightNav />
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	)
}
