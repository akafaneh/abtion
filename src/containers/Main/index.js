import React, { PureComponent } from 'react';
import styles from './styles.module.scss';
import { getWeather } from '../../utils/services';
import Header from '../../components/Header';
import Body from '../../components/Body';

export default class Main extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			night: false,
			loading: 'Getting your location',
			temp: '',
			location: '',
			condition: '',
			message: '',
			error: false,
		};
		this.other = {
			timestamp: 0,
		};
	}
	componentDidMount() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				pos => {
					this.setState({
						loading: 'Getting your weather updates',
					});
					this.getWeatherData(
						pos.coords.latitude,
						pos.coords.longitude,
						pos.timestamp / 1000
					);
				},
				err => {
					this.error(err.message);
				}
			);
		}
	}

	getWeatherData(lat, lon, timestamp) {
		getWeather(lat, lon, res => {
			if (res.cod === 200) {
				const temp = Math.round(res.main.temp);
				const night = !(timestamp > res.sys.sunrise &&  timestamp < res.sys.sunset)
				this.setState({
					loading: false,
					error: false,
					location: res.name,
					temp,
					condition: res.weather[0].description,
					message: this.getMessage(temp),
					night
				});
				return
			}
			this.error('Ops, something went wrong...')
		});
	}

	error(message) {
		this.setState({
			loading: false,
			error: message,
		});
	}

	getMessage(temp) {
		if (temp <= 0) return 'Stay inside. It really really isn’t worth it today!';
		if (temp <= 10)
			return 'Put on a lot of layers and you might be okay... Might!';
		if (temp <= 20) return 'Shouldn’t you be outside and do stuff right now?';
		return 'It’s gettin’ hot in here... Burn burn burn... and so on';
	}

	render() {
		const {
			night,
			loading,
			location,
			temp,
			condition,
			message,
			error,
		} = this.state;
		return (
			<div className={`${styles.main} ${night ? styles.night : ''}`}>
				<Header
					night={night}
					loading={loading}
					temp={temp}
					location={location}
					condition={condition}
					error={error}
				/>
				<Body message={message} loading={loading} error={error} night={night} />
			</div>
		);
	}
}
