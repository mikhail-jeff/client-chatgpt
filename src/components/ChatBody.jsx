import React, { useEffect, useRef } from 'react';
import autoAnimate from '@formkit/auto-animate';

const ChatBody = ({ chat }) => {
	const aiStyle = 'bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto';

	const parent = useRef(null);
	const bottomRef = useRef(null);

	// * For Animation
	useEffect(() => {
		parent.current && autoAnimate(parent.current);
	}, [parent]);

	// * For Scrolling Bottom
	useEffect(() => {
		bottomRef.current?.scrollIntoView({
			behavior: 'smooth',
		});
	}, [chat]);

	return (
		<div
			ref={parent}
			className='flex flex-col gap-4'
		>
			{chat.map((message, index) => {
				return (
					<div
						key={index}
						className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-2 max-w-[80%] ${message.sender === 'ai' && aiStyle}`}
					>
						<pre className='whitespace-pre-wrap'>
							<span>{message.message}</span>
						</pre>
					</div>
				);
			})}

			<div
				ref={bottomRef}
				className='h-3'
			></div>
		</div>
	);
};

export default ChatBody;
