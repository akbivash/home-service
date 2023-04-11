import { baseUrl, fetchApi } from "@/utils/fetchApi";
import { Grid } from "@mui/material";
import { GetStaticProps } from "next";
import React from "react";
import { useEffect } from "react";
import Property from "./Property";
import Masonry from "@mui/lab/Masonry";

interface Property {
  propertyForSale:string,
  propertyForRent: string;
}
interface Props {
  props: Property;
}

const PhotoGrid = ({ propertyForRent,propertyForSale }: Property) => {
  if (!Array.isArray(propertyForRent )) {
    // handle the case where propertyForRent is not an array
    return <div className="text-center">Property for rent is not available.</div>;
  }
  if (!Array.isArray(propertyForSale )) {
    // handle the case where propertyForRent is not an array
    return <div className="text-center"> Property for sell is not available.</div>;
  }

  return (
    <>
    <h1 className="text-center py-5  text-2xl">Property for rent</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 p-2 gap-2">
        {propertyForRent.map((p) => {
          return <Property key={p.id} property={p} />;
        })}
      </div>
    <h1 className="text-center py-5  text-2xl">Property for Sale</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 p-2 gap-2">
        {propertyForSale.map((p) => {
          return <Property key={p.id} property={p} />;
        })}
      </div>
    </>
  );
};

export default PhotoGrid;
