import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Map specific countries to specific colors based on the image
const colorMap: Record<string, string> = {
  "United States of America": "#f59e0b", // orange
  "Brazil": "#f43f5e", // red/pink
  "China": "#8b5cf6", // purple
  "Saudi Arabia": "#0d9488", // teal
  "Indonesia": "#10b981", // green
  "Democratic Republic of the Congo": "#3b82f6", // blue
  "Angola": "#3b82f6" // blue
};

const SalesMapping = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 h-full flex flex-col items-center">
      <h2 className="text-base font-semibold text-slate-800 mb-2 self-start">Sales Mapping by Country</h2>
      <div className="w-full flex-1 flex items-center justify-center">
        <ComposableMap 
          projection="geoMercator" 
          projectionConfig={{ scale: 120 }}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const color = colorMap[geo.properties.name] || "#e2e8f0";
                return (
                  <Geography 
                    key={geo.rsmKey} 
                    geography={geo} 
                    fill={color} 
                    stroke="#ffffff"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: color !== "#e2e8f0" ? color : "#cbd5e1" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default SalesMapping;
