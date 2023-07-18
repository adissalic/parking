import React, { useEffect, useState } from "react";
import { GoogleMap, InfoWindowF, MarkerF } from "@react-google-maps/api";
import PayButton from "./PayButton";
import classes from "./Map.module.css";

const markers = [
  // ZONE 0
  {
    id: 0,
    name: "Inžinjerske brigade",
    position: { lat: 44.53341, lng: 18.68715 },
    zone: 0,
  },
  {
    id: 1,
    name: "Trg tržnica/ Soni trg",
    position: { lat: 44.538088263347966, lng: 18.675531328388516 },
    zone: 0,
  },
  {
    id: 2,
    name: "Turalibegova",
    position: { lat: 44.53641192664139, lng: 18.679129498026153 },
    zone: 0,
  },
  {
    id: 3,
    name: "Klosterska",
    position: { lat: 44.5368831983331, lng: 18.679585472958944 },
    zone: 0,
  },
  {
    id: 4,
    name: "Pozorišna",
    position: { lat: 44.53723252699982, lng: 18.675944031095575 },
    zone: 0,
  },
  {
    id: 5,
    name: "Kazan Mahala",
    position: { lat: 44.53630404405343, lng: 18.678251739705566 },
    zone: 0,
  },
  {
    id: 6,
    name: "Hadži Hasanage Pašića",
    position: { lat: 44.53885779948497, lng: 18.67455307334445 },
    zone: 0,
  },
  {
    id: 7,
    name: "Malkočeva",
    position: { lat: 44.53807672634167, lng: 18.674815922451366 },
    zone: 0,
  },
  {
    id: 8,
    name: "Kipovi-ETF",
    position: { lat: 44.537518538350696, lng: 18.674317697994905 },
    zone: 0,
  },
  // ZONE 1
  {
    id: 9,
    name: "Tuzlanskih brigada",
    position: { lat: 44.53920274001628, lng: 18.676685359837364 },
    zone: 1,
  },
  {
    id: 10,
    name: "Patriotske lige",
    position: { lat: 44.539109061742494, lng: 18.677817252042686 },
    zone: 1,
  },
  {
    id: 11,
    name: "Trg Slobode",
    position: { lat: 44.539999080638616, lng: 18.67607384663303 },
    zone: 1,
  },
  {
    id: 12,
    name: "Ispred Omege",
    position: { lat: 44.53837787389726, lng: 18.664999676311986 },
    zone: 1,
  },
  {
    id: 13,
    name: "Pošta (uz Jalu)",
    position: { lat: 44.53337440741828, lng: 18.69144759830296 },
    zone: 1,
  },
  {
    id: 14,
    name: "Džemala Bijedića",
    position: { lat: 44.53408566386097, lng: 18.691383225285378 },
    zone: 1,
  },
  {
    id: 15,
    name: "Turalibegova (New York)",
    position: { lat: 44.53560319085816, lng: 18.680206404944506 },
    zone: 1,
  },
  {
    id: 16,
    name: "Klosterska (KSC-Kabil)",
    position: { lat: 44.53687565042948, lng: 18.68293382091259 },
    zone: 1,
  },

  /* ZONA 2*/
  {
    id: 17,
    name: "Dom Zdravlja",
    position: { lat: 44.5407274893435, lng: 18.66792950093297 },
    zone: 2,
  },
  {
    id: 18,
    name: "Albina Herljevića",
    position: { lat: 44.54085615833181, lng: 18.668435394163193 },
    zone: 2,
  },
  {
    id: 19,
    name: "Slatina (Soda So)",
    position: { lat: 44.54046520501668, lng: 18.665456801031727 },
    zone: 2,
  },
  {
    id: 20,
    name: "Franjevačka (Energo Petrol)",
    position: { lat: 44.53943475801653, lng: 18.666572599972415 },
    zone: 2,
  },
  {
    id: 21,
    name: "Franjevačka (Socijalno)",
    position: { lat: 44.53794640861492, lng: 18.669765769832573 },
    zone: 2,
  },
  {
    id: 22,
    name: "Kojšino",
    position: { lat: 44.54086472547107, lng: 18.67329502544232 },
    zone: 2,
  },
  {
    id: 23,
    name: "Atik Mahala",
    position: { lat: 44.540184495623286, lng: 18.673449289908547 },
    zone: 2,
  },
  {
    id: 24,
    name: "Kajmak stanica",
    position: { lat: 44.5380990350811, lng: 18.681417214597527 },
    zone: 2,
  },
  {
    id: 25,
    name: "Panonsko jezero (Istok)",
    position: { lat: 44.53842500225469, lng: 18.68317272040068 },
    zone: 2,
  },
  {
    id: 26,
    name: "Tenis",
    position: { lat: 44.53777019831562, lng: 18.68485044215054 },
    zone: 2,
  },
  {
    id: 27,
    name: "TC Merkator",
    position: { lat: 44.53316246459534, lng: 18.68243377189319 },
    zone: 2,
  },
  {
    id: 28,
    name: "Kula F i G",
    position: { lat: 44.53340815586519, lng: 18.69636516553421 },
    zone: 2,
  },
  {
    id: 29,
    name: "Pazar",
    position: { lat: 44.53878776009971, lng: 18.669610943956815 },
    zone: 2,
  },
  {
    id: 30,
    name: "Cipelići (zgrade)",
    position: { lat: 44.53526038420099, lng: 18.680508761696263 },
    zone: 2,
  },
  {
    id: 31,
    name: "Cipelići",
    position: { lat: 44.53520876208369, lng: 18.679688005787387 },
    zone: 2,
  },
  {
    id: 32,
    name: "Mikrostanica",
    position: { lat: 44.53424227286554, lng: 18.68774938487048 },
    zone: 2,
  },
  {
    id: 33,
    name: "1. inžinjerske brigade",
    position: { lat: 44.533308271505916, lng: 18.68697154428165 },
    zone: 2,
  },
  {
    id: 34,
    name: "NLB banka (svi)",
    position: { lat: 44.53375376429888, lng: 18.685362218848695 },
    zone: 2,
  },
  {
    id: 35,
    name: "Titanik",
    position: { lat: 44.533822595503246, lng: 18.682038961910276 },
    zone: 2,
  },
  {
    id: 36,
    name: "Hametova pijaca",
    position: { lat: 44.528892598573464, lng: 18.695990309743834 },
    zone: 2,
  },
  {
    id: 37,
    name: "Dom Armije",
    position: { lat: 44.53315456887053, lng: 18.686085162857697 },
    zone: 2,
  },
  {
    id: 38,
    name: "Gradina",
    position: { lat: 44.53700318887672, lng: 18.69320782224333 },
    zone: 2,
  },
  {
    id: 39,
    name: "Gradina 2",
    position: { lat: 44.539882397289794, lng: 18.692360244250157 },
    zone: 2,
  },
  {
    id: 40,
    name: "Petra Kočića (tužilaštvo)",
    position: { lat: 44.53497573063082, lng: 18.685108891916233 },
    zone: 2,
  },
  {
    id: 41,
    name: "Petra Kočića",
    position: { lat: 44.5356469388078, lng: 18.683685788517145 },
    zone: 2,
  },
  {
    id: 42,
    name: "Kralja Tvrka Prvog",
    position: { lat: 44.535468174316634, lng: 18.685543218236656 },
    zone: 2,
  },
  {
    id: 43,
    name: "Jupiter Aelja",
    position: { lat: 44.53373388846424, lng: 18.686330602399032 },
    zone: 2,
  },
  {
    id: 44,
    name: "Fra Grge Martića",
    position: { lat: 44.53878894834308, lng: 18.671181450120947 },
    zone: 2,
  },
  {
    id: 45,
    name: "Albina Herljevića 2",
    position: { lat: 44.542386870378735, lng: 18.667284200410784 },
    zone: 2,
  },
  {
    id: 46,
    name: "Panonska jezera zapad",
    position: { lat: 44.541209254065535, lng: 18.67682750015427 },
    zone: 3,
  },
];

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);
  const [currentPosition, setPosition] = useState({
    lat: 0,
    lng: 0,
  });
  const [clickLocation, isClicked] = useState();
  const [zoom, setZoom] = useState(10);
  const icon = { url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png" };

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return null;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };
  const showMyLocation = () => {
    console.log(currentPosition);
    if (currentPosition.lat === 0) {
      alert("Enable location first");
    } else {
      isClicked(
        <MarkerF
          key={currentPosition.lat}
          position={currentPosition}
          options={{
            zIndex: 999,
            icon: icon,
          }}
        ></MarkerF>
      );
      setZoom(15);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, [currentPosition.lat, currentPosition.lng, zoom]);

  return (
    <GoogleMap
      zoom={zoom}
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100vw", height: "100vh" }}
      center={currentPosition}
    >
      {markers.map(({ id, name, position, zone }) => (
        <MarkerF
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id && (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <div>
                <PayButton name={name} zone={zone} />
              </div>
            </InfoWindowF>
          )}
        </MarkerF>
      ))}
      {!currentPosition.lat !== 0 && (
        <div className={classes.MyLocation} onClick={showMyLocation}>
          Find my location
        </div>
      )}
      {clickLocation}
    </GoogleMap>
  );
}

export default Map;
