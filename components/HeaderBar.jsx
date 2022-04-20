import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Button,
	IconButton,
	createTheme,
	ThemeProvider,
} from '@mui/material'

const theme = createTheme({
	palette: {
		primary: {
			main: '#090909',
		},
	},
})

const drawerWidth = 240

export default function HeaderBar() {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="fixed" elevation={0} color="primary">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							aria-label="menu"
							sx={{ mr: 2, color: 'white' }}
						></IconButton>
						<Typography
							variant="h2"
							component="div"
							sx={{
								flexGrow: 1,
								cursor: 'pointer',
								paddingTop: '20px',
							}}
						>
							danceFinder
						</Typography>
						<Button color="inherit">Login</Button>
						<Button color="inherit" href="./components/AddInfoPage">
							Add studio
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</ThemeProvider>
	)
}
