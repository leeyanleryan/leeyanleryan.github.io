---
layout: default
title: Aimer
permalink: /lyrics-translations/aimer/

left_label: Hobbies
left_url: /about/hobbies/
right_label: Amy
right_url: /lyrics-translations/the-oral-cigarettes/amy/
---

<!-- !PAGE CONTENT! -->
<div id="page-lyrics-translations-aimer" class="w3-main">
  <section id="overview" class="w3-container">
    {% assign aimer = site.data.aimer
      | where_exp:"p","p.url contains '/lyrics-translations/aimer/'"
      | sort:"title" %}

    <h2><b>{{ page.title }}</b></h2>
    {% include media-list.html items=aimer exclude=page.url %}
  </section>
</div>