import React from 'react'
import { Button } from 'antd'
import './index.less'
import 'antd/dist/antd.css'
export default class Life extends React.Component{
	state = {
		count:0
	}

	handleAdd=()=>{
		this.setState({
			count:this.state.count - 1
 		})
	}
	handleClick(){
		this.setState({
			count:this.state.count + 1
 		})
	}
	render(){
		return <div className='content'>
			<p>React生命周期介绍</p>
			<Button onClick={this.handleClick.bind(this)}>点击+1</Button>
			<Button onClick={this.handleAdd}>点击-1</Button>
			{/*<button onClick={this.handleClick.bind(this)}></button>*/}
			{/*<button onClick={this.handleAdd}>点击-1</button>*/}
			<p>{this.state.count}</p>
		</div>
	}
}
