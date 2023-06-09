import React from 'react'
import BedIcon from '@mui/icons-material/Bed';
import Link from 'next/link';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import ShowerIcon from '@mui/icons-material/Shower';
import SquareFootIcon from '@mui/icons-material/SquareFoot';

const Property = ({property}:any) => {
  return (
    <>
  <div className='grid  py-2 '>
  <Link href={`/property/${property.id}`}>
  <div className='h-[250px] relative '>
  <Image src={`${property.coverPhoto.url}`} loading='lazy'  alt='photo'   fill style={{objectFit:'cover'} }/>
  </div>
   
    <div className='flex justify-between items-center p-2'>
    <span className=' '>
      AED {property.price }{property.rentFrequency && `/${property.rentFrequency}`}
    </span>
    <Avatar src={property?.agency?.logo?.url} style={{width:'50px'}} />
    </div>
<span className='flex justify-between items-center p-2'>
  {property.rooms} <SingleBedIcon/> | {property.baths} <ShowerIcon/> | {Math.floor(property.area)} sqft <SquareFootIcon/>
</span>
  <span>{property.title.length > 30 ? `${property.title.slice(0,30)}...` : property.title}</span>
  </Link>
  </div>
    </>
  )
}

export default Property