import WorldWind from '@nasaworldwind/worldwind';
import LayerOrder from '../src/util/LayerOrder';
import LayerManager from './LayerManager';

const wwd = new WorldWind.WorldWindow("canvasOne");

new LayerOrder(wwd);

var layers = [
    {layer: new WorldWind.BMNGLayer(), enabled: true, zIndex: 100},
    {layer: new WorldWind.BMNGLandsatLayer(), enabled: true, zIndex: 90},
    {layer: new WorldWind.BingAerialLayer(null), enabled: true, zIndex: 80},
    {layer: new WorldWind.BingAerialWithLabelsLayer(null), enabled: true, zIndex: 70},
    {layer: new WorldWind.BingRoadsLayer(null), enabled: true, zIndex: 60},
    {layer: new WorldWind.CoordinatesDisplayLayer(wwd), enabled: true, zIndex: 40},
    {layer: new WorldWind.ViewControlsLayer(wwd), enabled: true, zIndex: 30}
];

for (var l = 0; l < layers.length; l++) {
    layers[l].layer.enabled = layers[l].enabled;
    layers[l].layer.zIndex = layers[l].zIndex;
    wwd.addLayer(layers[l].layer);
}

new LayerManager(wwd);