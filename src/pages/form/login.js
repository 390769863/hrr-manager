import React from 'react'
import {Card,Form,Button,Input} from 'antd'
const FromItem = Form.Item;
export default class LoginIn extends React.Component {
    render(){
        return(
            <div>
                <Card title="登录水平表单">
                    <Form layout="inline">
                        <FromItem>
                            <Input placeholder="请输入用户名"/>
                        </FromItem>
                        <FromItem>
                            <Input placeholder="请输入密码"/>
                        </FromItem>
                        <FromItem>
                            <Button type="primary">登陆</Button>
                        </FromItem>
                    </Form>
                </Card>
                <Card title="登录垂直表单">
                    <Form layout="horizontal" style={{width:300}}>
                        <FromItem>
                            <Input placeholder="请输入用户名"/>
                        </FromItem>
                        <FromItem>
                            <Input placeholder="请输入密码"/>
                        </FromItem>
                        <FromItem>
                            <Button type="primary">登陆</Button>
                        </FromItem>
                    </Form>
                </Card>
            </div>
        )
    }
}