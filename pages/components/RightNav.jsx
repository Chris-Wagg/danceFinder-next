import { Button, Box, Grid } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

export default function RightNav() {
	return (
		<>
			<Box
				display='flex'
				flexDirection='row'
				justifyContent='space-evenly'
				alignItems='center'
				spacing={3}>
				<Button
					variant='contained'
					startIcon={<AccessTimeIcon />}
					sx={{ margin: '10px' }}>
					my Timetable
				</Button>

				<Button
					variant='contained'
					startIcon={<AccessTimeIcon />}
					sx={{ margin: '10px' }}>
					my Events
				</Button>

				{/* <Button
					variant='contained'
					startIcon={<AccessTimeIcon />}
					sx={{ margin: '10px' }}>
					Messages
				</Button> */}
			</Box>

			<Box>
				<h1>right nav content here in a box test wrap</h1>
			</Box>
		</>
	)
}
