import React from 'react'
import './ui.less'
import {Card,Button,Radio} from 'antd'

export default class Buttons extends React.Component {
    state = {
        loading:true,
        size:'default'
    }
    handleCloseLoading=()=>{
        this.setState({
            loading:false
        })
    }
    handleChange=(e)=>{
        this.setState({
            size:e.target.value
        })
    }
    render() {
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">Heruirui</Button>
                    <Button type="default">Heruirui</Button>
                    <Button type="dashed">Heruirui</Button>
                    <Button type="danger">Heruirui</Button>
                    <Button disabled>Heruirui</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title="loading按钮" className="card-wrap">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button type="default" loading={this.state.loading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组" className="card-wrap">
                    <Button.Group>
                        <Button type="primary" icon="left" className="margin-right-none">返回</Button>
                        <Button type="primary" icon="right">前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button icon="plus" type="primary" size={this.state.size}>创建</Button>
                    <Button icon="edit" type="dashed" size={this.state.size}>编辑</Button>
                    <Button icon="delete" type="danger" size={this.state.size}>删除</Button>
                </Card>
            </div>
        )
    }
}