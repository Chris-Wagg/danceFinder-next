import { Button, Box, Grid } from '@mui/material'

import LeftNav from './LeftNav'
import CentralNav from './CentralNav'

export default function LandingPage() {
	return (
		<Box>
			<Box display='flex' flexDirection='column' alighItems='center'>
				<Grid container spacing={9}>
					<Grid item lg={2} md={2} sm={2}>
						<LeftNav />
					</Grid>
					<Grid item lg={7} md={7} sm={7}>
						<CentralNav />
					</Grid>
					<Grid item lg={3} md={3} sm={3}>
						<LeftNav />
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}
