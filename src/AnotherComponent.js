import React from 'react';
import { Button, Tabs, Input, Row , Col} from "antd";
import UsersList from "./UsersList";
import {withRouter} from "react-router-dom";

const {TabPane} = Tabs;

class AnotherComponent extends React.Component {

    componentDidMount() {
        this.props.handleFetchPosts('posts');
    }
    handleChangeTab = (key) => {
        //console.log(key);
        this.props.history.push(`/${key}`)
        this.props.handleFetchPosts(key)
    };

    render() {
        console.log("this.props", this.props)
        const {dataFetch} = this.props;

        return (
            <div>
                <Row>
                    <Col offset={8} md={8}>
                        <Tabs defaultActiveKey="1" onChange={this.handleChangeTab}>
                            <TabPane tab="Tab 1" key="posts">
                                {this.props.dataPosts.map((v) => {
                                    return (
                                        <li>{v.posts}</li>
                                    );
                                })}
                            </TabPane>
                            <TabPane tab="Tab 2" key="users">
                                {this.props.dataPosts.map((v) => {
                                    return (
                                        <li>{v.name}</li>
                                    );
                                })}
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>

                {/* <UsersList
                {...this.props}
                ></UsersList>
                <Button
                    onClick={this.props.handleDecrementNumber}
                    className="coba"
                    type="primary">
                    Tambah
                 </Button>

                <Button
                    onClick={this.props.handleIncrementNumber}
                    className="coba"
                    type="primary">
                    Kurang
                </Button>

                <Button 
                onClick={this.props.handleFetchUsers} 
                className="coba" 
                type="primary">
                    Fetch Users
                </Button>


                {this.props.number} */}
            </div>
            
        );
    }
}

export default withRouter(AnotherComponent);