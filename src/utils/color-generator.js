import { interpolateRainbow } from 'd3-scale-chromatic'

/* Must use an interpolated color scale, which has a range of [0, 1] */

const colorRangeInfo = {
    colorStart: 0,
    colorEnd: 1,
    useEndAsStart: false
}

const colorScale = interpolateRainbow;


export function generateLegendColors(dataLength) {
    var { colorStart, colorEnd } = colorRangeInfo;
    var colorRange = colorEnd - colorStart;
    var intervalSize = colorRange / dataLength;
    var i, colorPoint;
    var colorArray = [];

    for (i = 0; i < dataLength; i++) {
        colorPoint = calculatePoint(i, intervalSize, colorRangeInfo);
        colorArray.push(colorScale(colorPoint));
    }

    return colorArray;
}

function calculatePoint(i, intervalSize, colorRangeInfo) {
    var { colorStart, colorEnd, useEndAsStart } = colorRangeInfo;
    return (useEndAsStart
        ? (colorEnd - (i * intervalSize))
        : (colorStart + (i * intervalSize)));
}