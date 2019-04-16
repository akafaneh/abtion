import React, { Fragment } from 'react';
import styles from './styles.module.scss';

export default function Body({ message, loading, night, error }) {
	return (
		<div className={`${styles.body} ${night ? styles.night : ''}`}>
			{(!loading && !error) && (
				<Fragment>
					<b className={styles.today}>today</b>
					<b className={styles.message}>{message}</b>
				</Fragment>
			)}
			{loading && (
				<Fragment>
					<b className={`${styles.message} ${styles.loading}`}>{loading}</b>
				</Fragment>
			)}
			{error && (
				<Fragment>
					<b className={`${styles.message} ${styles.error}`}>{error}</b>
				</Fragment>
			)}
		</div>
	);
}
