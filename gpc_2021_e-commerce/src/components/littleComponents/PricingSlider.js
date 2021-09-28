import React from 'react';
import InputRange from 'react-input-range';


class PricingSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                min: 5,
                max: 100
            },
            minValue: 0,
            maxValue: 130
        }
    }
    
    render() {
        return (
            <InputRange
                maxValue={this.state.maxValue}
                minValue={this.state.minValue}
                value={this.state.value}
                formatLabel={value => `${value} ლ`}
                
                onChange={value => this.setState({ value })}
            />
        )
    }
}
export default PricingSlider;
