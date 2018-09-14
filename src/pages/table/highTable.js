import React from 'react'
import {Card,Table,Modal,message,Button,Badge} from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils'

export default class HighTable extends React.Component {
    state={
        dataSource:[]
    }
    request=()=>{
        axios.ajax({
            url:'/hightable/list',
            data:{
                params:{
                    page:1
                }
            }
        }).then((res)=>{
            this.setState({
                dataSource:res.result
            })
        })
    }
    componentWillMount(){
        this.request();
    }
    handleChange=(pagination, filters, sorter)=>{
        this.setState({
            sortOrder:sorter.order
        })
    }
    handleDelete=(item)=>{
        let id = item.id;
        Modal.confirm({
            title:'确认信息',
            content:'您确认要删除这条数据吗？',
            onOk:()=>{
                message.success('删除成功');
                this.request()

            }
        })
    }
    render() {
        let stateConfig = {
            '1':'在校学生',
            '2':'职场小白',
            '3':'公司员工',
            '4':'企业经理',
            '5':'外企海龟'
        }
        let interestConfig = {
            '1':'篮球',
            '2':'足球',
            '3':'排球',
            '4':'唱歌',
            '5':'跳舞',
            '6':'爬山',
            '7':'游泳',
            '8':'弹琴'
        }
        let statesConfig={
            '1':<Badge status='success'  text="在职"/>,
            '2':<Badge status="error" text="离职"/>,
            '3':<Badge status="default" text="请假"/>,
            '4':<Badge status="processing" text="调休"/>,
            '5':<Badge status="warning" text="外勤"/>
        }
        const columns = [
            {
                title:'ID',
                width:80,
                dataIndex:'id'
            },
            {
                title:'用户名',
                width:80,
                dataIndex:'userName'
            },
            {
                title:'性别',
                width:80,
                dataIndex:'sex',
                render(sex){
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title:'年龄',
                width:80,
                dataIndex:'age'
            },
            {
                title:'状态',
                width:80,
                dataIndex:'state',
                render(sta){
                    return stateConfig[sta]
                }
            },
            {
                title:'生日',
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'地址',
                width:150,
                dataIndex:'address'
            }
        ]
        const columns2 = [
            {
                title:'ID',
                width:40,
                align:'center',
                dataIndex:'id'
            },
            {
                title:'用户名',
                width:80,
                dataIndex:'userName'
            },
            {
                title:'性别',
                width:80,
                dataIndex:'sex',
                render(sex){
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title:'年龄',
                width:80,
                dataIndex:'age',
                sorter:(a,b)=>{
                    return a.age - b.age
                },
                sortOrder:this.state.sortOrder
            },
            {
                title:'状态',
                width:80,
                dataIndex:'state',
                render(stat){
                    return statesConfig[stat]
                }
            },
            {
                title:'爱好',
                width:80,
                dataIndex:'interest',
                render(inter){
                    return interestConfig[inter]
                }
            },
            {
                title:'地址',
                width:200,
                dataIndex:'address'
            },
            {
                title:'操作',
                width:80,
                align:'center',
                render:(text,item)=>{
                    return <Button size='small' type="primary" onClick={(item)=>{this.handleDelete(item)}}>删除</Button>
                }
            }
        ]
        return (
            <div>
                <Card title="头部固定" className="card-wrap">
                    <Table
                        columns={columns}
                        bordered={true}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y:240}}
                    />
                </Card>
                <Card title="表格排序" className="card-wrap">
                    <Table
                        columns={columns2}
                        bordered={true}
                        dataSource={this.state.dataSource}
                        pagination={true}
                        onChange={this.handleChange}
                    />
                </Card>
            </div>
        )
    }
}