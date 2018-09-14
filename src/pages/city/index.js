import React from 'react'
import {Card, Table, Button, Modal, Form, Select,message} from 'antd'
import Utils from './../../utils/utils'
import axios from './../../axios/index'


const FormItem = Form.Item
const Option = Select.Option

export default class City extends React.Component {
    state = {
        list: [],
        isShowOpenCity:false
    }
    handleOpenCity=()=>{
        this.setState({
            isShowOpenCity:true
        })
    }
    componentWillMount() {
        this.requestlist()
    }

    requestlist = () => {
        let _this = this;
        axios.ajax({
            url: '/open_city',
            data: {
                params: {
                    page: 1
                }
            }
        }).then((res) => {
            this.setState({
                list: res.result.item_list.map((item, index) => {
                    item.key = index
                    return item
                }),
                pagination: Utils.pagination(res, (current) => {
                    _this.params.page = current
                    _this.requestlist()
                })
            })
        })
    }
    handleSubmit=()=>{
        let cityFormInfo = this.cityForm.props.form.getFieldsValue()
        axios.ajax({
            url:'/city/open',
            data:{
                params:cityFormInfo
            }
        }).then((res)=>{
            if(res.code===0){
                message.success(res.messages)
                this.setState({
                    isShowOpenCity:false
                })
                this.requestlist()
            }
        })
    }
    render() {
        const columns = [
            {
                title: '城市ID',
                dataIndex: 'id'
            },
            {
                title: '城市名称',
                dataIndex: 'name'
            },
            {
                title: '用车模式',
                dataIndex: 'mode',
                render(mode){
                    return mode==1?'停车点':'禁停区';
                }
            },
            {
                title: '运营模式',
                dataIndex: 'op_mode',
                render(opm_ode){
                    return opm_ode == 1?'自营' : '加盟';
                }
            },
            {
                title: '授权加盟商',
                dataIndex: 'franchisee_name'
            },
            {
                title: '城市管理员',
                dataIndex: 'city_admins',
                render(arr) {
                    return arr.map((item) => {
                        return item.user_name
                    }).join(',')
                }
            },
            {
                title: '城市开通时间',
                dataIndex: 'open_time'
            },
            {
                title: '操作时间',
                dataIndex: 'update_time',
                render:Utils.formateDate
            },
            {
                title: '操作人',
                dataIndex: 'sys_user_name'
            }
        ]

        return (
            <div>
                <Card>
                    <FilterForm></FilterForm>
                </Card>
                <Card>
                    <Button type='primary' onClick={this.handleOpenCity}>开通城市</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                </div>
                <Modal
                    title="开通城市"
                    visible={this.state.isShowOpenCity}
                    okText="确定"
                    cancelText='取消'
                    onCancel={()=>{
                        this.setState({
                            isShowOpenCity:false
                        })
                    }}
                    onOk={this.handleSubmit}
                >
                    <OpenCityForm wrappedComponentRef={(inst)=>{this.cityForm = inst}}/>
                </Modal>
            </div>
        )
    }
}

class FilterForm extends React.Component {
    handleSearch=()=>{
        let searchInfo = this.props.form.getFieldsValue()
            console.log(searchInfo)
        }
    render(){
        const {getFieldDecorator} = this.props.form
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                style={{width:120}}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                            </Select>
                        )
                    }

                </FormItem>
                <FormItem label="用车模式">
                    {
                        getFieldDecorator('mode')(
                            <Select
                                style={{width:120}}
                                placeholder="全部"
                            >
                                <Option value="0">全部</Option>
                                <Option value="1">指定停车点模式</Option>
                                <Option value="2">禁停区模式</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="运营模式">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                style={{width:120}}
                                placeholder="全部"
                            >
                                <Option value="0">全部</Option>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="加盟商授权状态">
                    {
                        getFieldDecorator('auth_status')(
                            <Select
                                style={{width:120}}
                                placeholder="全部"
                            >
                                <Option value="0">全部</Option>
                                <Option value="1">已授权</Option>
                                <Option value="2">未授权</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button className="pull-right" type="primary" onClick={()=>this.handleSearch()}>查询</Button>
                    <Button className="pull-right">重置</Button>
                </FormItem>
            </Form>
        )
    }
}

FilterForm = Form.create({})(FilterForm)

class OpenCityForm extends React.Component {
    render() {
        const modalOpenLayout = {
            labelCol:{span:5},
            wrapperCol:{span:12}
        }
        const { getFieldDecorator } = this.props.form
        return (
            <Form layout='horizontal'>
                <FormItem label="选择城市" {...modalOpenLayout}>
                    {
                        getFieldDecorator('city_id',{
                            initialValue:'1'
                        })(
                            <Select>
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                            </Select>
                        )
                    }

                </FormItem>
                <FormItem label="运营模式" {...modalOpenLayout}>
                    {
                        getFieldDecorator('op_mode',{
                            initialValue:'1'
                        })(
                            <Select>
                                <Option value="">全部</Option>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="用车模式" {...modalOpenLayout}>
                    {
                        getFieldDecorator('use_mode',{
                            initialValue:'1'
                        })(
                            <Select>
                                <Option value="">全部</Option>
                                <Option value="1">指定停车点</Option>
                                <Option value="2">禁停区</Option>
                            </Select>
                        )
                    }

                </FormItem>
            </Form>
        )
    }
}

OpenCityForm = Form.create({})(OpenCityForm)