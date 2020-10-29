import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import SwipeableViews from 'react-swipeable-views';
import CombinationChart from "./charts/CombinationChart";
import DrilldownChart from "./charts/DrilldownChart";
import MapChart from "./charts/MapChart";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const  App = () => {
  return (
    <div className="App">
      <Header text="Algo8 Charts Task" />
      <AutoPlaySwipeableViews interval={8000} enableMouseEvents="true">
        <Card>
          <CombinationChart/>
        </Card>
      <Card>
        <DrilldownChart />
      </Card>
      <Card>
        <MapChart />
      </Card>
      </AutoPlaySwipeableViews>
      
    </div>
  );
}

export default App;
