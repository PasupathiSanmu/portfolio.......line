import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { withStyles } from '@material-ui/core';
import { Mail, Phone } from '@material-ui/icons';
import styles from './index.scss';
import linkedin from '../../images/icons/white-linkedin.png';
import vietnam from '../../images/vietnam-motorbike.jpg';
import mural from '../../images/bangkok-mural.jpg';
import headshot from '../../images/RedAcademyYVR_Headshots_Jennifer_20181207_040.jpg';
import GreyMob from '../../images/bg/GreyMob.png';
import GreyDesk from '../../images/bg/GreyDesk.png';
import roctopus from '../../images/scubadive.png';

class Contact extends Component {
  render() {
    return (
      <section className="container">
        <div className="contact" id="contact">
          <div className="header-wrapper">
            <h1 className="title">Contact Me</h1>
            <img src={GreyMob} className="greybg greybg-mob" alt="" />
            <img src={GreyDesk} className="greybg greybg-desk" alt="" />
          </div>

          <div className="info-wrapper">
            <div className="text-wrapper">
              <p className="text">
                Looking for someone with enthusiasm, positive energy, and a
                can-do attitude? Then I'm the right candidate for you! Don't see
                it? Why don't we meet in person?
              </p>
              <div className="icon-container">
                <div className="icon-wrapper">
                  <Phone className="icon" /> 604-780-6231
                </div>
                <a
                  className="icon-wrapper"
                  href={'mailto:' + 'jen.yiu.90@gmail.com'}
                >
                  <Mail className="icon" /> jen.yiu.90@gmail.com
                </a>
                <a
                  className="icon-wrapper"
                  href="https://www.linkedin.com/in/jennifer-yiu/"
                >
                  <img src={linkedin} className="icon" alt="LinkedIn" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-images">
          <img
            src={headshot}
            className="contact-img"
            alt="Jennifer Yiu's headshot"
          />
          <img
            src={mural}
            className="contact-img"
            alt="Jennifer painting a mural in Bangkok"
          />
          <img
            src={roctopus}
            className="contact-img"
            alt="Jennifer scuba diving in Koh Tao, Thailand"
          />
          <img
            src={vietnam}
            className="contact-img"
            alt="Jennifer on her motorbike trip around Northern Vietnam"
          />
        </div>
        <ReactPlayer
          url="https://youtu.be/_dE-DZQ7IMM"
          playing
          muted="true"
          height="250px"
          width="400px"
          loop="true"
        />

        <p className="credit">
          <a
            className="author"
            href="https://www.linkedin.com/in/jennifer-yiu/"
          >
            {' '}
            Jennifer Yiu{' '}
          </a>
          &copy; 2019. Built with React, SCSS, and Material-UI.
        </p>
      </section>
    );
  }
}

export default withStyles(styles)(Contact);
