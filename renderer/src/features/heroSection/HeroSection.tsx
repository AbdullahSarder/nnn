import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import HeroImage from '../../assets/heroImage.png';
import Image from 'next/image';
import { useStyles } from '../../styles/muiStyles';
const handleBuyNow = async () => {
	console.log('Buy Now ');
};
const handleEnquireNow = async () => {
	console.log('handleEnquireNow ');
};

const HeroSection = () => {
	const classes = useStyles();
	return (
		<>
			<Container className={classes.herosection}>
				<Container maxWidth="lg">
					<Box sx={{ flexGrow: 1 }}>
						<Grid container sx={{ alignItems: 'center' }}>
							<Grid className={classes.description} item xs={6}>
								<Typography
									className={classes.subTitle}
									sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
								>
									SKILLS COURSE - SELF PACED OR INTENSIVE FORMATS
								</Typography>
								<Typography
									className={classes.Title}
									sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
								>
									Full Stack Web <br /> Development
								</Typography>
								<Typography
									className={classes.BodyRevised}
									sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
								>
									Join our immersive bootcamp to get the skills you need to work{' '}
									<br />
									in the tech industry.
								</Typography>
								<Typography
									className={classes.PriceHeading}
									sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
								>
									<Typography sx={{ mr: 3 }}>
										<Typography sx={{ textDecorationLine: 'underline' }}>
											Original Price
										</Typography>
										<Typography
											sx={{
												mr: 5,
												textDecorationLine: 'line-through',
											}}
										>
											$1000 USD
										</Typography>
									</Typography>
									<Typography>
										<Typography sx={{ textDecorationLine: 'underline' }}>
											Sale Price
										</Typography>
										<Typography> $500 USD</Typography>
									</Typography>
								</Typography>
								<Stack direction="row" spacing={5} sx={{ mt: 5 }}>
									<Button
										onClick={() => handleEnquireNow()}
										className={classes.EnquireButton}
										variant="outlined"
									>
										Enquire Now <ArrowForwardIosOutlinedIcon />
									</Button>
									<Button
										onClick={() => handleBuyNow()}
										className={classes.BuyNowButton}
										variant="contained"
									>
										Buy Now <ArrowForwardIosOutlinedIcon />
									</Button>
								</Stack>
							</Grid>
							<Grid className={classes.heroImage} item xs={6}>
								<Image
									src={HeroImage}
									alt="Picture of the author"
									width={865}
									height={682}
								/>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Container>
		</>
	);
};

export default HeroSection;
