import React from 'react'

export default class Child extends React.Component{
	state = {
		count:0
	}
	render(){
		return <div>
			<p>{this.props.name}</p>
		</div>
	}
}
