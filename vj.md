---
title: VJing
layout: default
---
<section class = "centered">
Statement of practice.
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