import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

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
const MAPBOX_TOKEN = 'pk.eyJ1IjoiaGFyaXRoa3Y0NyIsImEiOiJja3Zva3Y2N3kxMmFkMnFxZnRzaGM1ZHplIn0.ZHaPXHDqz1uRett0GepUBg';
export default function Map() {

    const [viewport, setViewport] = useState({
        latitude: 1.3521,
        longitude: 103.8198,
        zoom: 9,
        width: "200%",
        height: "200%"
         
    });

		
    return (
        
         <div style={{display:"block",height:135,padding:10,borderRadius:8,marginTop:-20}}>
           {/* <Grid item xs={12} sm={12} md={5}> */}
               {/* <Card {...styles}> */}
            <ReactMapGL
                mapboxApiAccessToken={MAPBOX_TOKEN}
                {...viewport}
                onViewportChange={(viewport) => setViewport(viewport)}
                //
                //mapbox://styles/harithkv47/ckvq4u0ctflu514nnayrhyvo0
                mapStyle="mapbox://styles/mapbox/streets-v11"
            />
            <ColoredLine color={["#9BE6FC", "#5EC8E6", "#52ADD5", "#4593C3", "#377AB2"]} />
         </div>
    );
}

