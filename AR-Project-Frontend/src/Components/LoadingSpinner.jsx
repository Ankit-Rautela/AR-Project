const LoadingSpinner = () => {
	return (
		<div className='min-h-screen bg-white flex items-center justify-center relative overflow-hidden'>
			<div className='w-16 h-16 border-4 border-t-4 border-t-gray-500 border-black rounded-full animate-spin'></div>
		</div>
	);
};

export default LoadingSpinner;
