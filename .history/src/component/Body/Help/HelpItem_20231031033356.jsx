import React, { Component } from 'react';

class HelpItem extends Component {
    render() {
        return (
            <div className='help-item flex items-center p-5 justify-end'>
                  <div className="content-help">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.text}</p>
                </div>
                <div className="circle-help" style={{transform : this.props.rotate}}>
                <div id="my-pie-chart"></div>
                </div>
              
            </div>
        );
    }
}

export default HelpItem;
