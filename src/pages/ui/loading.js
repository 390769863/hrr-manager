import React from 'react'
import './ui.less'
import {Card,Button,Spin,Icon,Alert} from 'antd'

export default class Loading extends React.Component {
    state = {
        loading:true
    }
    handleCloseLoading=(e)=>{
        this.setState({
            loading:!this.state.loading
        })
    }
    render() {

        const icon = <Icon type="loading" style={{fontSize:30}}/>
        const iconLoding = <Icon type="loading"/>
        const onClose = (e) => {
            
        }
        return (
            <div>
                <Card title="spin用法" className="card-wrap">
                    <Spin size='small'/>
                    <Spin size='default'/>
                    <Spin size='large'/>
                    <Spin indicator={icon}/>
                </Card>
                <Card title="局部加载遮罩" className="card-wrap">
                    <Spin indicator={iconLoding} tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎来到何瑞瑞的manager系统"
                            type="success"
                        />
                    </Spin>
                    <Spin tip="loading..." spinning={this.state.loading}>
                        <Alert
                            message="React"
                            description="欢迎来到何瑞瑞的manager系统"
                            type="info"
                            showIcon
                        />
                    </Spin>
                    <Alert
                        message="React"
                        description="欢迎来到何瑞瑞的manager系统"
                        type="warning"
                        closable
                        onClose={onClose}
                        showIcon
                    />
                    <Alert
                        message="欢迎光临何瑞瑞的博客"
                        type="error"
                        closable
                        onClose={onClose}
                        showIcon
                    />
                    <Button onClick={this.handleCloseLoading}>关闭loading</Button>
                </Card>
            </div>
        )
    }
}