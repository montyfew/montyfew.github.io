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

<section class = "projects">
  <section class = "description">
  My audiovisual practice is informed by...

  contact blah@blah.com

  An excerpt from ....
  </section>

{% for entry in site.entries %}
  <article class = "project" id = "{{entry.id}}">
    <a href="{{entry.url}}">
      <img src="{{entry.image.src}}" alt="{{entry.image.alt}}" style="border-color: {{entry.color}};">
    </a>
    <h2 class = "project-title">{{entry.title}}</h2>
    {{entry.content}}

  </article>
{% endfor %}

</section>

<script type="text/javascript">
    let Stamen_Toner = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png?api_key=9d825669-7c09-49be-89eb-1f4c8a50861d', {
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 16,
    ext: 'png'
    });

    let map = L.map('banner-map', {attributionControl: false, zoomControl: false})
      .setView({'lat': 51.50918512396602, 'lng': -0.12824427831868365}, 10);
    map.addLayer(Stamen_Toner);   


    let layers = {};
    let customLayer, section, filetype;
    let omnivore_loaders = {"kml" : omnivore.kml, "gpx" : omnivore.gpx};

    {% for entry in site.entries %}
      {% if entry.kml %}
      customLayer = L.geoJson(null, {
        style: function(feature) {
            return { color: '{{entry.color}}' };
        }
      });
      filetype = "{{entry.kml}}".split(".").slice(-1);
      layers["{{entry.id}}"] = omnivore_loaders[filetype]('{{entry.kml}}', null, customLayer).addTo(map);

      section = document.getElementById("{{entry.id}}");
      section.onmouseover = (e) => {
        map.fitBounds(layers["{{entry.id}}"].getBounds());
      }

      {% endif%}
    {% endfor %}


</script>

