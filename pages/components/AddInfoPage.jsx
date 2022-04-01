import React from 'react'
import { useSelector } from 'react-redux'

import HeaderBar from './HeaderBar'

import { Box, Grid, Toolbar, TextField, Button, FormGroup } from '@mui/material'
import { makeStyles, Tabs, Tab } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@mui/material'

import ClassesDisplay from './ClassesDisplay'

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
		rightNav: {
			background: '#1d1d1d',
			border: '2px solid black',
			margin: '1%',
			borderRadius: '30px',
			color: 'white',
			height: '80vh',
		},
		button: {
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

export default function AddInfoPage() {
	// const tabNumber = useSelector((state) => state.tabNum)

	const [selectedLeftTab, setSelectedLeftTab] = React.useState(0)

	const handleChangeLeft = (e, newValueL) => {
		setSelectedLeftTab(newValueL)
	}

	const classes = useStyle()

	return (
		<>
			<ThemeProvider theme={theme}>
				<HeaderBar />
				<Toolbar />
				<Toolbar />
				<Box sx={{ marginLeft: '30px', marginRight: '30px' }}>
					<Grid container direction="row" columnSpacing={5}>
						<Grid item lg={2} md={2} sm={2} sx={{ marginLeft: '0px' }}>
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
										onChange={handleChangeLeft}
										orientation="vertical"
									>
										<Tab label="Add Classes" />
										<Tab label="item two" />
										<Tab label="item three" />
										<Tab label="item four" />
										<Tab label="item five" />
									</Tabs>
								</Grid>
							</Box>
						</Grid>
						<Grid item lg={7} md={7} sm={7}>
							<TabPanel value={selectedLeftTab} index={0}>
								<Box sx={{ display: 'flex', flexDirection: 'column' }}>
									<form>
										<TextField
											onChange={(
												e //crud funciton here
											) => e.target.value}
											id="outlined-basic"
											label="test field"
											variant="outlined"
											color="secondary"
										/>

										<Button variant="contained">Submit</Button>
									</form>
								</Box>
							</TabPanel>
						</Grid>
					</Grid>
				</Box>
			</ThemeProvider>
		</>
	)
}
