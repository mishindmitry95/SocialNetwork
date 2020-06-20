import React from "react";
import './Preloader.css'

type TPreloaderProps = {}

const Preloader: React.FC<TPreloaderProps> = () => {
	return (
		<div className='preloader-container'>
			<div className="lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export default Preloader;