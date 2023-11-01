import React, { Component } from 'react';

class MapList extends Component {
    render() {
        return (
            <div className='map-item'>
                <div className="map-item-count">
                    <span>56</span>
                </div>
                <div className="map-item-content text-center">
                    <i className='fa fa-puzzle-piece'></i>
                </div>
            </div>
        );
    }
}

export default MapList;
