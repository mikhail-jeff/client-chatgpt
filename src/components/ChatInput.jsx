import React, { useState } from 'react';

const ChatInput = ({ sendMessage, loading }) => {
	const [value, setValue] = useState('');

	const handleSubmit = () => {
		if (value === '') return;
		sendMessage({
			sender: 'user',
			message: value,
		});
		setValue('');
	};

	return (
		<div className='w-full bg-white bg-opacity-10 max-h-40 rounded-lg py-4 px-4 overflow-auto relative'>
			{loading ? (
				<img
					src='../loader.gif'
					alt='loader'
					className='w-8 m-auto'
				/>
			) : (
				<>
					<textarea
						onKeyDown={(e) => {
							e.keyCode === 13 && e.shiftKey === false && handleSubmit();
						}}
						rows={1}
						className='border-0 bg-transparent outline-none w-11/12 placeholder-gray-500'
						type='text'
						value={value}
						onChange={(e) => setValue(e.target.value)}
						placeholder='Say something...'
					/>
					<img
						width={20}
						className='absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125'
						src='../send.png'
						alt='send-button'
						onClick={handleSubmit}
					/>
				</>
			)}
		</div>
	);
};

export default ChatInput;
