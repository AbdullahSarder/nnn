import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/nested_academy_logo.png';

type Inputs = {
	name: string;
	email: string;
};

const useStyles = makeStyles({
	FooterStyle: {
		fontSize: '12px',
		padding: '0px',
	},
	style: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	FooterHeading: {
		fontSize: '24px',
	},
	inputField: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	nameFieldStyle: {
		display: 'flex',
		flexDirection: 'row',
		marginRight: '20px',
		alignItems: 'center',
	},
	emailFieldStyle: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: '16px',
		marginRight: '16px',
	},
	Submit: {
		width: '216px',
		height: '56px',
		backgroundColor: '#007FFF',
	},
});

const Footer = () => {
	const classes = useStyles();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	console.log(watch('name'));
	return (
		<>
			<Container
				maxWidth="lg"
				className={classes.FooterStyle}
				sx={{ marginY: '50px' }}
			>
				<Box className={classes.style}>
					<Typography className={classes.FooterHeading}>
						Stay in the loop !
					</Typography>
					<Typography sx={{ marginY: '10px' }}>
						Sign up and we’ll keep you updated on degree information,
						scholarships and upcoming events.
					</Typography>
					<form onSubmit={() => handleSubmit(onSubmit)}>
						<Box className={classes.inputField}>
							<Typography className={classes.nameFieldStyle}>
								<label>Name </label>
								<TextField {...register('name')} style={{ margin: '2px' }} />
							</Typography>
							<Typography className={classes.emailFieldStyle}>
								<label>Email </label>
								<TextField
									style={{ margin: '2px' }}
									{...register('email', { required: true })}
								/>
								{errors.email && (
									<Typography sx={{ color: '#f91010' }}>
										This field is required
									</Typography>
								)}
							</Typography>
							<Button
								sx={{ margin: '2px', marginX: '10px' }}
								type="submit"
								className={classes.Submit}
								variant="contained"
							>
								Submit
								<ArrowForwardIosOutlinedIcon />
							</Button>
						</Box>
					</form>
				</Box>
			</Container>
			<Container
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: '0px!important',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						padding: '0px',
						alignItems: 'center',
					}}
				>
					<Image alt="Nested accademy" src={Logo} height="24px" width="80px" />
					<Typography sx={{ marginLeft: '10px' }}>Copyright @ 2022</Typography>
					<Typography>All rights reserved</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						padding: '0px',
						alignItems: 'center',
					}}
				>
					<Typography sx={{ margin: '10px' }}>English(English)</Typography>
					<Link href="#">About</Link>
					<Link href="#">Help</Link>
					<Link href="#">Privacy & terms</Link>
				</Box>
			</Container>
		</>
	);
};

export default Footer;
