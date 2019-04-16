import React from 'react';
import './styles.scss';

export default function Loader({ night }) {
	return (
		<div className={`spinner ${night ? 'night' : ''}`}>
			<div className="double-bounce1" />
			<div className="double-bounce2" />
		</div>
	);
}
