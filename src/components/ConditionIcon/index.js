import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as BrokenClouds } from '../../assets/icons/BrokenClouds.svg';
import { ReactComponent as Clear } from '../../assets/icons/Clear.svg';
import { ReactComponent as FewClouds } from '../../assets/icons/FewClouds.svg';
import { ReactComponent as Mist } from '../../assets/icons/Mist.svg';
import { ReactComponent as Rain } from '../../assets/icons/Rain.svg';
import { ReactComponent as ScatteredClouds } from '../../assets/icons/ScatteredClouds.svg';
import { ReactComponent as ShowerRain } from '../../assets/icons/ShowerRain.svg';
import { ReactComponent as Snow } from '../../assets/icons/Snow.svg';
import { ReactComponent as Thunderstorm } from '../../assets/icons/Thunderstorm.svg';

export default function ConditionIcon({ description, night, className }) {
	const mappedIcons = {
		'clear sky': Clear,
		'few clouds': FewClouds,
		'scattered clouds': ScatteredClouds,
		'broken clouds': BrokenClouds,
		'shower rain': ShowerRain,
		rain: Rain,
		thunderstorm: Thunderstorm,
		snow: Snow,
		mist: Mist,
	};
	const IconName = mappedIcons[description] || mappedIcons['clear sky'];
	return <IconName className={`${night ? styles.night : styles.day} ${className}`} />;
}
