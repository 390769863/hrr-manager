import React from 'react'
import {Card,Button,Modal} from 'antd'
import './ui.less'

export default class Modals extends React.Component {
    state = {
        showModals1:false,
        showModals2:false,
        showModals3:false,
        showModals4:false,
    }
    handleOpen = (type) => {
        this.setState({
            [type]:true

        })
    }

    handleConfirm = (type) => {
        Modal[type]({
            title:"确认信息框",
            content:"你学会react了吗？",
            onOk(){

            },
            onCancel(){

            }
        })
    }

    render(){
        return(
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleOpen('showModals1')}>open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModals2')}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModals3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModals4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleConfirm('confirm')}>confirm</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('info')}>info</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('warning')}>warning</Button>
                </Card>
                <Modal
                    title="温馨提示"
                    visible={this.state.showModals1}
                    onCancel={()=>{
                        this.setState({
                            showModals1:false
                        })
                    }}>
                    <p>欢迎学习react课程中的modal组建1</p>
                </Modal>
                <Modal
                    title="温馨提示"
                    visible={this.state.showModals2}
                    okText="没问题"
                    cancelText="算了吧"
                    onCancel={()=>{
                        this.setState({
                            showModals2:false
                        })
                    }}>
                    <p>欢迎学习react课程中的modal组建2</p>
                </Modal>
                <Modal
                    title="温馨提示"
                    style={{top:20,color:'#854524'}}
                    visible={this.state.showModals3}
                    okText="没问题"
                    cancelText="算了吧"
                    onCancel={()=>{
                        this.setState({
                            showModals3:false
                        })
                    }}>
                    <p>欢迎学习react课程中的modal组建3</p>
                </Modal>
                <Modal
                    title="水平垂直居中"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModals4}
                    okText="没问题"
                    cancelText="算了吧"
                    onCancel={()=>{
                        this.setState({
                            showModals4:false
                        })
                    }}>
                    <p>欢迎学习react课程中的modal组建2</p>
                </Modal>
            </div>
        )
    }
}