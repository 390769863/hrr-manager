import React from 'react'
import './ui.less'
import {Card,message,Icon,Tabs} from 'antd'
const TabPane = Tabs.TabPane
export default class Tab extends React.Component {
    newTabIndex = 0;
    handleCallback=(key)=>{
        message.info('Hi,您选择了'+key)
    }
    componentWillMount(){
        const panesList = [
            {
                key:"1",
                title:"新闻",
                content:"我是新闻内容"
            },
            {
                key:"2",
                title:"钓鱼",
                content:"我是钓鱼内容"
            },
            {
                key:"3",
                title:"游戏",
                content:"我是游戏内容"
            }
        ]
        this.setState({
            panes:panesList,
            activeKey:panesList[0].key
        })
    }
    handleOnChange=(activeKey)=> {
        this.setState({
            activeKey
        })
    }
    handleOnEdit = (targetKey, action)=>{
        this[action](targetKey);
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }
    render() {
        return (
            <div>
                <Card title="tabs页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="新闻" key="1">欢迎来到新闻页面！我会给你很大的惊喜哦！</TabPane>
                        <TabPane tab="体育" key="2">欢迎来到体育页面！我会给你很大的惊喜哦！</TabPane>
                        <TabPane tab="实时" key="3">欢迎来到实时页面！我会给你很大的惊喜哦！</TabPane>
                        <TabPane tab="汽车" key="4">欢迎来到汽车页面！我会给你很大的惊喜哦！</TabPane>
                        <TabPane tab="游戏" key="5">欢迎来到游戏页面！我会给你很大的惊喜哦！</TabPane>
                    </Tabs>
                </Card>
                <Card title="tabs带图标的页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="plus"/>新闻</span>} key="1">欢迎来到新闻页面！我会给你很大的惊喜哦！</TabPane>
                        <TabPane tab={<span><Icon type="edit"/>体育</span>} key="2">欢迎来到体育页面！我会给你很大的惊喜哦！</TabPane>
                        <TabPane tab={<span><Icon type="delete"/>实时</span>} key="3">欢迎来到实时页面！我会给你很大的惊喜哦！</TabPane>
                        <TabPane tab={<span><Icon type="appstore"/>汽车</span>} key="4">欢迎来到汽车页面！我会给你很大的惊喜哦！</TabPane>
                        <TabPane tab={<span><Icon type="tag"/>游戏</span>} key="5">欢迎来到游戏页面！我会给你很大的惊喜哦！</TabPane>
                    </Tabs>
                </Card>
                <Card title="tabs带图标的页签" className="card-wrap">
                    <Tabs

                        activeKey={this.state.activeKey}
                        onChange={this.handleOnChange}
                        type="editable-card"
                        onEdit={this.handleOnEdit}
                    >
                        {
                            this.state.panes.map((pane)=>{
                                return <TabPane
                                            tab={pane.title}
                                            key={pane.key}
                                            closable={pane.closable}
                                        />
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}