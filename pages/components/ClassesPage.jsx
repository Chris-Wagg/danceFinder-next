import { Button, Box, Grid, Toolbar } from '@mui/material'

import LeftNav from './LeftNav'
import RightNav from './RightNav'
import HeaderBar from './HeaderBar'
import ClassesDisplay from './ClassesDisplay'

export default function LandingPage() {
	return (
		<>
			<HeaderBar />
			<Toolbar />
			<Toolbar />
			<Box>
				<Box display='flex' flexDirection='column' alighItems='center'>
					<Grid container spacing={9}>
						<Grid item lg={2} md={2} sm={2}>
							<LeftNav />
						</Grid>
						<Grid item lg={7} md={7} sm={7}>
							<ClassesDisplay />
							{/* This might need to change depending on the navigation */}
						</Grid>
						<Grid item lg={3} md={3} sm={3}>
							<h1>this will be the search parameters row</h1>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	)
}
