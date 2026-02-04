import { IMAGE } from "@/config/image.config";
import UseSearch from "@/features/search/hook/useSearch";
import Image from "next/image";

export function Search() {
	const { search, searchOptions, goToProducts, handleInputChange, searchButton } =
		UseSearch();
	return (
		<form role='search' className="relative">
			<div className='flex relative'>
				<label htmlFor='search' className='flex w-full '>
					<input
						id='search'
						type='text'
						placeholder='Search'
						className='text-14 font-400 leading-160 font-inter pl-11 py-2 border border-description_gray rounded-lg w-full z-50'
						value={search}
						onChange={handleInputChange}
					/>
				</label>

				<button type='submit' onClick={searchButton}>
					<Image
						src={IMAGE.SEARCH.src}
						width={20}
						height={20}
						alt={IMAGE.SEARCH.alt}
						className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 z-50'
					/>
				</button>
			</div>
			{searchOptions.length > 0 && (
				<ul className='absolute flex flex-col w-full bg-gray z-50 rounded-2xl border-1 border-gray py-3 top-7'>
					{searchOptions.map((item) => (
						<li
							key={item.groupId}
							className='font-inter text-16 font-500 leading-160 py-1 pl-4 cursor-pointer'
							onClick={() => goToProducts(item.groupId)}
						>
							{item.label}
						</li>
					))}
				</ul>
			)}
		</form>
	);
}
