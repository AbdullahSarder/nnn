import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from 'next/link';

import Counter from '../features/counter/Counter';
import styles from '../styles/Home.module.css';
import Navbar from '@features/Navbar/Navbar';
import Image from 'next/image';
import EdetiorInterfrace from '@features/CodeEdetior/EdetiorInterfrace';
import Sidenav from '@features/Sidenav/Sidenav';

const MaterialUiDemo = () => {
	return (
		<Container maxWidth="lg">
			<Box
				sx={{
					my: 4,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{/* <Link href="/about" color="secondary">
					Go to the about page
				</Link> */}
				{/* <Navbar /> */}
			</Box>
		</Container>
	);
};

const IndexPage: NextPage = () => {
	return (
		<>
			<MaterialUiDemo />
			<div className={styles.container}>
				<Head>
					<title>Redux Toolkit</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Sidenav></Sidenav>
				<EdetiorInterfrace></EdetiorInterfrace>
			</div>
		</>
	);
};

export default IndexPage;
