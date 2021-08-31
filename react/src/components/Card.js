import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div className="col-sm">
                <div className="card cards" style={{height: '455px'}}>
                    <img src={this.props.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                    </div>
                </div>
            </div>

        );
    }
}
