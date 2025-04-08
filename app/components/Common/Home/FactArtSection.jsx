import React from 'react';
import Link from "next/link";
import artImg1 from '../../../assets/images/art-img1.svg';
import artImg2 from '../../../assets/images/art-img2.svg';
import Image from "next/image";

const FactArtSection = () => {
  return (
    <section className="factArtSection">
    <div className="factArtWrap">
      <div className="factLeft">
        <div className="sectionTitle">
          <h2 className="title">State-of-the-Art Facilities</h2>
          <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          <Link href="#" className="btnBorder book-now">Book Now</Link>
        </div>
        </div>
        <div className="factRight">
          <Image src={artImg1} className="img-fluid artFirst" alt="whyImg" />
          <Image src={artImg2} className="img-fluid artLast" alt="whyImg" />
        </div>
    </div>
  </section>
  )
}

export default FactArtSection