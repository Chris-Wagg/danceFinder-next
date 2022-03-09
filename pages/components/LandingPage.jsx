import { Box, Grid, Toolbar } from '@mui/material'
import { useSelector } from 'react-redux'

import LeftNav from './LeftNav'
import CentralNav from './CentralNav'
import RightNav from './RightNav'
import HeaderBar from './HeaderBar'
import ClassesDisplay from './ClassesPage'

export default function LandingPage() {
	const tabNum = useSelector((state) => state.tabNum)
	console.log(tabNum)

	return (
		<>
			<HeaderBar />
			<Toolbar />
			<Toolbar />
			<Box sx={{ marginLeft: '30px', marginRight: '30px' }}>
				<Grid container direction="row" columnSpacing={5}>
					<Grid item lg={2} md={2} sm={2} sx={{ marginLeft: '0px' }}>
						<LeftNav />
					</Grid>
					<Grid item lg={7} md={7} sm={7}>
						{tabNum === 0 && <CentralNav />}
					</Grid>
					<Grid item lg={3} md={3} sm={3}>
						<RightNav />
					</Grid>
				</Grid>
			</Box>
		</>
	)
}
