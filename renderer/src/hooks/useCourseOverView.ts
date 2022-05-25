import { OverView } from './../services/courseOverViewServices';
import { useState, useEffect } from 'react';
import courseOverViewServices from 'src/services/courseOverViewServices';

const useCourseOverView = () => {
	const [data, setData] = useState<OverView[]>([]);
	const [isError, setIsError] = useState(false);
	const [isLoding, setIsLoding] = useState(false);
	useEffect(() => {
		setData(courseOverViewServices());
		setIsLoding(false);
		setIsError(false);
	}, []);
	return {
		data,
		isError,
		isLoding,
	};
};

export default useCourseOverView;
