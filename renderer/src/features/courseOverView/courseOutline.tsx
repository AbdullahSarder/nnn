import React, { Fragment } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useCourseOverView from 'src/hooks/useCourseOverView';
import { useStyles } from 'src/styles/muiStyles';
import Box from '@mui/material/Box';
import { OverView } from 'src/services/courseOverViewServices';

const CourseOutLine = () => {
	const { data } = useCourseOverView();
	const classes = useStyles();
	const [openCourseOverView, setOpenCourseOverView] = useState<OverView | null>(
		null
	);

	function handleAccordClick(courseOverView) {
		if (openCourseOverView === courseOverView) setOpenCourseOverView(null);
		if (openCourseOverView !== courseOverView)
			setOpenCourseOverView(courseOverView);
	}

	function generateCourseAccordion(courseOverView: OverView) {
		return (
			<Accordion
				expanded={courseOverView === openCourseOverView}
				onClick={() => handleAccordClick(courseOverView)}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					id="courseOverViewAccordion"
					aria-controls="courseOverViewAccordion-content"
				>
					<Typography sx={{ width: '33%', flexShrink: 0 }}>
						{courseOverView.Module}
					</Typography>
					<Typography sx={{ color: 'text.secondary' }}>
						{courseOverView.title}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>{`${courseOverView.discription} details...`}</AccordionDetails>
			</Accordion>
		);
	}
	return (
		<>
			<Container className={classes.courseOverView}>
				<Typography className={classes.courseOverViewTilte}>
					Course Overview
				</Typography>
				<Box className={classes.courseAccridon}>
					<Container sx={{ padding: '5px', marginY: '30px' }}>
						<Typography>
							{data.map((courseOverView) => (
								<Fragment key={courseOverView.Module}>
									{generateCourseAccordion(courseOverView)}
								</Fragment>
							))}
						</Typography>
					</Container>
				</Box>
			</Container>
		</>
	);
};

export default CourseOutLine;
