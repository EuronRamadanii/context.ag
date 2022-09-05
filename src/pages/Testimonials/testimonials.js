import React from 'react';
import '../../Assets/css/_career.scss';
import {Header, Footer} from '../../components';
import { useTranslation } from 'react-i18next';


const Testimonials = () => {
  useTranslation([]);
  return (
    <div className="Career-page">
      <Header />
        <div className='container career-content'>
          <h1>Testimonials</h1>
        </div>
      <Footer />
    </div>
  );
}

export default Testimonials;