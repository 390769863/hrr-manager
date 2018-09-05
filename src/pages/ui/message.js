import React from 'react'
import './ui.less'
import {Card,Button,message} from 'antd'

export default class Message extends React.Component {
    handleShowMessage=(type,txt)=>{
        message[type](txt)
    }
    render() {
        return (
            <div>
                <Card title="全局提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleShowMessage("success","恭喜自己完成了react中message的知识！！")}>success</Button>
                    <Button type="primary" onClick={()=>this.handleShowMessage("warning","但是你还有很多react中的知识不会！！")}>warning</Button>
                    <Button type="primary" onClick={()=>this.handleShowMessage("info","react中的知识有很多！！")}>info</Button>
                    <Button type="primary" onClick={()=>this.handleShowMessage("error","抱歉你react中table的知识还不会哦！！")}>error</Button>
                    <Button type="primary" onClick={()=>this.handleShowMessage("loading","慢慢学习吧！！")}>loading</Button>

                </Card>
            </div>
        )
    }
}