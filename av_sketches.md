---
title: Audiovisual <br> Sketches
layout: default
---
<section class = "music">
{% for entry in site.av_sketches %}
  <article class = "project" id = "{{entry.id}}">
    <a href="{{entry.url}}">
      <img src="{{entry.image.src}}" alt="{{entry.image.alt}}" style="border-color: {{entry.color}};">
    </a>
    <!-- <h2 class = "project-title">{{entry.title}}</h2> -->
  </article>
{% endfor %}
</section>