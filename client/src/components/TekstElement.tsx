import React, { useState, useEffect } from "react";
import elementenData from "./tekst_data.json";
import GebAanw from "./GebAanw";

type Element = {
  id: number;
  tekst: string;
  type: string;
};
type Gebiedsaanwijzing = {
  id: number;
  naam: string;
};
type AnnTekstdeel = {
  tekstdeel_id: number;
  gebiedsaanwijzing_id: number;
};

const TekstElement = () => {

  const [gebAanwData, setGebAanwData] = useState<Gebiedsaanwijzing[]>();
  // const [annTekstdeelData, setAnnTekstdeelData] = useState<AnnTekstdeel[]>();

  //haal alle mogelijke gebiedsaanwijzingen op
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001');
        const data = await response.json();
        setGebAanwData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

// console.log("gebAanwData ", gebAanwData)

  //haal alle mogelijke annotaties op
  const [annTekstdeelData, setAnnTekstdeelData] = useState<AnnTekstdeel[]>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/gebAanwTekstdeel');
        const data = await response.json();
        setAnnTekstdeelData(data);
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    };
    fetchData();
  }, [])

  // console.log("annTekstdeelData ", annTekstdeelData)

  //verzamel de tekstelmenten (als array)
  const elementenDataArray: Element[] = elementenData.elementen;
  const tekstElements = elementenDataArray.map((element: Element) => {
    const tekstId: number = element.id;

    let props = {
      gebAanwData: gebAanwData,
      annTekstdeelData: annTekstdeelData,
      tekstId: tekstId
    }

    return (
      <div key={element.id} className={element.type}>
        <div className="id">Het id van de tekst is: {element.id}</div>
        <div className="tekst">{element.tekst}</div>
        {gebAanwData && <GebAanw {...props} />}
        <br/>
      </div>
    );
  });

  return <div className="container">{tekstElements}</div>;
};

export default TekstElement;
