import React from 'react'

import Link from 'next/link'

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

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	)
}

export default function LeftNav() {
	const [selectedLeftTab, setSelectedLeftTab] = React.useState(0)

	const handleChange = (e, newValue) => {
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
						<Tab
							label="Classes"
							onClick={() => dispatch(setLeftTabNum(1))}
							// href="/components/ClassesPage"
						></Tab>
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

// add TabPanels to have the dynamic changing of the components to hopefully fix the issue without needing to mess around with redux
