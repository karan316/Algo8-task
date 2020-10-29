import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.world';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Maps, World, FusionTheme);

const chartConfigs = {
  type: 'world',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {
    "chart": {
      "caption": "Map Chart",
      "subcaption": "Apple Market Share",
      "numbersuffix": "%",
      "includevalueinlabels": "1",
      "labelsepchar": ": ",
      "entityFillHoverColor": "#FFF9C4",
      "theme": "fusion"
    },
    "colorrange": {
      "minvalue": "0",
      "code": "#FFE0B2",
      "gradient": "1",
      "color": [
        {
          "minvalue": "1.0",
          "maxvalue": "25.0",
          "color": "#FFD74D"
        },
        {
          "minvalue": "25.0",
          "maxvalue": "50.0",
          "color": "#FB8C00"
        },
        {
          "minvalue": "50.0",
          "maxvalue": "100.0",
          "color": "#E65100"
        }
      ]
    },
    "data": [
      {
        "id": "NA",
        "value": "56",
        "showLabel": "1"
      },
      {
        "id": "SA",
        "value": "12",
        "showLabel": "1"
      },
      {
        "id": "AS",
        "value": "17",
        "showLabel": "1"
      },
      {
        "id": "EU",
        "value": "27",
        "showLabel": "1"
      },
      {
        "id": "AF",
        "value": "10",
        "showLabel": "1"
      },
      {
        "id": "AU",
        "value": "57",
        "showLabel": "1"
      }
    ]
  },
};
class MapChart extends Component {
  render () {
    return <ReactFC {...chartConfigs} />;
  }
}

export default MapChart;