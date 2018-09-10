import React from 'react'
import {Card,Table,Modal,message,Button} from 'antd'
import Utils from './../../utils/utils'
import axios from './../../axios/index'
let stateConfig = {
    '1':'在校学生',
    '2':'职场小白',
    '3':'公司员工',
    '4':'企业经理'
}
let interestConfig = {
    '1':'篮球',
    '2':'足球',
    '3':'排球',
    '4':'爬山',
    '5':'游泳',
    '6':'跑步',
    '7':'骑行',
    '8':'唱歌'
}
const columns = [
    {
        title:'ID',
        dataIndex:'id',
        align:'center'
    },
    {
        title:'用户名',
        dataIndex:'userName',
        align:'center'
    },
    {
        title:'性别',
        dataIndex:'sex',
        render(sex){
            return sex == 1 ? '男' : '女'
        }
    },
    {
        title:'状态',
        dataIndex:'state',
        render(state){
            return stateConfig[state]
        }
    },
    {
        title:'爱好',
        dataIndex:'interest',
        render(inter){
            return interestConfig[inter]
        }
    },
    {
        title:'婚姻状态',
        dataIndex:'isMarried',
        render(isMarried){
            return isMarried == 0 ? "已婚" : "未婚"
        }
    },
    {
        title:'生日',
        dataIndex:'birthday'
    },
    {
        title:'地址',
        dataIndex:'address'
    }
]
export default class BasicTable extends React.Component {

    state = {
        dataSource:[]
    }

    request=()=>{
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:1
                },
                isShowLoading:false
            }
        }).then((res)=>{
            if(res.code==0){
                this.setState({
                    dataSource2:res.result,
                    selectedRowKeys:[],
                    selectedRows:null,
                    pagination:Utils.pagination(res,(current)=>{

                    })
                })
            }
        })
    }

    onRowClick =(record,index)=>{
        let selectKey = [index];
        Modal.info({
            title:'选中信息',
            content:`用户名：${record.userName}，用户爱好:${record.interest}`
        })
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:record
        })
    }

    onSelectRowClick=(record,index)=>{
        let selectKeys = [index];
        this.setState({
            selectedRowKeys:selectKeys,
            selectedItem:record
        })
    }

    componentWillMount(){
        const dataSource = [
            {
                key:0,
                id:0,
                userName:'kerlon',
                sex:'1',
                state:'1',
                interest:'2',
                isMarried:'1',
                birthday:'1992-12-04',
                address:'北京丰台怡海花园'
            },
            {
                key:1,
                id:1,
                userName:'kimy',
                sex:'2',
                state:'2',
                interest:'1',
                isMarried:'0',
                birthday:'1999-02-14',
                address:'北京丰台彩虹嘉园'
            }
        ]
        this.setState({
            dataSource,
            columns
        })
        this.request()
    }

    handleDelete=()=>{
        let sleSows = this.state.selectedRows;
        let ids = []
        sleSows.map((item)=>{
            ids.push(item.id)
        })
        Modal.confirm({
            title:'删除提示',
            content:`您确定要删除${ids.join(',')}这些数据吗？`,
            onOk:()=>{
                message.success('删除成功');
                this.request()
            }
        })
    }
    render() {
        const selectedRowKeys = this.state.selectedRowKeys
        const rowSelection ={
            type:'radio',
            selectedRowKeys
        }
        const rowCheckSelection={
            type:'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{

                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return (
            <div>
                <Card title="基础表格" className="card-wrap">
                    <Table
                        bordered={true}
                        columns={this.state.columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    >
                    </Table>
                </Card>
                <Card title="mock数据动态渲染的表格" className="card-wrap">
                    <Table
                        bordered={true}
                        columns={this.state.columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    >
                    </Table>
                </Card>
                <Card title="有单选按钮动态渲染的表格" className="card-wrap">
                    <Table
                        rowSelection={rowSelection}
                        bordered={true}
                        columns={this.state.columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                        onRow={(record,index)=>{
                            return {
                                onClick:()=>{
                                    this.onRowClick(record,index)
                                }
                            }
                        }}
                    >
                    </Table>
                </Card>
                <Card title="复选按钮动态渲染的表格" className="card-wrap">
                    <div style={{paddingBottom:10}}>
                        <Button type='primary' onClick={this.handleDelete} icon="delete">删除</Button>
                    </div>
                    <Table
                        rowSelection={rowCheckSelection}
                        bordered={true}
                        columns={this.state.columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                        onRow={(record,index)=>{
                            return {
                                onClick:()=>{
                                    this.onSelectRowClick(record,index)
                                }
                            }
                        }}
                    >
                    </Table>
                </Card>
                <Card title="表格分页" className="card-wrap">
                    <Table
                        bordered={true}
                        columns={this.state.columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                    >
                    </Table>
                </Card>
            </div>
        )
    }
}