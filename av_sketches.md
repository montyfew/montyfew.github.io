---
title: Audiovisual <br> Sketches
layout: default
---
<section class = "av_sketches">
<section class = "video">
{% assign article = site.av_sketches  | first %}
<iframe src = "{{article.video}}" id="av_sketches" width="560" height="315" frameborder="0" allowfullscreen></iframe>

<p>{{ article.content }}</p>
</section>

<section class = "icons">
{% for entry in site.av_sketches %}
  <article class = "project" id = "{{entry.id}}">
    <a href="{{entry.url}}">
      <img src="{{entry.image.src}}" alt="{{entry.image.alt}}" style="border-color: {{entry.color}};">
    </a>
  </article>
{% endfor %}
</section>
</section>