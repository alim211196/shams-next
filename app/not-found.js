import Link from 'next/link'
import React from 'react'
import NoFoundImg from './assets/images/not-found-img.png';
import NoFound1 from './assets/images/not-found-500.svg';
import Image from "next/image";

const page = () => {
  return (
      <section className="notFound">
        <div className="container">
          <div className='notFoundWrap'>
                <Image src={NoFound1} alt='NoFoundImg' className='img-fluid' />
            <h3>We cant find the page you’re looking for</h3>
          </div>
        </div>
      </section>
  )
}

export default page