import PhotoGrid from "@/components/PhotoGrid";
import { baseUrl, fetchApi } from "@/utils/fetchApi";
import Head from "next/head";

import HomePage from "@/components/HomePage";
import Footer from "@/components/Footer";

interface Property {
  hits: string;
  propertyForSale: string;
  propertyForRent: string;
}

export default function Home({ propertyForRent,propertyForSale }: Property) {
  return (
    <>
      <Head>
        <title>photofit</title>
      </Head>
      <div className="text-white  max-w-[1400px] mx-auto">
        <main>
          <HomePage />
          <PhotoGrid propertyForRent={propertyForRent} propertyForSale={propertyForSale}/>
          <Footer/>
        </main>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=5`)
  const res1 = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=5`
  );
  return {
    props: {
      propertyForSale:res.hits,
      propertyForRent: res1.hits,
    },
  };
};
