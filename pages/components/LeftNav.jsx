import Link from 'next/link'
import React from 'react'

import { Box, Grid } from '@mui/material'
import { makeStyles, Tabs, Tab } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@mui/material'

import CentralNav from './CentralNav'

const useStyle = makeStyles((theme) => {
	return {
		navBox: {
			background: '#1d1d1d',
			border: '2px solid black',
			margin: '1%',
			borderRadius: '30px',
			color: 'white',
			height: '80vh',
		},
		divider: {
			color: 'white',
			backgroundColor: 'white',
		},
	}
})

const theme = createTheme({
	palette: {
		primary: {
			main: '#ffffff',
		},
	},
})

export default function LeftNav() {
	const [selectedLeftTab, setSelectedLeftTab] = React.useState(0)

	const handleChange = (event, newValue) => {
		setSelectedLeftTab(newValue)
	}

	const classes = useStyle()
	return (
		<ThemeProvider theme={theme}>
			<Box>
				<Grid
					container
					rowSpacing={4}
					direction="column"
					alignItems="center"
					className={classes.navBox}
				>
					<Grid item rowSpacing={0}>
						<h1>danceFinder</h1>
					</Grid>
					<Tabs
						value={selectedLeftTab}
						onChange={handleChange}
						orientation="vertical"
					>
						<Tab label="Home" />
						<Tab label="Classes" />
						<Tab label="item three" />
						<Tab label="item four" />
						<Tab label="item five" />
					</Tabs>
				</Grid>
			</Box>
		</ThemeProvider>
	)
}
