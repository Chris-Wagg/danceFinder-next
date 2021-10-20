import { Button, Box, Grid } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

import LeftNav from './LeftNav'

export default function LandingPage() {
	return (
		<Box>
			<Box display='flex' flexDirection='column' alighItems='center'>
				<Grid>
					<Grid item lg={2}>
						<LeftNav />
					</Grid>
					<Grid item lg={2}>
						<LeftNav />
					</Grid>
					<Grid item lg={2}>
						<LeftNav />
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}
