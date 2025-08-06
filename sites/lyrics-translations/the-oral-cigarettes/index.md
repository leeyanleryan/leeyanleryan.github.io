---
layout: default
title: The Oral Cigarettes
permalink: /lyrics-translations/the-oral-cigarettes/

left_label: Ref:rain
left_url: /lyrics-translations/aimer/ref-rain/
right_label: Amy
right_url: /lyrics-translations/the-oral-cigarettes/amy/
---

<!-- !PAGE CONTENT! -->
<div id="page-lyrics-translations-toc" class="w3-main">
  <section id="overview" class="w3-container">
    {% assign the-oral-cigarettes = site.data.the-oral-cigarettes
      | where_exp:"p","p.url contains '/lyrics-translations/the-oral-cigarettes/'"
      | sort:"title" %}

    <h2><b>{{ page.title }}</b></h2>
    {% include media-list.html items=the-oral-cigarettes exclude=page.url %}
  </section>
</div>