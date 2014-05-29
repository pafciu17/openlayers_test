/**
 * User: pawel
 * Date: 29-05-2014
 */
var map;
window.addEventListener('load', function() {
	map = new OpenLayers.Map('map', {
		projection: new OpenLayers.Projection('EPSG:3067')
	});

	var blankLayer = new OpenLayers.Layer("",
		{
			isBaseLayer: true,
			displayInLayerSwitcher: false,
			units: 'm',
			maxResolution: 1,
			minResolution: 0.001,
			maxExtent: new OpenLayers.Bounds(50199.4814, 6582464.0358, 761274.6247, 7799839.8902)
		}
	);
	map.addLayer(blankLayer);

	var layerImageOptions = {
		isBaseLayer: false
	};

	// boundaries for EPSG:3067:

	var graphic = new OpenLayers.Layer.Image(
		'City Lights',
		'img/world.gif',
		new OpenLayers.Bounds(418502, 7172489, 419602, 7173589),
		new OpenLayers.Size(580, 288),
		layerImageOptions
	);
	map.addLayer(graphic);

	var graphic2 = new OpenLayers.Layer.Image(
		'City Lights',
		'img/world.gif',
		new OpenLayers.Bounds(418202, 7172489, 419402, 7173589),
		new OpenLayers.Size(380, 288),
		layerImageOptions
	);
	map.addLayer(graphic2);

//	var features = [];
//	var point = new OpenLayers.Feature.Vector(
//		new OpenLayers.Geometry.Point(
//			419502, 7173489
//		)
//	);
//	features.push(point);
//
//	var vectorLayer = new OpenLayers.Layer.Vector('Points');
//	vectorLayer.addFeatures(features);
//	map.addLayer(vectorLayer);

	map.setCenter(new OpenLayers.LonLat(418502, 7172489), 5);
});