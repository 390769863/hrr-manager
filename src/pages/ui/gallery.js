import React from 'react'
import './ui.less'
import {Card,Row,Col,Modal} from 'antd'

export default class Gallery extends React.Component {
    state={
        visible:false
    }
    openImg=(imgSrc,txt)=>{
        this.setState({
            visible:true,
            imgTxt:txt,
            currentImg:'/gallery/'+imgSrc
        })
    }
    render() {
        const imgs = [
            ['1.JPG','2.JPG','3.JPG','4.JPG'],
            ['5.JPG','6.JPG','7.JPG','8.JPG'],
            ['9.JPG','10.JPG','11.JPG','12.JPG'],
            ['13.JPG','14.JPG','1.JPG','2.JPG'],
            ['7.JPG','8.JPG','9.JPG','10.JPG']
        ]
        const imgList = imgs.map((list)=>{
            return list.map((item)=>{
                return <Card
                            cover={<img src={'/gallery/'+item}/>}
                            onClick={()=>this.openImg(item,'结婚照')}
                            key={item}
                            hoverable
                        >
                            <Card.Meta
                                title="何瑞瑞结婚合影"
                                description="美好的回忆总是很多~我们都要好好珍惜！"
                            />
                        </Card>
            })
        })
        return (
            <div className="card-wrap">
                <Row gutter={10}>
                    <Col md={6}>
                        {imgList[0]}
                    </Col>
                    <Col md={6}>
                        {imgList[1]}
                    </Col>
                    <Col md={6}>
                        {imgList[2]}
                    </Col>
                    <Col md={6}>
                        {imgList[3]}
                    </Col>
                </Row>
                <Modal
                    width={'50%'}
                    title="结婚照片"
                    visible={this.state.visible}
                    onCancel={()=>{
                        this.setState({
                            visible:false
                        })
                    }}
                    footer={null}
                >
                    {<img src={this.state.currentImg} alt={this.state.imgTxt} style={{width:'100%'}}/>}
                </Modal>
            </div>
        )
    }
}