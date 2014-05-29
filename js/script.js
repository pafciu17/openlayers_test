/**
 * User: pawel
 * Date: 29-05-2014
 */

window.addEventListener('load', function() {
	var map = new OpenLayers.Map('map');

	var blankLayer = new OpenLayers.Layer("", {isBaseLayer: true, displayInLayerSwitcher: false});
	map.addLayer(blankLayer);

	var layerImageOptions = {
		isBaseLayer: false,
		displayOutsideMaxExtent: true,
		maxResolution: .625
	};

	var graphic = new OpenLayers.Layer.Image(
		'City Lights',
		'img/world.gif',
		new OpenLayers.Bounds(-9, -4.759, 9, 4.759),
		new OpenLayers.Size(580, 288),
		layerImageOptions
	);
	map.addLayer(graphic);

	var graphic2 = new OpenLayers.Layer.Image(
		'City Lights',
		'img/world.gif',
		new OpenLayers.Bounds(-29, 4.759, -11, 12.759),
		new OpenLayers.Size(580, 288),
		layerImageOptions
	);
	map.addLayer(graphic2);

	var graphic2 = new OpenLayers.Layer.Image(
		'City Lights',
		'img/world.gif',
		new OpenLayers.Bounds(-25, 25.759, -7, 33.759),
		new OpenLayers.Size(580, 288),
		layerImageOptions
	);
	map.addLayer(graphic2);


	var features = [];
	var point = new OpenLayers.Feature.Vector(
		new OpenLayers.Geometry.Point(
			0, 0
		)
	);
	features.push(point);

	var vectorLayer = new OpenLayers.Layer.Vector('Points');
	vectorLayer.addFeatures(features);
	map.addLayer(vectorLayer);

	map.zoomToMaxExtent();
});