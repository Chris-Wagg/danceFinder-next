import React from 'react'

import { Box, Grid } from '@mui/material'
import { makeStyles, Tabs, Tab } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import { setLeftTabNum } from '../redux/tabNum'

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

	const dispatch = useDispatch() // useDispatch will send data to the store (dispatch actions)

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
						<Tab label="Home" onClick={() => dispatch(setLeftTabNum(0))} />
						<Tab label="Classes" onClick={() => dispatch(setLeftTabNum(1))} />
						<Tab
							label="item three"
							onClick={() => dispatch(setLeftTabNum(2))}
						/>
						<Tab label="item four" onClick={() => dispatch(setLeftTabNum(3))} />
						<Tab label="item five" onClick={() => dispatch(setLeftTabNum(4))} />
					</Tabs>
				</Grid>
			</Box>
		</ThemeProvider>
	)
}
