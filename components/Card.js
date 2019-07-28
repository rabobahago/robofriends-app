import React from 'react';

const Card = ({ name, email, id}) => (<div className ='tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
						<img alt ='robots' src ={`https://www.robohash.org/${id}? 200x200`}/>
						<div>
							<h3>{name}</h3>
							<p>{email}</p>
						</div>
				   </div>
				   )

export default Card;