interface Props {
    message: string;
    onClose: () => void;
}

export function ErrorToast({message, onClose}: Props) {
  return (
		<div className='fixed top-5 right-5 bg-red-500 text-white px-4 py-2 rounded shadow-lg animate-fade-in'>
			<div className='flex items-center justify-between'>
				<span>{message}</span>
				<button onClick={onClose} className='ml-3 font-bold'>
					×
				</button>
			</div>
		</div>
	);
}