var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Earthquakes_1 = new ol.format.GeoJSON();
var features_Earthquakes_1 = format_Earthquakes_1.readFeatures(json_Earthquakes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Earthquakes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Earthquakes_1.addFeatures(features_Earthquakes_1);
var lyr_Earthquakes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Earthquakes_1, 
                style: style_Earthquakes_1,
                popuplayertitle: 'Earthquakes',
                interactive: true,
    title: 'Earthquakes<br />\
    <img src="styles/legend/Earthquakes_1_0.png" /> 2.6 - 3.8<br />\
    <img src="styles/legend/Earthquakes_1_1.png" /> 3.8 - 5.1<br />\
    <img src="styles/legend/Earthquakes_1_2.png" /> 5.1 - 6.3<br />\
    <img src="styles/legend/Earthquakes_1_3.png" /> 6.3 - 7.6<br />\
    <img src="styles/legend/Earthquakes_1_4.png" /> 7.6 - 8.8<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Earthquakes_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Earthquakes_1];
lyr_Earthquakes_1.set('fieldAliases', {'id': 'id', 'mag': 'mag', 'place': 'place', 'time': 'time', 'updated': 'updated', 'tz': 'tz', 'url': 'url', 'detail': 'detail', 'felt': 'felt', 'cdi': 'cdi', 'mmi': 'mmi', 'alert': 'alert', 'status': 'status', 'tsunami': 'tsunami', 'sig': 'sig', 'net': 'net', 'code': 'code', 'ids': 'ids', 'sources': 'sources', 'types': 'types', 'nst': 'nst', 'dmin': 'dmin', 'rms': 'rms', 'gap': 'gap', 'magType': 'magType', 'type': 'type', 'title': 'title', });
lyr_Earthquakes_1.set('fieldImages', {'id': 'TextEdit', 'mag': 'TextEdit', 'place': 'TextEdit', 'time': 'TextEdit', 'updated': 'TextEdit', 'tz': 'TextEdit', 'url': 'TextEdit', 'detail': 'TextEdit', 'felt': 'Range', 'cdi': 'TextEdit', 'mmi': 'TextEdit', 'alert': 'TextEdit', 'status': 'TextEdit', 'tsunami': 'Range', 'sig': 'Range', 'net': 'TextEdit', 'code': 'TextEdit', 'ids': 'TextEdit', 'sources': 'TextEdit', 'types': 'TextEdit', 'nst': 'Range', 'dmin': 'TextEdit', 'rms': 'TextEdit', 'gap': 'Range', 'magType': 'TextEdit', 'type': 'TextEdit', 'title': 'TextEdit', });
lyr_Earthquakes_1.set('fieldLabels', {'id': 'no label', 'mag': 'no label', 'place': 'no label', 'time': 'no label', 'updated': 'no label', 'tz': 'no label', 'url': 'no label', 'detail': 'no label', 'felt': 'no label', 'cdi': 'no label', 'mmi': 'no label', 'alert': 'no label', 'status': 'no label', 'tsunami': 'no label', 'sig': 'no label', 'net': 'no label', 'code': 'no label', 'ids': 'no label', 'sources': 'no label', 'types': 'no label', 'nst': 'no label', 'dmin': 'no label', 'rms': 'no label', 'gap': 'no label', 'magType': 'no label', 'type': 'no label', 'title': 'no label', });
lyr_Earthquakes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});