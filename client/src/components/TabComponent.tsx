import React, { useState, useEffect } from "react";

const tabData = [
  {
    title: "Locaties",
    link: '/locaties'
  },
  {
    title: "Activiteiten",
    link: '/activiteiten'
  },
  {
    title: "Gebiedsaanwijzingen",
    link: '/gebiedsaanwijzingen'
  },
  {
    title: "Hoofdlijnen",
    link: '/hoofdlijnen'
  },
  {
    title: "Kaarten",
    link: '/kaarten'
  },
];

const TabComponent = () => {
  const [navs] = useState(tabData);

  return (

    <>
      <ul className='element'>
        {navs.map((nav, index) => (
          <button key={index} className='li' onClick={() => console.log("geklikt op ", nav.title)}>
            {nav.title}
          </button>
        ))}
      </ul>
    </>
  );
}

export default TabComponent