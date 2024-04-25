import React, { useState, useEffect } from "react";

type Hoofdlijn = {
  id: number;
  identificatie: string,
  soort_hoofdlijn_id: number,
  naam: string,
  regeling_id: number,
  datum_begin: Date;
};

const HoofdlijnElement = () => {

  const [hoofdlijnenData, setHoofdlijnenData] = useState<Hoofdlijn[]>([]);

  //haal alle mogelijke hoofdlijnen op
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001');
        const data = await response.json();
        setHoofdlijnenData(data);
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    };
    fetchData();
  }, [])

  const hoofdlijnenElements = hoofdlijnenData.map((hoofdlijn: Hoofdlijn) => {

    return (
      <div key={hoofdlijn.id} >
      <div className="id">Het id van de hoofdlijn is: {hoofdlijn.id}</div>
        <div className="soort">- Soort hoofdlijn: {hoofdlijn.soort_hoofdlijn_id}</div>
        <div className="tekst">- Naam: {hoofdlijn.naam}</div>
        <br/>
      </div>
    );
  });

  return <div className="container">{hoofdlijnenElements}</div>;
};

export default HoofdlijnElement;
