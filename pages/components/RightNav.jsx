import React from 'react'

import { Box, Grid } from '@mui/material'
import { makeStyles, Tabs, Tab } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@mui/material'

import Planner from './Planner'

const useStyle = makeStyles((theme) => {
	return {
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
		typography: {
			h1: {
				fontSize: [18],
			},
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

export default function RightNav() {
	const [selectedTab, setSelectedTab] = React.useState(0)

	const handleChange = (event, newValue) => {
		setSelectedTab(newValue)
	}

	const classes = useStyle()
	return (
		<ThemeProvider theme={theme}>
			<>
				<Box className={classes.rightNav}>
					<Grid
						container
						direction="row"
						justifyContent="center"
						columnSpacing={3}
					>
						<Grid item>
							<Tabs value={selectedTab} onChange={handleChange}>
								<Tab label="Item One">{/*  */}</Tab>
								<Tab label="Item Two" />
							</Tabs>
							<TabPanel value={selectedTab} index={0}>
								<Planner />
							</TabPanel>
						</Grid>
					</Grid>
				</Box>
			</>
		</ThemeProvider>
	)
}
