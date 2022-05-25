import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	appBar: {
		backgroundColor: '#FDFDFD',
		height: '75px',
	},
	logo: {
		fontSize: '50px',
		color: ' #231F20',
		cursor: 'pointer',
	},
	herosection: {
		backgroundColor: '#FDFDFD',
		margin: '0px',
		paddingTop: '42px',
		maxWidth: '100%',
		paddingBottom: '16px',
	},
	heroImage: {
		maxWidth: '100%',
		paddingTop: '0px',
		paddingBottom: '69px',
	},
	description: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	subTitle: {
		fontSize: '12px',
		lineHeight: '32px',
		width: '327px',
		fontWeight: '400',
		letterSpacing: '0.1px',
	},
	Title: {
		color: '#000000',
		fontWeight: 'bold',
		fontSize: '96px',
		lineHeight: '112px',
		letterSpacing: '-1.5px',
		height: '217px',
		width: '761px',
		justifyContent: 'start',
		alignItems: 'center',
	},
	BodyRevised: {
		width: '485px',
		height: '60px',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '30px',
		letterSpacing: '0.15%!important',
	},
	PriceHeading: {
		height: '30px',
		fontWeight: '500',
		fontSize: '16px',
		lineHeight: '30px',
		letterSpacing: '0.15%!important',
	},
	PriceAmmount: {
		marginTop: '3px',
		fontSize: '14px',
	},
	EnquireButton: {
		width: '216px',
		height: '56px',
	},
	BuyNowButton: {
		width: '216px',
		height: '56px',
		backgroundColor: '#007FFF!important',
	},
	courseOverView: {
		height: 'auto',
		backgroundColor: '#FDFDFD',
		width: '1920px',
		maxWidth: '100%',
		padding: '0px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	courseOverViewTilte: {
		padding: '20px',
	},
	courseAccridon: {
		height: 'auto',
		width: '1920px',
		maxWidth: '100%',
		backgroundColor: '#EEEBF2',
		marginTop: '30px',
		marginButtom: '30px',
		padding: '5px',
	},
});
