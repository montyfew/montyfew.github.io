---
title: Live Visuals
layout: default
---
<section class = "centered">
A series of collaborations where I have created live visuals for other artists, guided by their sonic worlds.
</section>
<br>

<section class = "vj">
{% for entry in site.vj %}
  <article class = "project" id = "{{entry.id}}">
    <a href="{{entry.url}}">
      <img src="{{entry.image.src}}" alt="{{entry.image.alt}}" style="border-color: {{entry.color}};">
    </a>
    <h2 class = "project-title">{{entry.title}}</h2>
    <!-- {{entry.content}} -->
  </article>
{% endfor %}
</section>