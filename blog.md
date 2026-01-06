---
title: Blog
layout: default
---

<section class = "blog">
{% assign sorted = site.blog | sort: 'date' | reverse %}
{% for entry in sorted %}
  <a href="{{entry.url}}">
  <article class = "blog" id = "{{entry.id}}">
  <time datetime="{{ entry.date | date_to_xmlschema }}">{{ entry.date | date: '%b %Y' }}</time>
    <img src="{{entry.image.src}}" alt="{{entry.image.alt}}" style="border-color: {{entry.color}};">
    <h2 class = "p-name">{{entry.title}}</h2>
    <summary class="p-summary">{{ entry.description | markdownify | remove: '<p>' | remove: '</p>' }}</summary>
  </article>
  </a>
{% endfor %}
</section>