---
layout: default
---

{% if page.maps %}
<div id="banner-map" class="map"></div>
{% endif %}

<section class = "narrow" markdown=1>
{{ content }}
</section>

{% if page.maps %}
<script type="module">
    import {defaultMap, customGeojsonStyles, omnivoreLoaders} from "/assets/js/maps.js";

    // define the maps using code from /assets/js/maps.js
    let map = defaultMap();

      {% if page.kml %}
      let customLayer = customGeojsonStyles();
      let filetype = "{{page.kml}}".split(".").slice(-1); // Figure out if it's a kml or gpx file
      let layer = omnivoreLoaders[filetype]('{{page.kml}}', null, customLayer) //Load the file and style it
          .on('ready', () => map.fitBounds(layer.getBounds(), {padding: [50,50]})) // zoom the map once the file has loaded 
          .addTo(map); // Add the layer to the map
      {% endif%}
</script>
{% endif %}