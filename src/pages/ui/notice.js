import React from 'react'
import './ui.less'
import { Card,Button,notification} from 'antd'

export default class Notice extends React.Component {
    handleOpenNotification=(type,deriction)=>{
        if(deriction){
            notification.config({
                placement:deriction
            })
        }
        notification[type]({
            message:'马上发工资了！',
            description:'本月实际考勤22天，应发工资50000元~'
        })
    }
    render() {
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleOpenNotification('success')}>打开通知提醒</Button>
                    <Button type="primary" onClick={()=>this.handleOpenNotification('info')}>打开通知提醒</Button>
                    <Button type="primary" onClick={()=>this.handleOpenNotification('warning')}>打开通知提醒</Button>
                    <Button type="primary" onClick={()=>this.handleOpenNotification('error')}>打开通知提醒</Button>
                </Card>
               <Card title="通知提醒框" className="card-wrap">
                   <Button type="primary" onClick={()=>this.handleOpenNotification('success','topLeft')}>左上通知提醒</Button>
                   <Button type="primary" onClick={()=>this.handleOpenNotification('info','topRight')}>右上通知提醒</Button>
                   <Button type="primary" onClick={()=>this.handleOpenNotification('warning','bottomLeft')}>左下通知提醒</Button>
                   <Button type="primary" onClick={()=>this.handleOpenNotification('error','bottomRight')}>右下通知提醒</Button>
               </Card>
            </div>
        )
    }
}