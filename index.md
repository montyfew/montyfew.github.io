---
title: Monty Williams // MA Music (Audiovisual Cultures)
layout: default
head: | 
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
      crossorigin=""/>

  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
  integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
  crossorigin=""></script>

  <script src='//api.tiles.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.3.1/leaflet-omnivore.min.js'></script>

---
# Monty Williams // MA Music (Audiovisual Cultures)

<div id="banner-map" class="map"></div>
<script type="text/javascript">
    let Stamen_Toner = L.tileLayer('https://api.maptiler.com/tiles/uk-osgb10k1888/{z}/{x}/{y}.jpg?key=paglUJQl74h39APJmOFJ', {
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 16,
    ext: 'png'
    });

    let map = L.map('banner-map', {attributionControl: false, zoomControl: false})
      .setView({'lat': 51.50918512396602, 'lng': -0.12824427831868365}, 10);
    map.addLayer(Stamen_Toner);   

    <!-- let kml = omnivore.kml().addTo(map); -->
    let kml = omnivore.kml('/assets/maps/C2C.kml')
    .on('ready', function() {
        map.fitBounds(kml.getBounds());
    })
    .addTo(map);


</script>



<div class = "outer-flex-container">

<section class = "description">
My audiovisual practice is informed by...

contact blah@blah.com

An excerpt from ....
</section>

<section class = "projects">
{% for entry in site.entries %}
  <article class = "project">
    <a href="{{entry.url}}">
      <img src="{{entry.image.src}}" alt="{{entry.image.alt}}">
    </a>
    <h2 class = "project-title">{{entry.title}}</h2>
    {{entry.content}}

  </article>
{% endfor %}

<!-- This spacer is here because otherwise the last article above doesn't
 quite line on the right with the map, somehow it wants to put a gap there-->
<!-- <article class = "spacer"></article> -->

</section>
</div>

