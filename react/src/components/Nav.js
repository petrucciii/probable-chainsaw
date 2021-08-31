import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        return (
            <header>
                <section className="header">
                    <h2 className="text-danger header-content">L'Impero di Apollo</h2>
                    <a href="#prenota" className="header-content btn btn-danger">Prenota!</a>
                </section>
                <section className="header-footer"></section>
            </header>
        );
    }
}
