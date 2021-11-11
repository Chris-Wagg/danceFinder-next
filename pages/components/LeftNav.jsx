import Link from 'next/link'

import { Button, Box, Grid, Divider } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@mui/material'

import AccessTimeIcon from '@mui/icons-material/AccessTime'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

const useStyle = makeStyles((theme) => {
	return {
		navBox: {
			background: '#1d1d1d',
			border: '2px solid black',
			margin: '1%',
			borderRadius: '30px',
			color: 'white',
			height: '80vh'
		},
		divider: {
			color: 'white',
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

export default function LeftNav() {
	const classes = useStyle()
	return (
		<ThemeProvider theme={theme}>
			<Box>
				<Grid
					container
					rowSpacing={4}
					direction='column'
					alignItems='center'
					className={classes.navBox}>
					<Grid item rowSpacing={0}>
						<h1>danceFinder</h1>
					</Grid>
					<Grid item />
					{/* <Grid item /> */}
					<Grid item sx={{ alignItems: 'stretch' }}>
						<Button
							color='primary'
							variant='outlined'
							startIcon={<HomeOutlinedIcon />}>
							<Link href='/'>Home</Link>
						</Button>
					</Grid>
					<Grid item>
						<Button variant='outlined' startIcon={<AccessTimeIcon />}>
							<Link href='/components/ClassesPage'>classes</Link>
							{/* fix this link later to makes sure components doesn't show in the url */}
						</Button>
					</Grid>
					<Grid item>
						<Button variant='outlined' startIcon={<AccessTimeIcon />}>
							Events
						</Button>
					</Grid>
					<Grid item>
						<Button variant='outlined' startIcon={<AccessTimeIcon />}>
							Find media
						</Button>
					</Grid>
					<Grid item>
						<Button variant='outlined' startIcon={<AccessTimeIcon />}>
							Online resources
						</Button>
					</Grid>

					<Grid item />
					<Grid item />
					<Grid item />

					<Grid item sx={{ marginBottom: '50px' }}>
						<Button variant='outlined' startIcon={<AccessTimeIcon />}>
							Account stuff here
						</Button>
					</Grid>
				</Grid>
			</Box>
		</ThemeProvider>
	)
}
