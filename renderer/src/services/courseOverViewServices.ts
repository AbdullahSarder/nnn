export interface OverView {
	Module: string;
	discription: string;
	title: string;
}
const courseOverViewServices = () => {
	const overViews: OverView[] = [
		{
			Module: 'Module 1',
			discription: 'Introduction ',
			title: 'Create The User Model ',
		},
		{
			Module: 'Module 2',
			discription: 'Express & MongoDB Setup ',
			title: 'Create The User Model ',
		},
		{
			Module: 'Module 3',
			discription: 'User API Routes & JWT Authentication ',
			title: 'Create The User Model',
		},
		{
			Module: 'Module 4',
			discription: 'Getting Started With React & The Frontend ',
			title: 'Create The User Model',
		},
		{
			Module: 'Module 5',
			discription: 'Redux Setup & Alerts ',
			title: 'Create The User Model ',
		},
	];
	return overViews;
};

export default courseOverViewServices;
