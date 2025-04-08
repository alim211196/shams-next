import Link from 'next/link'
import React from 'react'
import googleIcon from '../../assets/images/google-icon.svg';
import partnerLogo from '../../assets/images/partner-logo.svg';
import partnerBanner from '../../assets/images/partner-banner.png';
import featureIcon1 from '../../assets/images/feature-icon1.svg';
import aboutShams from '../../assets/images/about-shams.png';
import impectImg1 from '../../assets/images/impect-1.svg';
import Image from "next/image";
import ModalComponent from '../../components/Modal/Modal';

const page = () => {
  return (
      <><section className="partnerTop">
      <div className="container">
        <div className="row align-items-center">
          <div className='partnerBanner'>
            <Image src={partnerBanner} alt="PartnerBanner" />
            <div className='partnerContant'>
              <h2>We work with brands to inspire, engage and connect with creatives</h2>
            </div>
          </div>
        </div>
      </div>
    </section><section className="exploreAll">
        <div className="container">

          <div className="sectionTitle">
            <h2 className="title">
              Explore all partnerships   </h2>
          </div>

          <div className="row align-items-center">
            <div className="col-6 col-lg-3 col-md-6">
              <div className='partnerBox'>
                <div className='imgWrap'>
                  <Image src={partnerLogo} alt='aboutShams' className='img-fluid' />
                </div>
                <Link href="#" className='linkText'>Vimeo</Link>
              </div>
            </div>

            <div className="col-6 col-lg-3 col-md-6">
              <div className='partnerBox'>
                <div className='imgWrap'>
                  <Image src={partnerLogo} alt='aboutShams' className='img-fluid' />
                </div>
                <Link href="#" className='linkText'>Vimeo</Link>
              </div>
            </div>

            <div className="col-6 col-lg-3 col-md-6">
              <div className='partnerBox'>
                <div className='imgWrap'>
                  <Image src={partnerLogo} alt='aboutShams' className='img-fluid' />
                </div>
                <Link href="#" className='linkText'>Vimeo</Link>
              </div>
            </div>

            <div className="col-6 col-lg-3 col-md-6">
              <div className='partnerBox'>
                <div className='imgWrap'>
                  <Image src={partnerLogo} alt='aboutShams' className='img-fluid' />
                </div>
                <Link href="#" className='linkText'>Vimeo</Link>
              </div>
            </div>

            <div className="col-6 col-lg-3 col-md-6">
              <div className='partnerBox'>
                <div className='imgWrap'>
                  <Image src={partnerLogo} alt='aboutShams' className='img-fluid' />
                </div>
                <Link href="#" className='linkText'>Vimeo</Link>
              </div>
            </div>

            <div className="col-6 col-lg-3 col-md-6">
              <div className='partnerBox'>
                <div className='imgWrap'>
                  <Image src={partnerLogo} alt='aboutShams' className='img-fluid' />
                </div>
                <Link href="#" className='linkText'>Vimeo</Link>
              </div>
            </div>

            <div className="col-6 col-lg-3 col-md-6">
              <div className='partnerBox'>
                <div className='imgWrap'>
                  <Image src={partnerLogo} alt='aboutShams' className='img-fluid' />
                </div>
                <Link href="#" className='linkText'>Vimeo</Link>
              </div>
            </div>

            <div className="col-6 col-lg-3 col-md-6">
              <div className='partnerBox'>
                <div className='imgWrap'>
                  <Image src={partnerLogo} alt='aboutShams' className='img-fluid' />
                </div>
                <Link href="#" className='linkText'>Vimeo</Link>
              </div>
            </div>

            <div className="col-6 col-lg-3 col-md-6">
              <div className='partnerBox'>
                <div className='imgWrap'>
                  <Image src={partnerLogo} alt='aboutShams' className='img-fluid' />
                </div>
                <Link href="#" className='linkText'>Vimeo</Link>
              </div>
            </div>

            <div className="col-6 col-lg-3 col-md-6">
              <div className='partnerBox'>
                <div className='imgWrap'>
                  <Image src={partnerLogo} alt='aboutShams' className='img-fluid' />
                </div>
                <Link href="#" className='linkText'>Vimeo</Link>
              </div>
            </div>

            <div className="col-6 col-lg-3 col-md-6">
              <div className='partnerBox'>
                <div className='imgWrap'>
                  <Image src={partnerLogo} alt='aboutShams' className='img-fluid' />
                </div>
                <Link href="#" className='linkText'>Vimeo</Link>
              </div>
            </div>

            <div className="col-6 col-lg-3 col-md-6">
              <div className='partnerBox'>
                <div className='imgWrap'>
                  <Image src={partnerLogo} alt='aboutShams' className='img-fluid' />
                </div>
                <Link href="#" className='linkText'>Vimeo</Link>
              </div>
            </div>

          </div>
        </div>
      </section><section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className='cateringService'>
                <div className='cateringContant'>
                  <h3>Become a partner</h3>
                  <p>There are a lot of benefits to becoming a partner - from building a global brand to attracting future students. Sound interesting? We’re always looking for top institutions committed to advancing education, maybe you could be our next partner. </p>
                </div>
                <Link href='' className='btnGradient'>find out more</Link>
              </div>
            </div>
          </div>
        </div>
      </section><ModalComponent /></>
  )
}

export default page