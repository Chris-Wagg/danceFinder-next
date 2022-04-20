import { Button, Box, Grid, Typography } from '@mui/material'

import AccessTimeIcon from '@mui/icons-material/AccessTime'

export default function Planner() {
	return (
		<Box sx={{ marginTop: '50px' }}>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				// spacing={8}
			>
				<>
					<Grid item marginBottom="30px">
						<Typography> Monday </Typography>
						<Typography>test</Typography>
					</Grid>
					<Grid item margin="30px 0px">
						<Typography> Tuesday </Typography>
					</Grid>
					<Grid item margin="30px 0px">
						<Typography> Wednesday </Typography>
					</Grid>
					<Grid item margin="30px 0px">
						<Typography> Thursday </Typography>
					</Grid>
					<Grid item margin="30px 0px">
						<Typography> Friday </Typography>
					</Grid>
					<Grid item margin="30px 0px">
						<Typography> Saturday </Typography>
					</Grid>
					<Grid item margin="30px 0px">
						<Typography> Sunday </Typography>
					</Grid>

					<Button
						variant="outlined"
						startIcon={<AccessTimeIcon />}
						sx={{ margin: '5px' }}
					>
						add thing
					</Button>
				</>
			</Grid>
		</Box>
	)
}
