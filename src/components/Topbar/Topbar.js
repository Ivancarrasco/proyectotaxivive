import * as React from 'react';
import styles from './Topbar.module.scss';
import { Link } from 'react-router-dom';
import Header from "./Header";

    
export default (class Topbar extends React.PureComponent {
	state = {};

	componentDidMount() {}

	render() {
		return (
			<div className={styles.main}>
		<Header className={styles.header}/>
				<ul className={styles.list}>
				<Link className={styles.item} to="/Home">
						<li className={styles.item}> TAXI VIVE OAXACA</li>
						</Link>
				       /<Link className={styles.item} to="/Ruta">
						<li className={styles.item}>RUTA</li>
				</Link>
				</ul>
				
			</div>	
		);
	}
});
