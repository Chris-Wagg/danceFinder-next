;<>
	<Grid item sx={{ alignItems: 'stretch' }}>
		<Button color="primary" variant="outlined" startIcon={<HomeOutlinedIcon />}>
			<Link href="/">Home</Link>
		</Button>
	</Grid>
	<Grid item>
		<Button variant="outlined" startIcon={<AccessTimeIcon />}>
			<Link href="/components/ClassesPage">classes</Link>
			{/* fix this link later to makes sure components doesn't show in the url */}
		</Button>
	</Grid>
	<Grid item>
		<Button variant="outlined" startIcon={<AccessTimeIcon />}>
			Events
		</Button>
	</Grid>
	<Grid item>
		<Button variant="outlined" startIcon={<AccessTimeIcon />}>
			Find media
		</Button>
	</Grid>
	<Grid item>
		<Button variant="outlined" startIcon={<AccessTimeIcon />}>
			Online resources
		</Button>
	</Grid>
	<Grid item sx={{ marginBottom: '50px' }}>
		<Button variant="outlined" startIcon={<AccessTimeIcon />}>
			Account stuff here
		</Button>
	</Grid>
</>
