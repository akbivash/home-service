import FilterBox from '@/components/FilterBox'
import Footer from '@/components/Footer'
import React, { useState } from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { baseUrl, fetchApi } from '@/utils/fetchApi';
import { useRouter } from 'next/router';
import Property from '@/components/Property';

const Search = ({properties}:any) => {
  const[filterBox, setFilterBox] = useState(false)
 const router = useRouter()
 const {query} = router


  return (
    <div className='w-full p-2'>
  <div className='min-h-screen relative '>
  <span className='z-40 absolute  w-full max-w-[400px] py-2 my-4 left-[50%] translate-x-[-50%] bg-gray-100 text-primary-light cursor-pointer text-center flex justify-center  ' onClick={() => setFilterBox(prev => !prev)}> Search by filters <FilterAltIcon /></span>

     <FilterBox filterBox={filterBox}/>
     <div>
      <h2 className={`${filterBox ? 'text-white pl-2 mt-2 ':"text-white mt-16 pl-2"}`}>Purpose : {query.purpose || 'for rent'}</h2>
{properties.length !== 0 && properties !== undefined && <div className="grid text-white  sm:grid-cols-2 md:grid-cols-3  p-2 gap-2"> 
  {properties.map((p:any)=> {
    return <Property key={p.queryName} property={p}/>
  })}
  </div>}
     </div>
  </div>
      <Footer/>
    </div>
  )
}

export default Search


export const getServerSideProps = async ({query}:any) => {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const response = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}&hitsPerPage=10`);
  return {
    props: {
      properties: response.hits,
    },
  };
};
