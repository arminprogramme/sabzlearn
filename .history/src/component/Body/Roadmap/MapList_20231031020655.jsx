import React, { Component } from 'react';

class MapList extends Component {
    render() {
        return (
            <div className='map-item' style={{backgroundImage : this.props.gradient}}>
                <div className="map-item-count">
                    <span>{this.props.count}</span>
                </div>
                <div className="map-item-content text-center">
                    <i className='fa fa-puzzle-piece'></i>
                    <h2>{this.props.title}</h2>
                </div>
            </div>
        );
    }
}

export default MapList;
