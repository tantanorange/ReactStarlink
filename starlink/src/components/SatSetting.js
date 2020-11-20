import React, {Component} from 'react';
import {Form, Button, InputNumber} from "antd";

class SatSettingForm extends Component {
    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 11 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 13 }
            }
        };

        return (
            <Form {...formItemLayout} className="sat-setting" onSubmit={this.showSatellite}>
                <Form.Item label={"Longitude(degrees)"}>
                    {
                        getFieldDecorator("longitude", {
                            rules: [{
                                required: true,
                                message: "You have to input a longitude"
                            }]
                        })(<InputNumber min={-180} max={180} syle={{width: "100%"}}
                                       placeholder={"Please input Longitude"} />)

                    }
                </Form.Item>

                <Form.Item label="Latitude(degrees)">
                    {
                        getFieldDecorator("latitude", {
                            rules: [{
                                required: true,
                                message: "You have to input a latitude"
                            }]
                            })(<InputNumber min={-90} max={90} syle={{width: "100%"}}
                                            placeholder={"Please input Latitude"}  />)
                    }
                </Form.Item>

                <Form.Item label="Elevation(meters)">
                    {
                        getFieldDecorator("elevation", {
                            rules: [{
                                required: true,
                                message: "You have to input a elevation"
                            }]
                            })(<InputNumber min={-413} max={8850} syle={{width: "100%"}}
                                            placeholder={"Please input Elevation"}  />)
                    }
                </Form.Item>

                <Form.Item label="Altitude(degrees)">
                    {
                        getFieldDecorator("altitude", {
                            rules: [{
                                required: true,
                                message: "You have to input an altitude"
                            }]
                            })(<InputNumber min={0} max={90} syle={{width: "100%"}}
                                            placeholder={"Please input Altitude"}  />)
                    }
                </Form.Item>

                <Form.Item label="Duration(seconds)">
                    {
                        getFieldDecorator("duration", {
                            rules: [{
                                required: true,
                                message: "You have to input a duration"
                            }]
                            })(<InputNumber min={0} max={90} syle={{width: "100%"}}
                                            placeholder={"Please input Latitude"}  />)
                    }
                </Form.Item>

                <Form.Item classname="show-nearby">
                    <Button type="primary" htmlType="submit" style={{textAlign: "center"}}>
                        Find Nearby Satellites
                    </Button>

                </Form.Item>

            </Form>
        );
    }

    showSatellite = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onShow(values);
            }
        });
    }
}

const SatSetting = Form.create({name: 'satellite-setting'})(SatSettingForm);

export default SatSetting;