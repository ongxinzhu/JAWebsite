import React, {Component} from 'react';

class ContactUs extends Component {
    render(){
        return(
            <div>
                <h1>
                    Contact Us
                </h1>

                <h2>
                    Office
                </h2>
                <div className="contact-grid-pane">
                    <div className="grid-item">
                        Address
                    </div>
                    <div className="grid-item">
                        Insert Address
                    </div>
                    <div className="grid-item">
                        Email
                    </div>
                    <div className="grid-item">
                        Insert Email
                    </div>
                    <div className="grid-item">
                        Contact Number
                    </div>
                    <div className="grid-item">
                        Insert Contact number
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;
