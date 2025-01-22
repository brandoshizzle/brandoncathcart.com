import react from 'react';

const FixedHead = ({ reversed = false, top = '15vh' }) => {
	return (
		<div className={`fixed ${reversed ? '-right-20' : '-left-20'}`} style={{ top }}>
			<img id='headshot' src='/web-head-comp.png' alt='Brandon Cathcart' className={`w-48 h-48 rotate-45`}
				style={{ transform: reversed ? 'scaleX(-1) rotate(45deg)' : '' }} />
		</div>
	)
}

export default FixedHead