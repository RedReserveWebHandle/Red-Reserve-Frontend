import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
import { BACKEND_URL } from '../config.js';
import { useMap } from "react-leaflet";

const Map = () => {
  const [latitude, setLatitude] = useState(20);
  const [longitude, setLongitude] = useState(20);
  const [hospitals, setHospitals] = useState([]);

  const HandleMap = (hospital) => {
    console.log("Selected hospital:", hospital);
    if (hospital.latitude && hospital.longitude) {
      setLatitude(hospital.latitude);
      setLongitude(hospital.longitude);
    } else {
      console.warn(`No coordinates for hospital: ${hospital.name}`);
    }
  };

function RecenterMap({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);
  return null;
}
  // Fetch hospitals from backend
  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(`${BACKEND_URL}/hospital/names`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setHospitals(data); 
        console.log("Fetched hospitals:", data);
      })
      .catch((err) => console.error("Error fetching hospitals:", err));
  }, []);

  return (
    <>
      <div className="flex flex-row gap-16 p-8 items-center justify-center">
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          scrollWheelZoom={false}
          className="rounded-xl border-6 border-[#1ab6ca]"
          style={{ height: "500px", width: "60%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>Location</Popup>
          </Marker>

          {/* Optional: show markers for each hospital if coordinates are available */}
          {hospitals.map((hospital, idx) =>
            hospital.latitude && hospital.longitude ? (
              <Marker
                key={idx}
                position={[hospital.latitude, hospital.longitude]}
              >
                <Popup>{hospital.name}</Popup>
              </Marker>
            ) : null
          )}

          <RecenterMap lat={latitude} lng={longitude} />
          
        </MapContainer>

        <div>
          <div className="p-4">
            <h2 className="text-3xl font-sans font-bold text-blue-900">
              LOCATE NEARBY HOSPITALS
            </h2>
          </div>

          <div className="flex flex-col p-4 w-full lg:w-112 bg-[#dbedf0] rounded-b-2xl lg:rounded-2xl lg:rounded-bl-none items-center justify-center">
            <div className="bg-[#1ab6ca] m-6 text-white font-bold p-3 rounded-lg shadow-xl mb-4 text-center transform transition-transform duration-300 hover:scale-105">
              <h4 className="text-xl">Map View</h4>
            </div>

            <div className="h-64 lg:h-96 overflow-y-auto w-full custom-scrollbar">
              {(hospitals || []).map((hospital, index) => (
                <div
                  key={index}
                  className="bg-white border-b-2 border-[#1ab6ca] px-4 py-3 text-slate-800 font-semibold text-base hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md mb-2 shadow-md hover:shadow-lg"
                ><button onClick={() => HandleMap(hospital)}>
                  {hospital.name || hospital} {/* Handles both object or string */}
                  </button>
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
