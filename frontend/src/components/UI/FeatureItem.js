import React from 'react';
import PropTypes from 'prop-types';


import chat from '@/assets/img/icon-chat.png'
import money from '@/assets/img/icon-money.png'
import security from '@/assets/img/icon-security.png'

const FeatureItem = ({ type }) => {

    let featItem = { icon: '', title: '', text: '' }

    switch (type) {
        case 'chat':
            featItem = {
                icon: chat,
                title: 'You are our #1 priority',
                text: `Need to talk to a representative? You can get in touch through our
                24/7 chat or through a phone call in less than 5 minutes`,
            }
            break
        case 'money':
            featItem = {
                icon: money,
                title: 'More savings means higher rates',
                text: 'The more you save with us, the higher your interest rate will be!',

            }
            break
        case 'security':
            featItem = {
                icon: security,
                title: 'Security you can trust',
                text: `We use top of the line encryption to make sure your data and money
                is always safe.`,
            }
            break
        default: break
    }




    return (
        <div className="feature-item">
            <img src={featItem.icon}
                alt={featItem.title}
                className="feature-icon" />
            <h3 className="feature-item-title">{featItem.title}</h3>
            <p>
                {featItem.text}
            </p>
        </div>
    );
};

FeatureItem.propTypes = {
    type: PropTypes.string.isRequired
}

export default FeatureItem;