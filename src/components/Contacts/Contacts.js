import React, { useState } from 'react';
import Mail from '../../../static/img/icons/Mail.js';
import Phone from '../../../static/img/icons/Phone.js';

export default function Contacts() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="container contacts">
            <div className="row">
                <div className="col col--6">
                    <h5 className="contacts--title">Write us</h5>
                    <div className="contacts__item">
                        <p className="contacts__item--subtitle h8">Send us a message</p>
                        <p className="contacts__item--text subtitle-2-18-400">
                            Share a message with your ideas or proposals and we will contact you. Excited to hear from you!
                        </p>
                    </div>
                    <div className="contacts__item">
                        <p className="contacts__item--subtitle h8">Address</p>
                        <p className="contacts__item--text subtitle-2-18-400">611 Gateway Blvd, Suite 120 South San Francisco, CA 94080, USA</p>
                    </div>
                    <div className="contacts__item">
                        <p className="contacts__item--subtitle h8">Contact</p>
                        <a href="tel:+1 (650) 502-5022">
                            <div className="contacts__item--subtitle subtitle-2-18-400">
                                <Phone/> +1 (650) 502-5022
                            </div>
                        </a>
                        <a href="mailto:contact@yellow.com">
                            <div className="contacts__item--subtitle subtitle-2-18-400">
                                <Mail/> contact@yellow.com
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col col--6">
                    <h5 className="contacts--title">Contact us</h5>
                    <p className="contacts__item--text subtitle-2-18-400">
                        Please, enter your name and email and we will contact you soon.
                    </p>
                    <input className="input" onChange={setFullName} value={fullName}/>
                    <input className="input" onChange={setEmail} value={email}/>
                </div>
            </div>
        </div>
    )
}
