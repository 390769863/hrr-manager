import React from 'react'
import './ui.less'
import {Card,Carousel} from 'antd'

export default class Banner extends React.Component {
    render() {
        return (
            <div>
                <Card title="背景轮播" className="card-wrap">
                    <Carousel autoplay effect="fade">
                        <div><p>antd banner 01</p></div>
                        <div><p>antd banner 02</p></div>
                        <div><p>antd banner 03</p></div>
                        <div><p>antd banner 04</p></div>
                        <div><p>antd banner 05</p></div>
                    </Carousel>
                </Card>
                <Card title="图片轮播" className="card-wrap">
                    <Carousel autoplay className="slider-wrap">
                        <div>
                            <img src="/gallery/5.JPG" width={'100%'} alt=""/>
                        </div>
                        <div>
                            <img src="/gallery/7.JPG" width={'100%'} alt=""/>
                        </div>
                        <div>
                            <img src="/gallery/9.JPG" width={'100%'} alt=""/>
                        </div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}