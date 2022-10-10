var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_ug2_modified_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ug2_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ug2_modified_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3327583.877338, -9337.925710, 4017304.193059, 455170.897248]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_ug2_modified_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ug2_modified_1];
