---
title: Videography
layout: default
---

<section class = "videography">
{% for entry in site.videography %}
  <article id = "{{entry.id}}">
    <img src="{{entry.image.src}}" alt="{{entry.image.alt}}" style="border-color: {{entry.color}};">
    <a href="{{entry.url}}">
    <section class = "overlay">
      <h2 class = "project-title">{{entry.title}}</h2>
    </section>
    </a>
  </article>
{% endfor %}
</section>