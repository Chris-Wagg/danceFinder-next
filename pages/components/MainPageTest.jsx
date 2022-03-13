import React from 'react'
import { Box, Grid, Toolbar } from '@mui/material'
import { useSelector } from 'react-redux'

import HeaderBar from './HeaderBar'

import { makeStyles, Tabs, Tab } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@mui/material'

import Planner from './Planner'
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

export default function MainPageTest() {
	const tabNumber = useSelector((state) => state.tabNum)
	console.log(tabNumber)

	const [selectedRightTab, setSelectedRightTab] = React.useState(0)
	const [selectedLeftTab, setSelectedLeftTab] = React.useState(0)

	const handleChangeRight = (e, newValueR) => {
		setSelectedRightTab(newValueR)
	}
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
										<Tab label="Home" />
										<Tab label="Classes" />
										<Tab label="item three" />
										<Tab label="item four" />
										<Tab label="item five" />
									</Tabs>
								</Grid>
							</Box>
						</Grid>
						<Grid item lg={7} md={7} sm={7}>
							<TabPanel value={selectedLeftTab} index={0}>
								<Grid container>
									<Grid item lg={12}>
										<TabPanel value={selectedLeftTab} index={0}>
											<Box
												display="flex"
												alignItems="center"
												justifyContent="center"
												sx={{ border: '2px solid blue' }}
											>
												<h1> this is the feed nav</h1>
											</Box>
										</TabPanel>
										<Grid item lg={12}>
											<Box
												display="flex"
												alignItems="center"
												justifyContent="center"
												sx={{ border: '2px solid blue' }}
											>
												<h1> feed contents </h1>
											</Box>
										</Grid>
									</Grid>
								</Grid>
							</TabPanel>
							<TabPanel value={selectedLeftTab} index={1}>
								<ClassesDisplay />
							</TabPanel>
						</Grid>
						<Grid item lg={3} md={3} sm={3}>
							<Box className={classes.rightNav}>
								<Grid
									container
									direction="row"
									justifyContent="center"
									columnSpacing={3}
								>
									<Grid item>
										<Tabs value={selectedRightTab} onChange={handleChangeRight}>
											<Tab label="Item One" />
											<Tab label="Item Two" />
										</Tabs>
										<TabPanel value={selectedRightTab} index={0}>
											<Planner />
										</TabPanel>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</ThemeProvider>
		</>
	)
}
