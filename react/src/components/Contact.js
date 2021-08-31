import React, { Component } from 'react';

const btnSend = document.getElementById('btn_send');
const terms = document.getElementById('terms');

const termsAccept = () => {
    btnSend.disabled = 'false';
}

const termsNotAccept = () => {
    btnSend.disabled = 'disabled';
}

export default class Contact extends Component {

    validateTerms = () => {
        if (btnSend.disabled = 'disabled') {
            termsAccept();
        } else {
            termsNotAccept();
        }
    }
    render() {
        return (
            <div>
                <section id="contact" className="container">
                    <div className="info">
                        <p className="display-6">CONTATTACI</p>
                        <p className="contact-info lead"><i className="fa fa-map-marker fa-fw"></i> Viale dei Pensieri 27, Mirano(VE)</p>
                        <p className="contact-info lead" style={{marginLeft: '3%'}}><i className="fa fa-phone fa-fw"></i> Telefono: +39 3933993932</p>
                        <p className="contact-info lead" style={{marginLeft: '3%'}}><i className="fa fa-envelope fa-fw"></i> Email: imperodiapollo@gmail.com</p>
                    </div>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.8628352688515!2d12.101731521679273!3d45.492924654179724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ecbd97df076db%3A0xc6a8bf06b9ce4c11!2sVia%20dei%20Pensieri%2C%2030035%20Mirano%20VE!5e0!3m2!1sit!2sit!4v1624217064117!5m2!1sit!2sit"
                        width="1000px" 
                        height="450" 
                        title="map"
                        style={{border: '0'}} 
                        allowFullScreen="" 
                        loading="lazy"
                        className="map">
                    </iframe>
                    <p className="lead form" id="prenota">RICHIEDI PIÚ INFORMAZIONI O PRENOTA UNA STANZA PER IL TUO CANE</p>
                    <form className="form" method="POST">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nome</label>
                            <input type="text" className="form-control" name="name_mail" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Indirizzo Email</label>
                            <input type="email" className="form-control" name="email_mail" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Oggetto</label>
                            <input type="text" className="form-control" name="subjec_mail" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Messaggio</label>
                            <textarea className="form-control" name="message_mail" rows="3" required></textarea>
                        </div>
                        <p id="accept_terms"><input type="checkbox" id="terms" name="terms"  onClick={this.validateTerms}/>Accetto i <a href="#">Termini della Privacy Policy</a>.</p>
                        <p>
                            <button className="w3-button w3-light-grey w3-padding-large" id="btn_send" name="send_mail" type="submit" disabled="disabled">  
                                INVIA MESSAGGIO
                            </button>
                        </p>
                    </form>
                </section>
            </div>
        );
    }
}
