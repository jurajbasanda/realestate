import React, { Component } from 'react'
import axios from 'axios'
import Flatitem from './Flatitem'
import './new.scss'

export default class New extends Component {
	constructor() {
		super()
		this.state = {
			flats: [],
			islLoaded: false,
		}
	}
	componentDidMount() {
		axios
			.get('https://admin.jurajbasanda.com/wp-json/wp/v2/property')
			.then((res) =>
				this.setState({
					flats: res.data,
					islLoaded: true,
				})
			)
			.catch((err) => console.log(err))
	}
	render() {
		const { flats, islLoaded } = this.state
		if (islLoaded) {
			return (
				<>
					<div className='flats-group'>
						{flats.map((flat) => <Flatitem key={flat.id} flat={flat} />)[0]}
						{flats.map((flat) => <Flatitem key={flat.id} flat={flat} />)[1]}
						{flats.map((flat) => <Flatitem key={flat.id} flat={flat} />)[2]}
					</div>
				</>
			)
		} else {
			return (
				<div
					style={{
						width: '100%',
						height: '50vh',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div className='loader'></div>
				</div>
			)
		}
	}
}
