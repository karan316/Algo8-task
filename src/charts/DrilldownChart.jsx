//Including react
import React, {
} from "react";


import ReactFC from "react-fusioncharts";

const chartConfigs = {
    type: "column2d", 
    width: "700", 
    height: "400", 
    dataFormat: "json", 
    dataSource: {
        
        chart: {
            caption: "Drilldown chart",
            subcaption: "Apple Sales",
            xaxisname: "Product",
            yaxisname: "Amount (In INR)",
            numberprefix: "₹",
            theme: "fusion",
            rotateValues: "0"
        },
        data: [{
                label: "iPhone",
                value: "810000",
                link: "newchart-xml-iphone"
            },
            {
                label: "MacBook",
                value: "620000",
                link: "newchart-xml-macbook"
            },
            {
                label: "iPad",
                value: "350000",
                link: "newchart-xml-ipad"
            }
        ],
        linkeddata: [{
                id: "iphone",
                linkedchart: {
                    chart: {
                        caption: "iPhone Sales",
                        subcaption: "Last year",
                        numberprefix: "₹",
                        theme: "fusion",
                        rotateValues: "0",
                        plottooltext: "$label, $dataValue,  $percentValue"
                    },
                    data: [{
                            label: "Q1",
                            value: "157000"
                        },
                        {
                            label: "Q2",
                            value: "172000"
                        },
                        {
                            label: "Q3",
                            value: "206000"
                        },
                        {
                            label: "Q4",
                            value: "275000"
                        }
                    ]
                }
            },
            {
                id: "macbook",
                linkedchart: {
                    chart: {
                        caption: "MacBook Sales",
                        subcaption: "Last year",
                        numberprefix: "₹",
                        theme: "fusion",
                        plottooltext: "$label, $dataValue,  $percentValue"
                    },
                    data: [{
                            label: "Q1",
                            value: "102000"
                        },
                        {
                            label: "Q2",
                            value: "142000"
                        },
                        {
                            label: "Q3",
                            value: "187000"
                        },
                        {
                            label: "Q4",
                            value: "189000"
                        }
                    ]
                }
            },
            {
                id: "ipad",
                linkedchart: {
                    chart: {
                        caption: "iPad Sales",
                        subcaption: "Last year",
                        numberprefix: "₹",
                        theme: "fusion",
                        rotateValues: "0",
                        plottooltext: "$label, $dataValue,  $percentValue"
                    },
                    data: [{
                            label: "Q1",
                            value: "45000"
                        },
                        {
                            label: "Q2",
                            value: "72000"
                        },
                        {
                            label: "Q3",
                            value: "95000"
                        },
                        {
                            label: "Q4",
                            value: "108000"
                        }
                    ]
                }
            }
        ]
    }
};


export default class DrilldownChart extends React.Component {
    render() {
        return <ReactFC {
            ...chartConfigs}
             />;
    }
}