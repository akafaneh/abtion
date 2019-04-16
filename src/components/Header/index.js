import React, { Fragment } from 'react';
import styles from './styles.module.scss';
import ConditionIcon from '../ConditionIcon';
import Loader from '../Loader';

export default function Header({
	night,
	temp,
	location,
	condition,
	loading,
	error,
}) {
	return (
		<div className={`${styles.header} ${night ? styles.night : ''}`}>
			{!loading && !error && (
				<Fragment>
					<div className={styles.location}>{location}</div>
					<div className={styles.weather}>
						<ConditionIcon
							night={night}
							description={condition}
							className={styles.condtion}
						/>
						<div className={styles.temp}>{temp}°</div>
					</div>
				</Fragment>
			)}
			{loading && <Loader night={night} />}
		</div>
	);
}
