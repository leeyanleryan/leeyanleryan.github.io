---
layout: default
title: My Projects
permalink: /about/projects/

left_label: Profile
left_url: /about/profile/
right_label: Orbital NUqueSt
right_url: /about/projects/orbital-nuquest/
---

<!-- !PAGE CONTENT! -->
<div id="page-about-projects" class="w3-main">
  <section id="overview" class="w3-container">
    {% assign projects = site.data.projects
      | where_exp:"p","p.url contains '/about/projects/'"
      | sort:"order" %}

    <h1>{{ page.title }}</h1>
    {% include media-list.html items=projects exclude=page.url %}
  </section>
</div>