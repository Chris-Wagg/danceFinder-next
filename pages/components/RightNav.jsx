import { Button, Box, Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@mui/material'

import AccessTimeIcon from '@mui/icons-material/AccessTime'

const useStyle = makeStyles((theme) => {
	return {
		rightNav: {
			background: '#1d1d1d',
			border: '2px solid black',
			margin: '1%',
			borderRadius: '30px',
			color: 'white'
		},
		button: {
			backgroundColor: 'white'
		}
	}
})

const theme = createTheme({
	palette: {
		primary: {
			main: '#ffffff'
		}
	}
})

export default function RightNav() {
	const classes = useStyle()
	return (
		<ThemeProvider theme={theme}>
			<>
				<Box className={classes.rightNav}>
					<Grid
						container
						direction='row'
						justifyContent='center'
						columnSpacing={2}>
						<Grid item>
							<Button
								variant='outlined'
								startIcon={<AccessTimeIcon />}
								sx={{ margin: '10px' }}>
								my Timetable
							</Button>
						</Grid>

						<Grid item>
							<Button
								variant='outlined'
								startIcon={<AccessTimeIcon />}
								sx={{ margin: '10px' }}>
								my Events
							</Button>
						</Grid>
					</Grid>

					{/* </Box> */}
					<Box>
						<h1>right nav content here in a box test wrap</h1>
						<Button
							variant='outlined'
							startIcon={<AccessTimeIcon />}
							sx={{ margin: '10px' }}>
							add thing
						</Button>
					</Box>
					{/* </Grid> */}
				</Box>
			</>
		</ThemeProvider>
	)
}

{
	/* <Button
					variant='outlined'
					startIcon={<AccessTimeIcon />}
					sx={{ margin: '10px' }}>
					Messages
				</Button> */
}

{
	/* <Box
							display='flex'
							flexDirection='row'
							justifyContent='space-evenly'
							alignItems='center'
							spacing={3}
							className={classes.rightNav}> */
}
