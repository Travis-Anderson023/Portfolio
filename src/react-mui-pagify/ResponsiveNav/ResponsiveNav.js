import React, {Component} from 'react';

import './ResponsiveNav.css';
import Grid from '@mui/material/Grid'

export default class ResponsiveNav extends Component {
	render() {
		return (
			<div className="bottom-navigation">
				<Grid container spacing={0} className="justify-center">
					{this.props.children.map((child) => (
						<Grid key={child.key} item xs={4} sm={1}>
							{child}
						</Grid>
					))}
				</Grid>
			</div>
		)
	}
}