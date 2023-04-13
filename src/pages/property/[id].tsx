import { baseUrl, fetchApi } from '@/utils/fetchApi'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import ShowerIcon from '@mui/icons-material/Shower';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import Image from 'next/image';

const Details = ({details}:any) => {
  const{coverPhoto,price, rentFrequency,rooms,baths,area,title,agency, description} = details

  return (
    <>
   {Object.keys(details).length !== 0 ?  <div className='grid text-white max-w-[900px] mx-auto p-2'>
   <div className='relative h-[250px]'>
   <Image src={`${coverPhoto && coverPhoto.url}`}  alt='photo'  fill  className='object-cover'/>
   </div>
      <div className='flex justify-between items-center p-2'>
      <span className=' '>
        AED {price }{rentFrequency && `/${rentFrequency}`}
      </span>
      <Avatar src={agency?.logo?.url} style={{width:'50px'}} />
      </div>
  <span className='flex gap-4 flex-wrap items-center p-2'>
    {rooms} <SingleBedIcon/> | {baths} <ShowerIcon/> | {Math.floor(area)} sqft <SquareFootIcon/>
  </span>
    <p>{description && description.replace(/<[^>]*>/g, '')}</p>
    </div> : <div className='text-white text-center py-4'>
      <h2 >Sorry, This product is not available</h2>
      </div>}
    </>
  )
}

export default Details


export async function getServerSideProps({params}:any){
  const id = params.id
  try {
    const response = await fetch(`${baseUrl}/properties/detail?externalID=${id}`, options);
    const data = await response.json();
    return {
      props:{
        details:data
      }
    }
  } catch (error) {
    console.error(error);
    return {
      props:{
        details:{}
      }
    }
  }
}



const headers = new Headers();
headers.set('X-RapidAPI-Key', process.env.NEXT_PUBLIC_RAPID_API_KEY || '');
headers.set('X-RapidAPI-Host', 'bayut.p.rapidapi.com');

const options = {
	method: 'GET',
	headers: headers,
};
