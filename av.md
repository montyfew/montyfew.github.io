---
title: Audiovisual <br> Projects
layout: default
permalink: /av
redirect_from:
  - /av_projects
---
<div id="banner-map" class="map"></div>

<section class = "projects">
  <section class = "description" markdown="1">

  A selection of projects stemming from studying on the [Audiovisual Cultures][website] programme at Goldsmiths.

[website]: https://www.gold.ac.uk/pg/ma-music-audiovisual-cultures/

  </section>

{% for entry in site.av_projects %}
  <article class = "project" id = "{{entry.id}}">
    <a href="{{entry.url}}">
      <img src="{{entry.image.src}}" alt="{{entry.image.alt}}">
    </a>
    <h2 class = "project-title">{{entry.title}}</h2>
    {{entry.content}}

  </article>
{% endfor %}

</section>

<script type="text/javascript" type="module">
    import {defaultMap, customGeojsonStyles} from "/assets/js/maps.js";

    // define the maps using code from /assets/js/maps.js
    let map = defaultMap();

    let layers = {};
    let customLayer, section, filetype, onEachFeature;
    let omnivore_loaders = {"kml" : omnivore.kml, "gpx" : omnivore.gpx};

    {% for entry in site.av_projects %}
      {% if entry.kml %}
      section = document.getElementById("{{entry.id}}"); // Get the section associated with this kml file
      customLayer = customGeojsonStyles(section.querySelector("img")); // Pass that to the styles so we can set hover effects
      filetype = "{{entry.kml}}".split(".").slice(-1); // Figure out if it's a kml or gpx file
      layers["{{entry.id}}"] = omnivore_loaders[filetype]('{{entry.kml}}', null, customLayer) //Load the file and style it
        .addTo(map); // Add the layer to the map

      section.onmouseover = (e) => { // When the section is hovered, center the associated maps points
        map.flyToBounds(layers["{{entry.id}}"].getBounds(), {padding: [50,50]});
      }

      {% endif%}
    {% endfor %}


</script>

