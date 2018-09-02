import React from 'react';
import { Row,Col } from 'antd';
import './index.less';
import Util from '../../utils/utils';
import axios from '../../axios/index';
export default class Header extends React.Component{
    componentWillMount(){
        this.setState({
            userName:'何瑞瑞'
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherAPIData()

    }
    // 获取百度天气
    getWeatherAPIData(){
        let city = '北京'
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=8GcWPj59cemiXLfwGUToP9FYjrhQORWx'
        }).then((res)=>{
            if (res.status == "success"){
                let weatherData = res.results[0].weather_data[0]
                this.setState({
                    weather:weatherData.weather,
                    weatherPic:weatherData.dayPictureUrl
                })
            }
        })
    }

    render(){
        return(
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.userName}</span>
                        <a href="javascript:;">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="data-time">{this.state.sysTime}</span>
                        <span className="weather-img"><img src={this.state.weatherPic} alt=""/></span>
                        <span className="weather-detail">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        );
    }
}