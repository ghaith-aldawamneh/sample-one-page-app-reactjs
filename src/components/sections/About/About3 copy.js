import React from 'react';

import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about3.jpeg';

const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>


        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title1'>Rust protection (حماية الصدأ)</h3>
              <div className='about-description'>
                <p>
                  Curabitur aliquet quam id dui posuere blandit. Donec
                  sollicitudin molestie malesuada Pellentesque ipsum id orci
                  porta dapibus. Vivamus suscipit tortor eget felis porttitor
                  volutpat.
                </p>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor , sed
                  quia non numquam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem. Nisi ut aliquid ex
                  ea commodi consequatur?
                </p>
                <p>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur, vel illum qui
                  dolorem eum fugiat quo voluptas nulla pariatur
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
