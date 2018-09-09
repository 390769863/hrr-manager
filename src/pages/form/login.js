import React from 'react'
import {Card,Form,Button,Input,message,Icon,Checkbox,notification} from 'antd'
const FromItem = Form.Item;
class LoginIn extends React.Component {
    handleSubmit=()=>{
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,value)=>{
            if(!err){
                message.success(`${userInfo.userName} 恭喜您通过了本次的学习,当前密码为:${userInfo.passWord}`)
            }
        })
    }
    handleSubmitDown=()=>{
        let userInfoDown = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,value)=>{
            if(!err){
                notification.success({
                    message:`${userInfoDown.userNames}恭喜您完成本次学习`,
                    description:`您的登录初始密码为：${userInfoDown.userPwd}`
                })
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Card title="登录水平表单" className="card-wrap">
                    <Form layout="inline">
                        <FromItem>
                            {
                                getFieldDecorator('userName',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:"用户名不能为空"
                                        },{
                                            pattern:/^[a-zA-Z0-9_-]{4,16}$/,
                                            message:"用户名必须4到16位（字母，数字，下划线，减号）"
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入用户名"/>
                                )
                            }
                        </FromItem>
                        <FromItem>
                            {
                                getFieldDecorator('passWord',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:"密码不能为空"
                                        },{
                                            // max:20,
                                            // message:"请填写6-20位的密码"
                                        },{
                                            pattern:/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{6,20}$/,
                                            message:"请填写6-20位由数字,大写字母,小写字母,至少其中两种组成的密码"
                                        }
                                    ]
                                })(
                                    <Input type="password" placeholder="请输入密码"/>
                                )
                            }

                        </FromItem>
                        <FromItem>
                            <Button type="primary" onClick={()=>this.handleSubmit()}>登陆</Button>
                        </FromItem>
                    </Form>
                </Card>
                <Card title="登录垂直表单" className="card-wrap">
                    <Form layout="horizontal" style={{width:300}}>
                        <FromItem>
                            {
                                getFieldDecorator('userNames', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: "请填写密码"
                                        }, {
                                            min: 5,
                                            max: 10,
                                            message: "用户名需要为5-10位"
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                                )
                            }
                        </FromItem>
                        <FromItem>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'请填写密码'
                                        },{
                                            pattern:new RegExp('^\\w+$','g'),
                                            message:'密码必须以字母或者数字开头'
                                        }

                                    ]
                                })(
                                    <Input prefix={<Icon type="lock"/>} type="password" placeholder="请输入密码"/>
                                )
                            }
                        </FromItem>
                        <FromItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName:'checked',
                                    initialValue:true
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="javascript:;" style={{float:'right'}}>忘记密码</a>
                        </FromItem>
                        <FromItem>
                            <Button type="primary" onClick={()=>this.handleSubmitDown()}>登陆</Button>
                        </FromItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(LoginIn)