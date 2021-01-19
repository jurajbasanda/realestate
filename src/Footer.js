import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
export default function Footer() {
	const getDate = new Date()
	return (
		<footer>
			<div className='social-networks'>
				<i className='im im-facebook'></i>
				<i className='im im-linkedin'></i>
				<i className='im im-instagram'></i>
			</div>
			<ul className='footer-cond'>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
				<li>FAQ's</li>
				<li>Terms and Condidtions</li>
			</ul>
			<div className='copy'>
				<a href='http://jurajbasanda.com'>
					© {getDate.getFullYear()}, Made by Juraj Basanda
				</a>{' '}
			</div>
		</footer>
	)
}
