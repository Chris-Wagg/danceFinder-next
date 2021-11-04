import Link from 'next/link'

import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { Button, Box, Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => {
	return {
		navBox: {
			// background: '#090909',
			border: '5px solid black'
			// width: '30vw'
		}
	}
})

export default function LeftNav() {
	const classes = useStyle()
	return (
		<Box>
			<Grid
				container
				spacing={5}
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
					<Button variant='contained' startIcon={<AccessTimeIcon />}>
						<Link href='/'>Home</Link>
					</Button>
				</Grid>
				<Grid item>
					<Button variant='contained' startIcon={<AccessTimeIcon />}>
						<Link href='/components/ClassesPage'>Find classes</Link>
						{/* fix this link later to makes sure components doesn't show in the url */}
					</Button>
				</Grid>
				<Grid item>
					<Button variant='contained' startIcon={<AccessTimeIcon />}>
						find Events
					</Button>
				</Grid>
				<Grid item>
					<Button variant='contained' startIcon={<AccessTimeIcon />}>
						Find media
					</Button>
				</Grid>
				<Grid item>
					<Button variant='contained' startIcon={<AccessTimeIcon />}>
						Online resources
					</Button>
				</Grid>

				<Grid item />
				<Grid item />
				<Grid item />

				<Grid item>
					<Button variant='contained' startIcon={<AccessTimeIcon />}>
						Account stuff here
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
}
