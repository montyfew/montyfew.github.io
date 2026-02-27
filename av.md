---
title: Audiovisual <br> Projects
layout: default
permalink: /av
maps: true
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
    {{entry.description | markdownify}}

  </article>
{% endfor %}

</section>

<script type="text/javascript" type="module">
    VectorTextProtocol.addProtocols(maplibregl);

    const map = new maplibregl.Map({
      style: '/assets/maps/map_style.json',
      center: [-0.12824427831868365,51.50918512396602],
      zoom: 9,
      container: 'banner-map',
      attributionControl: false,
    })

    map.on('load', () => {
      const layers = map.getStyle().layers;
      let firstSymbolId;
      for (let i = 0; i < layers.length; i++) {
          if (layers[i].type === 'symbol') {
              firstSymbolId = layers[i].id;
              break;
          }
      }

      {% for entry in site.av_projects %}
        {% if entry.kml %}

        {
        const id = "{{entry.id}}";
        const section = document.getElementById(id); // Get the section associated 
        // with this kml file
        const img = section.querySelector("img");

        map.addSource(id, {
          'type': 'geojson',
          'data': "kml://{{entry.kml}}",
        });

        map.addLayer({
          'id': "circle-" + id,
          'type': 'circle',
          'source': id,
          'paint': {
            'circle-opacity': 0.6,
            'circle-color': 'gray',
            'circle-stroke-color': 'white',
            'circle-radius': 5,
            'circle-stroke-width': 1,
          },
          'filter': ['==', '$type', 'Point']
        }, firstSymbolId);

        map.addLayer({
            'id': "line-" + id,
            'type': 'line',
            'source': id,
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': 'white',
                'line-width': 2,
            },
            'filter': ['==', '$type', 'LineString']
        }, firstSymbolId);

        map.addLayer({
            'id': "fill-" + id,
            'type': 'fill',
            'source': id,
            'paint': {
              'fill-opacity': 0.3,
              'fill-color': 'white',
              'fill-outline-color': 'gray'
            },
            'filter': ['==', '$type', 'Polygon']
        }, firstSymbolId);

      section.onmouseover = (e) => {
        const geojson = map.getStyle().sources["{{entry.id}}"].data;
        let bounds = new maplibregl.LngLatBounds();

        for (let feature of geojson.features) {
          console.log(feature.geometry.type);
          let coordinates = feature.geometry.coordinates;
          if (feature.geometry.type === "Point") {
            bounds.extend(coordinates.slice(0,2));
          }
          else if (feature.geometry.type === "LineString") {
            for (let coord of coordinates) {
              bounds.extend(coord);
            }
          }

        }
        console.log(bounds);

        map.fitBounds(bounds, {
            padding: 20
        });
      };

      map.on('mousemove', ["circle-" + id, "line-" + id, "fill-" + id], (e) => {
        img.dataset.highlight = true;
      });

      map.on('mouseleave', ["circle-" + id, "line-" + id, "fill-" + id], (e) => {
        img.dataset.highlight = false;
      });

    }
    {% endif%}
    {% endfor %}

    });

    //   customLayer = customGeojsonStyles(section.querySelector("img")); // Pass that to the styles so we can set hover effects
    //   filetype = "{{entry.kml}}".split(".").slice(-1); // Figure out if it's a kml or gpx file
    //   layers["{{entry.id}}"] = omnivore_loaders[filetype]('{{entry.kml}}', null, customLayer) //Load the file and style it
    //     .addTo(map); // Add the layer to the map


</script>

