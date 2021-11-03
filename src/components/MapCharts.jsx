import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMaps from "highcharts/modules/map";
import WorldMapGeo from "../assets/WorldMap";
import WorldMapData from "../assets/mapdata.json";

HighchartsMaps(Highcharts);

export function WorldMap() {
  const options = {
    chart: {
      backgroundColor: "#1c1b2b",
      borderRadius: 15,
      height: 600,
    },

    title: {
      text: "Population Figures by Country (2016)",
      style: {
        color: "#fff",
      },
    },

    subtitle: {
      text: "World Population(2016)",
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
        borderColor: "black",
        borderWidth: 0.2,
        states: {
          hover: {
            borderWidth: 1,
            color: "#c7eda4",
          },
        },
      },
    ],
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
