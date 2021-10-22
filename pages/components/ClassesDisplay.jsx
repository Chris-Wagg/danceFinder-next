import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography
} from '@mui/material'

export default function ClassesDisplay() {
	return (
		<>
			<Box
				display='flex'
				flexDirection='row'
				justifyContent='center'
				flexWrap='wrap'>
				<Card lg={4} sx={{ margin: '20px', minWidth: '300px' }}>
					<CardMedia component='img' height='140' image='#' alt='studio logo' />
					<CardContent>
						<Typography gutterbloom variant='h3'>
							Studio Name
						</Typography>
						<Typography variant='h5'>this is studio information</Typography>
					</CardContent>
					<CardActions>
						<Button size='small'>Go to website</Button>
					</CardActions>
				</Card>

				<Card lg={4} sx={{ margin: '20px', minWidth: '300px' }}>
					<CardMedia component='img' height='140' image='#' alt='studio logo' />
					<CardContent>
						<Typography gutterbloom variant='h3'>
							Studio Name
						</Typography>
						<Typography variant='h5'>this is studio information</Typography>
					</CardContent>
					<CardActions>
						<Button size='small'>Go to website</Button>
					</CardActions>
				</Card>

				<Card lg={4} sx={{ margin: '20px', minWidth: '300px' }}>
					<CardMedia component='img' height='140' image='#' alt='studio logo' />
					<CardContent>
						<Typography gutterbloom variant='h3'>
							Studio Name
						</Typography>
						<Typography variant='h5'>this is studio information</Typography>
					</CardContent>
					<CardActions>
						<Button size='small'>Go to website</Button>
					</CardActions>
				</Card>
				<Card lg={4} sx={{ margin: '20px', minWidth: '300px' }}>
					<CardMedia component='img' height='140' image='#' alt='studio logo' />
					<CardContent>
						<Typography gutterbloom variant='h3'>
							Studio Name
						</Typography>
						<Typography variant='h5'>this is studio information</Typography>
					</CardContent>
					<CardActions>
						<Button size='small'>Go to website</Button>
					</CardActions>
				</Card>
				<Card lg={4} sx={{ margin: '20px', minWidth: '300px' }}>
					<CardMedia component='img' height='140' image='#' alt='studio logo' />
					<CardContent>
						<Typography gutterbloom variant='h3'>
							Studio Name
						</Typography>
						<Typography variant='h5'>this is studio information</Typography>
					</CardContent>
					<CardActions>
						<Button size='small'>Go to website</Button>
					</CardActions>
				</Card>
			</Box>
		</>
	)
}
