import { Grid, Box } from '@mui/material'
// import { TestInfo } from '@prisma/client'

export default function CentralNav(props) {
	// const testInfo = props.TestInfo
	return (
		<>
			<Grid container>
				<Grid item lg={12}>
					<Box
						display="flex"
						alignItems="center"
						justifyContent="center"
						sx={{ border: '2px solid blue' }}
					>
						<h1> {props.testInfo.testTitle}</h1>
					</Box>
					<Grid item lg={12}>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="center"
							sx={{ border: '2px solid blue' }}
						>
							<h1> {props.testInfo.testContent} </h1>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}
