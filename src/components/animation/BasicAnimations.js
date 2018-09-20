/**
 * Created by hao.cheng on 2017/5/8.
 */
import React from 'react';
import { Row, Col, Card, Switch } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';

class BasicAnimations extends React.Component {
    state = {
        animated: false,
        animatedOne: -1
    };
    animatedAll = (checked) => {
        checked && this.setState({animated: true});
        !checked && this.setState({animated: false});

    };
    animatedOne = (i) => {
        this.setState({animatedOne: i});
    };
    animatedOneOver = () => {
        this.setState({animatedOne: -1});
    };
    render() {
        const animations = [
            'bounce', 'flash',
        ];
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="动画" second="基础动画" />
                <Row className="mb-m">
                    <a className="mr-s">全部动画(单个动画请移动鼠标)</a>
                    <Switch onChange={this.animatedAll} />
                </Row>
                <Row gutter={14}>
                    {animations.map((v, i) => (
                        <Col className="gutter-row" md={6} key={i}>
                            <div className="gutter-box">
                                <Card
                                    className={`${this.state.animated || (this.state.animatedOne === i) ? 'animated' : ''} ${this.state.animated || (this.state.animatedOne === i) ? 'infinite' : ''} ${v}`}
                                >
                                    <div className="pa-m text-center">
                                        <h3>{v}</h3>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}

export default BasicAnimations;