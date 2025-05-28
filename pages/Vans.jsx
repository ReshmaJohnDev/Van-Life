import React from "react";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    const fetchVanData = async () => {
      const response = await fetch("/api/vans");
      const vanData = await response.json();
      console.log(vanData);
      setVans(vanData.vans);
    };
    fetchVanData();
  }, []);
  console.log(vans);
  return (
    <>
      <h1>Explore our Van options</h1>
      <div className="vanGallery">
        {vans.map((van) => (
          <div key={van.name} className="eachVan">
            <img src={van.imageUrl} alt={van.name} />
            <span className="vanDescription">
              <h3>{van.name}</h3>
              <h3>${van.price}/day</h3>
            </span>
            <div className="vanType">
              <button className={`vanTypebutton ${van.type}`}>
                {van.type}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
