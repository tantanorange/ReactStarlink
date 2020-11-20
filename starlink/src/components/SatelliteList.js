import React, {Component} from 'react';
import { List, Button, Avatar, Checkbox, Spin } from 'antd';
import satellite from"../assets/images/satellite.svg";

class SatelliteList extends Component {
    render() {
        const satList = this.props.satInfo ? this.props.satInfo.above : [];
        const { isLoad } = this.props;

        return (
            <div className="sat-list-box">
                <Button className="sat-list-btn" type="primary" size="large">Track on the map</Button>
                <hr/>
                {
                    isLoad ?
                        <div className="spin-box">
                            <Spin tip="Loading..." size="large" />
                        </div>
                        :
                        <List
                            className={"sat-list"}
                            itemLayout={"horizontal"}
                            size={"small"}
                            dataSource={satList}
                            renderItem={item => (
                                <List.Item
                                    action={[<Checkbox dataInfo={item} onChange={this.onChange} />]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar size={50} src={satellite}/>}
                                        title={<p>{ item.satname }</p>}
                                        description={`Launch Date: ${item.launchDate}`}
                                    />

                                </List.Item>
                            )}
                        />
                }
            </div>
        );
    }
}

export default SatelliteList;