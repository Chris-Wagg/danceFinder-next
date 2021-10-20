import { Button, Box, Grid } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

import LeftNav from './LeftNav'

export default function LandingPage() {
	return (
		<Box>
			<Box display='flex' flexDirection='column' alighItems='center'>
				<Grid container>
					<Grid item lg={3} md={3} sm={3} sx={{ marginBottom: '40px' }}>
						<LeftNav />
					</Grid>
					<Grid item lg={3} md={3} sm={3} sx={{ marginBottom: '40px' }}>
						<LeftNav />
					</Grid>
					<Grid item lg={3} md={3} sm={3} sx={{ marginBottom: '40px' }}>
						<LeftNav />
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}
