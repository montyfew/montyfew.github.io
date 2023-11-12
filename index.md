---
title: Monty Williams // MA Music (Audiovisual Cultures)
layout: default
---
# Monty Williams // MA Music (Audiovisual Cultures)

<div id="banner-map" class="map"></div>
<script type="text/javascript">
  var map = new maplibregl.Map({
    container: 'banner-map',
    style: 'https://tiles.stadiamaps.com/styles/alidade_smooth.json?api_key=2465c884-87df-4898-8a98-352ae6dc4175',
    center: [12, 53],  // Initial focus coordinate
    zoom: 4
  });

  // Add zoom and rotation controls to the map.
  map.addControl(new maplibregl.NavigationControl());
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
  </article>
{% endfor %}

<!-- This spacer is here because otherwise the last article above doesn't
 quite line on the right with the map, somehow it wants to put a gap there-->
<!-- <article class = "spacer"></article> -->

</section>
</div>

