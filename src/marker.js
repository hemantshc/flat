import React from 'react';
import "./marker.css"
class Marker extends React.Component{
    render(){
        return (
            <div className="marker">
                {this.props.txt}
            </div>
        );
    }
}

export default Marker;
