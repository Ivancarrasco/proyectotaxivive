import React, { Component } from 'react';
import Map from './Map';
import {Form} from './Form/Form';



class Maps extends Component {

	render() {

		return(
			<div style={{ margin: '100px' }}>
					<Form/>
					
					<Map
					google={this.props.google}
					center={{lat:  17.0669, lng: -96.7203}}
					height='300px'
					zoom={15}
				/>

			</div>


		);
	}
}

export default Maps;