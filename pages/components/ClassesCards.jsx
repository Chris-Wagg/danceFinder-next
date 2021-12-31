import React, { useState, useEffect } from 'react'

import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
	styled,
	IconButton,
	Collapse
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ExpandMore = styled((props) => {
	const { expand, ...other } = props
	return <IconButton {...other} />
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest
	})
}))



const classes = {
	classType: ['Jazz', 'Tap', 'HipHop', 'Lyrical', 'Ballet'],
	agesOffered: {
		schoolAge: ['Pre-school', 'Beginner', 'Intermediate', 'Advanced'],
		adultClasses: ['Beginner', 'Intermediate', 'Advanced', 'Professional'],
	},
	openClasses: ['School age', 'Adult']
}

// const classTypeMap = function() {
// 	const map = [...classes.classType]
// 	console.log(map)
// 	for (const item of map) {
// 		return(`${item}, `)
// 	}
// }

// const classTypeArr = function() {
// 	const classArr = [...classes.classType]
// 	for (const [i, el] of classArr.entries()) {
// 	(`${i +1}: ${el}`)
// 	}
// 	return
// }

export default function ClassesCards() {
	const [expanded, setExpanded] = useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}
	return (
		<>
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
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>




						<Typography variant='h5'>Class types offered:</Typography>
						{/* <Typography>{classTypeMap()}</Typography> */}
						{/* <Typography>{classTypeArr()}</Typography> */}
						<Typography>{`${[...classes.classType]}`}</Typography>



						
						<Typography variant='h5'>Levels offered:</Typography>
						<Typography variant='h6'>School age:</Typography>
						<Typography>{`${[...classes.agesOffered.schoolAge]}`}</Typography>
						<Typography>Professional</Typography>
						<Typography variant='h6'>Adult classes:</Typography>
						
						<Typography>Intermediate</Typography>
						<Typography>Advanced</Typography>
						<Typography>Professional</Typography>
						<Typography variant='h6'>Open classes:</Typography>
						<Typography>School age</Typography>
						<Typography>Adult</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</>
	)
}
