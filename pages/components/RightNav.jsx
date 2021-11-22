import { Button, Box, Grid, Typography } from '@mui/material'
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
			color: 'white',
			height: '80vh'
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
		},
		typography: {
			h1: {
				fontSize: [18]
			}
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
						columnSpacing={3}>
						<Grid item>
							<Button
								variant='outlined'
								startIcon={<AccessTimeIcon />}
								sx={{ marginTop: '30px' }}>
								my Timetable
							</Button>
						</Grid>

						<Grid item>
							<Button
								variant='outlined'
								startIcon={<AccessTimeIcon />}
								sx={{ marginTop: '30px' }}>
								my Events
							</Button>
						</Grid>
					</Grid>

					<Box sx={{ marginTop: '50px' }}>
						<Grid
							container
							direction='column'
							alignItems='center'
							justifyContent='center'
							// spacing={8}
						>
							<Grid item marginBottom='30px'>
								<Typography> Monday </Typography>
								<Typography>test</Typography>
							</Grid>
							<Grid item margin='30px 0px'>
								<Typography> Tuesday </Typography>
							</Grid>
							<Grid item margin='30px 0px'>
								<Typography> Wednesday </Typography>
							</Grid>
							<Grid item margin='30px 0px'>
								<Typography> Thursday </Typography>
							</Grid>
							<Grid item margin='30px 0px'>
								<Typography> Friday </Typography>
							</Grid>
							<Grid item margin='30px 0px'>
								<Typography> Saturday </Typography>
							</Grid>
							<Grid item margin='30px 0px'>
								<Typography> Sunday </Typography>
							</Grid>

							<Button
								variant='outlined'
								startIcon={<AccessTimeIcon />}
								sx={{ margin: '5px' }}>
								add thing
							</Button>
						</Grid>
					</Box>
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
