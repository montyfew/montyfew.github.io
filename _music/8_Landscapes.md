---
title: 8 Landscapes

track_folder: /assets/mp3s/8 Landscapes
tracks:
  - name: Window at Night
    src: 01 Window at Night Master v2.mp3
  - name: Gradual Steps
    src: 02 Gradual Steps Master v2.mp3
  - name: Orange Master
    src: 03 Orange Master v2.mp3
  - name: Old Friend Interlude
    src: 04 Old Friend Interlude Master v2.mp3
  - name: My Friend
    src: 05 My Friend 2 Master v2.mp3
  - name: A Folk Song of the Club
    src: 06 A Folk Song of the Club Master v2.mp3
  - name: SD
    src: 07 SD Master v2.mp3
  - name: Thursdays
    src: 08 Thursdays Master v2.mp3
  - name: Coles Corner
    src: 09 Coles Corner Master v2.mp3

image:
    src: /assets/music/8_Landscapes.jpg
    alt: a long exposure night time photograph across the Sheffield hills
---

released August 29, 2020

Written and recorded by Mono Works.

Additional vocals on 'A Folk Song of the Club' by A Paranoid King.

Mixed and mastered by Adam Zejma at Tye Die Tapes, Sheffield.

{% for track in page.tracks %}
{{track.name}}
<audio controls src="{{page.track_folder | uri_escape}}/{{track.src | uri_escape}}">
    <a href="{{page.track_folder | uri_escape}}/{{track.src | uri_escape}}"> Download audio </a>
</audio>
{% endfor %}

