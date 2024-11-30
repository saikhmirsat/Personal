import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './ViewProduct.css'

export default class AsNavFor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <div>

                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                    className='firstSlider'
                >
                    <div>
                        <img src={this.props.img1} alt="" />
                    </div>
                    <div>
                        <img src={this.props.img2} alt="" />
                    </div>
                    <div>
                        <img src={this.props.img3} alt="" />
                    </div>
                    <div>
                        <img src={this.props.img4} alt="" />
                    </div>
                    <div>
                        <img src={this.props.img5} alt="" />
                    </div>

                </Slider>
                <Slider
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={5}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    className='secondSlder'
                >
                    <div>
                        <img src={this.props.img1} alt="" />
                    </div>
                    <div>
                        <img src={this.props.img2} alt="" />
                    </div>
                    <div>
                        <img src={this.props.img3} alt="" />
                    </div>
                    <div>
                        <img src={this.props.img4} alt="" />
                    </div>
                    <div>
                        <img src={this.props.img5} alt="" />
                    </div>

                </Slider>
            </div>
        );
    }
}