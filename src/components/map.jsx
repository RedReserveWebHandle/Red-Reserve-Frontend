import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  // Default dummy hospitals data
  const hospitals = [
    "City Hospital",
    "Central Medical Center",
    "Sunrise Health Clinic"
  ];

  return (
    <>
    
      <div className="flex flex-row gap-16 p-8 items-center justify-center">
      
      <MapContainer 
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        className="rounded-xl border-6 border-[#1ab6ca]"
        style={{ height: "500px", width: "60%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            Location
          </Popup>
        </Marker>
      </MapContainer>
      
      
      <div>
        <div className=" p-4">
        <h2 className="text-3xl  font-sans font-bold text-blue-900">
          LOCATE NEARBY HOSPITALS
        </h2>
      </div>
          <div class="flex flex-col p-4  w-full lg:w-112 bg-[#dbedf0] rounded-b-2xl lg:rounded-2xl lg:rounded-bl-none items-center justify-center">
  <div class="bg-[#1ab6ca] m-6 text-white font-bold p-3 rounded-lg shadow-xl mb-4 text-center transform transition-transform duration-300 hover:scale-105">
    
    <h4 class="text-xl">Map View</h4>
  </div>
  <br />
  <div class="h-64 lg:h-96 overflow-y-auto w-full custom-scrollbar">
    {(hospitals || []).map((hospital, index) => (
      <div
        key={index} 
        class="bg-white border-b-2 border-[#1ab6ca] px-4 py-3 text-slate-800 font-semibold text-base hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md mb-2 shadow-md hover:shadow-lg"
      >
        {hospital}
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </>
  );
};

export default Map;
