---
layout: default
title: My Experiences
permalink: /about/experiences/

left_label: Puzzle Solvers
left_url: /about/projects/puzzle-solvers/
right_label: Digital Production Assistant
right_url: /about/experiences/digital-production-assistant/
---

<!-- !PAGE CONTENT! -->
<div id="page-about-experiences" class="w3-main">
  <section id="overview" class="w3-container">
    {% assign experiences = site.data.experiences
      | where_exp:"p","p.url contains '/about/experiences/'"
      | sort:"order" %}

    <h1>{{ page.title }}</h1>
    {% include media-list.html items=experiences exclude=page.url %}
  </section>
</div>