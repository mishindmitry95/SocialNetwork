import React, {useState} from "react";
import Styles from './Paginator.module.css'

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
	const pagesCount = Math.ceil(totalItemsCount / pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	const portionCount = Math.ceil(pagesCount / portionSize);
	const [portionNumber, setPortionNumber] = useState(1);
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionPageNumber = portionNumber * portionSize;

	return (
		<div
			className={Styles.PaginatorContainer}
		>
			{
				portionNumber > 1 &&
				<button
					className={Styles.arrow + ' ' + Styles.left}
					onClick={() => { setPortionNumber(portionNumber - 1) }}
				>
					<svg width="10px" height="10px" viewBox="0 0 50 80" >
    					<polyline fill="none" stroke="#285473" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="
						45.63,75.8 0.375,38.087 45.63,0.375 "/>
 					 </svg>
				</button>
			}
			{
				pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map(p => {
					return (
						<span
							className={`${Styles.item} ${currentPage === p ? Styles.selected : ''}`}
							key={p}
							onClick={(e) => {
								onPageChanged(p);
							}}
						>
							{p}
						</span>
					)
				})
			}
			{
				portionCount > portionNumber &&
				<button
					className={Styles.arrow + ' ' + Styles.right}
					onClick={() => { setPortionNumber(portionNumber + 1) }}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="10px"
						 height="10px" viewBox="0 0 50 80" >
    					<polyline fill="none" stroke="#285473" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="
						0.375,0.375 45.63,38.087 0.375,75.8 "/>
  					</svg>
				</button>
			}
		</div>
	);
}

export default Paginator;