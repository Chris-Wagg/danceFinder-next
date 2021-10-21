import { Grid, Box } from '@mui/material'

export default function CentralNav() {
	return (
		<>
			<Grid container>
				<Grid item lg={12}>
					<Box
						display='flex'
						alignItems='center'
						justifyContent='center'
						sx={{ border: '2px solid blue' }}>
						<h1> this is the feed nav</h1>
					</Box>
					<Grid item lg={12}>
						<Box
							display='flex'
							alignItems='center'
							justifyContent='center'
							sx={{ border: '2px solid blue' }}>
							<h1> feed contents </h1>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}
