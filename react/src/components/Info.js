import React, { Component } from 'react';
import Location from '../images/location.png';
import Dogs from '../images/dogs.png';
import Sleeping from '../images/sleeping.png';
import Card from './Card';

export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img1: Location,
            title1: 'Chi Siamo',
            description1: 'Siamo una piccola pensione per cani situata in provincia di Venezia, che ha deciso di ospitare i cani di tutte le taglie mentre voi siete lontani da casa.',
            img2: Dogs,
            title2: 'Trattamento',
            description2: 'Il tuo cane verrá trattato come un re! Durante il giorno potrá rimanere con altri cani, svolgere attivitá di vario genere oppure rilassarsi nella nostro parco immerso nella natura. Di notte sará rinchiuso in apoosite stanze munite di cibo, acqua e cuccia.',
            img3: Sleeping,
            title3: 'Tempo di Permanenza',
            description3: 'Il tempo di permanenza puó variare da un minimo di una notte ad un massimo di venti notti.'
        }
    }
    
    render() {
        return (
            <div>
                <div className="red-space"></div>
                <div className="container row row-cols-1 row-cols-md-3 g-4">
                    <Card
                        img={this.state.img1}
                        title={this.state.title1}
                        description={this.state.description1}
                    />
                    <Card
                        img={this.state.img2}
                        title={this.state.title2}
                        description={this.state.description2}
                    />
                    <Card
                        img={this.state.img3}
                        title={this.state.title3}
                        description={this.state.description3}
                    />
                </div>
                <div className="red-space"></div>
            </div>
        );
    }
}
