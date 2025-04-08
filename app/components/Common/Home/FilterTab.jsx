import React from 'react'
import Link from "next/link";

const FilterTab = () => {
  return (
    <div className="row">
    <div className="col-lg-12">
      <ul className="filter-tab text-center">
        <li className="nav-item"> <Link href="#" className='active'>All</Link> </li>
        <li className="nav-item"> <Link href="#">Public Speaking</Link> </li>
        <li className="nav-item"> <Link href="#">Journalism</Link> </li>
        <li className="nav-item"> <Link href="#">Media Handling</Link> </li>
        <li className="nav-item"> <Link href="#">Advertising</Link> </li>
        <li className="nav-item"> <Link href="#">Digital Commuication</Link> </li>
      </ul>
    </div>
  </div>
  )
}

export default FilterTab