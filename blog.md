---
title: Radio
layout: default
---

<!-- <article class="h-entry blogroll {% if is_draft %}draft{%endif%}">

<a class="u-uid u-url" href="{{ post.url }}" aria-label="Blog Post: {{ post.title}}">
<figure>
<img
    src = "{{ post.thumbnail | default: post.image}}"
    class = "{{ post.image_class }} u-photo no-zoom"
    alt="{{post.alt | smartify}}"
    >
</figure>
</a>

<section class="transition-container" style="view-transition-name: {{post.slug}}">
  <section class="title-date-container">
    <h2 class="p-name blogroll-title"><a class="u-uid u-url" href="{{ post.url }}">{{ post.title }}</a></h2>
    <time class="dt-published" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%b %Y' }}</time>
  </section>
  <summary class="p-summary">{{ post.excerpt | markdownify | remove: '<p>' | remove: '</p>' }}</summary>
</section>
</article> -->

<section class = "blog">
{% for entry in site.blog %}
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