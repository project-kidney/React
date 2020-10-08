import React from 'react';

function A(props){
	return(
	<>
		<div className="secondLow">
			<div className="two">
				<img src={props.image1} alt="pic1" className="picc"/>
					<div className="infoo">
						<span className="categoryy">{props.line1}</span>
						<h3 className="titlee"> {props.line2} </h3>
					</div>
			</div>
		</div>
	</>

		);
}

export default A;