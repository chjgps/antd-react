import React, { Component } from 'react';
import { Layout, notification, Icon } from 'antd';
import './style/index.less';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import { receiveData } from './action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Routes from './routes';
const { Content, Footer } = Layout;

class App extends Component {
    state = {
        collapsed: false,
    };

    componentDidMount() {
        const openNotification = () => {
            notification.open({
              message: '博主',
              description: (
                  <div>
                      <p>
                          GitHub地址： <a href="" target="_blank" rel="noopener noreferrer">xxx</a>
                      </p>
                      <p>
                          博客地址： <a href="" target="_blank" rel="noopener noreferrer">xxx</a>
                      </p>
                  </div>
              ),
              icon: <Icon type="smile-circle" style={{ color: 'red' }} />,
              duration: 0,
            });
            localStorage.setItem('isFirst', JSON.stringify(true));
        };
        const isFirst = JSON.parse(localStorage.getItem('isFirst'));
        !isFirst && openNotification();
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {

        console.log("App")
        console.log(this.props)
        console.log(this.props.auth);
        console.log(this.props.responsive);
        console.log("App")
        const { auth, responsive } = this.props;
        console.log(responsive)
        return (
            <Layout>
                <SiderCustom collapsed={this.state.collapsed} />
                <Layout style={{flexDirection: 'column'}}>
                    <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} />
                    <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                        <Routes auth={auth} />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                    React-Admin ©2017 Created by 865470087@qq.com
                    </Footer>
                </Layout>
                
            </Layout>
        );
    }
}


const mapStateToProps = state => {
    console.log("mapStateToProps")
    console.log(state.httpData)
    const { auth = {data: {}}, auth4 = {data: {}},responsive = {data: {}} } = state.httpData;
    return {auth, auth4, responsive};
};

const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators(receiveData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
