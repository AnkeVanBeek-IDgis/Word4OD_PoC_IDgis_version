import React, { useState, useEffect } from "react";

type Gebiedsaanwijzing = {
  id: number;
  naam: string;
};
type AnnTekstdeel = {
  tekstdeel_id: number;
  gebiedsaanwijzing_id: number;
};

const gebAanw = (props: { gebAanwData: Gebiedsaanwijzing[] | null, annTekstdeelData: AnnTekstdeel[] | null, tekstId: number}) => {

  const gebAanwData = props.gebAanwData;
  const annTekstdeelData = props.annTekstdeelData;
  const tekstId = props.tekstId;

  const gebAanwElements = gebAanwData.map((gebiedsaanwijzing: Gebiedsaanwijzing) => {
    let isChecked: boolean = false;

    if (annTekstdeelData.some(annTekstDeel => annTekstDeel.gebiedsaanwijzing_id === gebiedsaanwijzing.id && annTekstDeel.tekstdeel_id === tekstId)) {
      isChecked = true
    }

    function onClick() {
      console.log("geklikt")
    }

    return ( 
    <div key={gebiedsaanwijzing.id} className="gebAanw">
      <input type="checkbox" key={gebiedsaanwijzing.id} checked={isChecked} onChange={onClick}/>
      {gebiedsaanwijzing.naam}
    </div>
  )});

  return gebAanwElements;
};

export default gebAanw;
