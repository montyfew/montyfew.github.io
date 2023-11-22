---
layout: default
---

<h1>{{page.title}}</h1>

<div id="banner-map" class="map"></div>

{{ content }}

<script type="text/javascript">
    let api_key = "9d825669-7c09-49be-89eb-1f4c8a50861d";
    let Stamen_Toner = L.tileLayer(`https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png?api_key=${api_key}`, {
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
    });

    let Alidade_Smooth = L.tileLayer(`https://tiles-eu.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=${api_key}`, {
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
    });

    let Alidade_Smooth_Greyscale = L.tileLayer(`https://tiles-eu.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=${api_key}`, {
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png',
    className: 'alidade_smooth_greyscale'
    });

    var maps = {
    "Stamen Toner": Stamen_Toner,
    "Alidade Smooth" : Alidade_Smooth,
    "Alidade Smooth (greyscale)" : Alidade_Smooth_Greyscale,
    };


    let map = L.map('banner-map', {attributionControl: false, zoomControl: false})
      .setView({'lat': 51.50918512396602, 'lng': -0.12824427831868365}, 10);
    
    map.addLayer(Alidade_Smooth_Greyscale);   
    let layerControl = L.control.layers(maps).addTo(map);

    let omnivore_loaders = {"kml" : omnivore.kml, "gpx" : omnivore.gpx};

    {% if page.kml %}
    customLayer = L.geoJson(null, {
    style: function(feature) {
        return { color: '{{page.color}}' };
    }
    });
    let filetype = "{{page.kml}}".split(".").slice(-1);
    let layer = omnivore_loaders[filetype]('{{page.kml}}', null, customLayer).on('ready',
     function() {
      map.fitBounds(layer.getBounds(), {padding: [50,50]});
    }).addTo(map);

    {% endif%}


</script>