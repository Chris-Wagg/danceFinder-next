import { Button, Box, Grid } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => {
	return {
		navBox: {
			// background: '#090909',
			border: '5px solid black',
			width: '30vw'
		}
	}
})

export default function LandingPage() {
	const classes = useStyle()
	return (
		<Box>
			<Grid
				container
				spacing={3}
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				className={classes.navBox}>
				<Grid item>
					<h1>danceFinder</h1>
				</Grid>
				<Grid item />
				<Grid item />
				<Grid item>
					<Button variant='contained' endIcon={<AccessTimeIcon />}>
						Home
					</Button>
				</Grid>
				<Grid item>
					<Button variant='contained' endIcon={<AccessTimeIcon />}>
						find classes
					</Button>
				</Grid>
				<Grid item>
					<Button variant='contained' endIcon={<AccessTimeIcon />}>
						Events
					</Button>
				</Grid>
				<Grid item>
					<Button variant='contained' endIcon={<AccessTimeIcon />}>
						My timetable
					</Button>
				</Grid>
				<Grid item>
					<Button variant='contained' endIcon={<AccessTimeIcon />}>
						Media
					</Button>
				</Grid>
				<Grid item />
				<Grid item />
				<Grid item />
				<Grid item>
					<Button variant='contained' endIcon={<AccessTimeIcon />}>
						Media
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
}
