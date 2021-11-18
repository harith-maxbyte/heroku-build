import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
//{Popup,NavigationControl}
import './Styles.css';

const ColoredLine = ({ color }) => (
    <>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <hr
                style={{
                    backgroundColor: color[0],
                    height: 12,
                    width: "100%",
                    borderBottomLeftRadius: 8,
                    borderTopLeftRadius: 8
                }}
            />
            <hr
                style={{
                    backgroundColor: color[1],
                    height: 12,
                    width: "100%",
                }}
            />
            <hr
                style={{
                    backgroundColor: color[2],
                    height: 12,
                    width: "100%",
                }}
            />
            <hr
                style={{
                    backgroundColor: color[3],
                    height: 12,
                    width: "100%",
                }}
            />
            <hr
                style={{
                    backgroundColor: color[4],
                    height: 12,
                    width: "100%",
                    borderBottomRightRadius: 8,
                    borderTopRightRadius: 8
                }}
            />
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: -15, color: "#616060", fontSize: "13px", lineHeight: "20px" }}>
            <p>5k</p>
            <p style={{ paddingLeft: 62 }}>10k</p>
            <p style={{ paddingLeft: 68 }}>20k</p>
            <p style={{ paddingLeft: 68 }}>30k</p>
            <p style={{ paddingLeft: 62 }}>40k</p>
            <p style={{ paddingLeft: 62 }}>50k</p>
        </div>
    </>
);

mapboxgl.accessToken= 'pk.eyJ1IjoiaGFyaXRoa3Y0NyIsImEiOiJja3Zva3Y2N3kxMmFkMnFxZnRzaGM1ZHplIn0.ZHaPXHDqz1uRett0GepUBg';
export default function Map() {

    const mapContainerRef = useRef(null);

    
     useEffect(() => {
        const map = new mapboxgl.Map({

          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-104.9876, 39.7405],
          zoom: 12.5,
          height:"100%",
        //   attributionControl: false
        });
    
        
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    

        return () => map.remove();
      }, []); 



    return (
<>

            <div id="map-container" ref={mapContainerRef} />


            <ColoredLine color={["#9BE6FC", "#5EC8E6", "#52ADD5", "#4593C3", "#377AB2"]} />
        </>
        
    );
}

