import React from 'react'
import {Card,Form,Checkbox,Radio,Switch,Input,DatePicker,TimePicker,Select,Upload,Icon,message,InputNumber,Button} from 'antd'
import moment from 'moment'
import 'moment/locale/zh-cn';
import locale from 'antd/lib/date-picker/locale/zh_CN';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

class FormRegister extends React.Component {
    state = {}


    handleSubmitReg=()=>{
        let formInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,option)=>{
            if(!err){
                message.info('数据详情请见控制台！')
                console.log(JSON.stringify(formInfo))
            }
        })

    }

    getBase64=(img, callback)=>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg:imageUrl,
                loading: false,
            }));
        }
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol:{
                xs:{ span:24 },
                sm:{ span:6 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 }
            }
        }
        const offSetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form>
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userName',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:"用户名不能为空"
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入用户名"/>
                                )
                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('userPwd',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:"密码不能为空"
                                        }
                                    ]
                                })(
                                    <Input type="password" placeholder="请输入用密码"/>
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex',{
                                    initialValue:'1'
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age',{
                                    initialValue:'18'
                                })(
                                    <InputNumber/>
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state',{
                                    initialValue:'2'
                                })(
                                    <Select>
                                        <Option value="1">在校学生</Option>
                                        <Option value="2">职场小白</Option>
                                        <Option value="3">公司员工</Option>
                                        <Option value="4">企业经理</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: []
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">游泳</Option>
                                        <Option value="2">跑步</Option>
                                        <Option value="3">足球</Option>
                                        <Option value="4">篮球</Option>
                                        <Option value="5">唱歌</Option>
                                        <Option value="6">跳舞</Option>
                                        <Option value="7">爬山</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName:'checked',
                                    initialValue: true
                                })(
                                    <Switch/>
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue:null
                                })(
                                    <DatePicker
                                        showTime
                                        format={'YYYY/MM/DD'}
                                        locale={locale}
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('adress', {
                                    initialValue:''
                                })(
                                    <TextArea
                                        placehoder="请输入详细的联系地址"
                                        autosize={{
                                            minRows:3,
                                            maxRows:6
                                        }}
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="早起" {...formItemLayout}>
                            {
                                getFieldDecorator('morningTime')(
                                    <TimePicker
                                        placeholder="请选择时间"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                        listType="picture-card"
                                        showUploadList={false}
                                        onChange={this.handleChange}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                    >
                                        {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus" />}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offSetLayout}>
                            {
                                getFieldDecorator('readTxt',{
                                    valuePropName:'checked',
                                    initialValue:true
                                })(
                                    <Checkbox>我已阅读过<a href="#">何瑞瑞协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offSetLayout}>
                            <Button type="primary" onClick={this.handleSubmitReg}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormRegister)