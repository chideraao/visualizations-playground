import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMaps from "highcharts/modules/map";
import WorldMapGeo from "@highcharts/map-collection/custom/world-palestine-highres.geo.json";
import WorldMapData from "../assets/mapdata.json";
import USMapGeoJSON from "@highcharts/map-collection/countries/us/us-all-all.geo.json";

HighchartsMaps(Highcharts);

export function WorldMap() {
  const options = {
    chart: {
      backgroundColor: "#1c1b2b",
      borderRadius: 15,
      height: 600,
    },

    title: {
      text: "Simple Chloropleth Map",
      style: {
        color: "#fff",
      },
    },

    subtitle: {
      text: "Source: <a style='color:#fff' href='https://datahub.io/JohnSnowLabs/population-figures-by-country'>Datahub.io (2016)</a>",
      style: {
        color: "#fff",
      },
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },

    colorAxis: {
      min: 1,
      max: 200000000,
      type: "logarithmic",
    },

    series: [
      {
        type: "map",
        data: WorldMapData.CountryPopulation,
        mapData: WorldMapGeo,
        joinBy: ["iso-a3", "country"],
        name: "Population",
        borderColor: "#fff",
        borderWidth: 0.2,
        states: {
          hover: {
            borderWidth: 1,
            color: "#c7eda4",
          },
        },
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div style={{ minWidth: "360px", maxWidth: "800px", margin: "1em auto" }}>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"mapChart"}
        options={options}
      />
    </div>
  );
}
export function USMap() {
  const options = {
    chart: {
      backgroundColor: "#1c1b2b",
      borderRadius: 15,
      height: 600,
    },

    title: {
      text: "Chloropleth Map with over 3000 Data Points",
      style: {
        color: "#fff",
      },
    },

    subtitle: {
      text: "Source: <a style='color:#fff' href='https://www.bls.gov/lau/#tables'>bls.gov (2021)</a>",
      style: {
        color: "#fff",
      },
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },

    colorAxis: {
      min: 1,
      max: 10,
      type: "logarithmic",
      labels: {
        format: "{value}%",
      },
    },

    series: [
      {
        type: "map",
        data: WorldMapData.unemploymentData,
        mapData: USMapGeoJSON,
        joinBy: ["hc-key", "code"],
        name: "Unemployment Rate",
        borderColor: "#000",
        borderWidth: 0.2,
        states: {
          hover: {
            borderWidth: 1,
            color: "#c7eda4",
          },
        },
        tooltip: {
          valueSuffix: "%",
        },
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div style={{ minWidth: "360px", maxWidth: "800px", margin: "1em auto" }}>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"mapChart"}
        options={options}
      />
    </div>
  );
}
