import React, { useState, useEffect } from "react";

const tabData = [
  {
    id: 1,
    title: "Locaties"
  },
  {
    id: 2,
    title: "Activiteiten"
  },
  {
    id: 3,
    title: "Gebiedsaanwijzingen"
  },
  {
    id: 4,
    title: "Hoofdlijnen"
  },
  {
    id: 5,
    title: "Kaarten"
  },
];

const TabComponent = () => {

type Tab = {
  id: number,
  title: string
};

  const [navs] = useState(tabData);
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);

  const handleClick = (id: number, title: string) => {
    console.log("geklikt op ", title);
    // Hier kun je andere functionaliteiten toevoegen
    setSelectedTab(id);
  };

  return (

    <>
      <ul className='element'>
        {navs.map((nav, index) => (
          <button key={index} className='li' onClick={() => handleClick(nav.id, nav.title)}>
            {nav.title}
          </button>
        ))}
      </ul>
    </>
  );
}

export default TabComponent