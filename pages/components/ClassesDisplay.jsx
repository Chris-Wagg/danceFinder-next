import { Box } from '@mui/material'
import ClassesCards from './ClassesCards'

export default function ClassesDisplay() {
	return (
		<>
			<Box
				display='flex'
				flexDirection='row'
				justifyContent='center'
				flexWrap='wrap'>
				{/*  */}
				<ClassesCards />
			</Box>
		</>
	)
}
