---
layout: post
title: Previous Years
nav-menu: true
order: 5
---
<div id="main">
{% assign tiles = site.html_pages | where_exp: "item", "item.previous == true" | sort:"order" %}
<section id="one" class="tiles">
  {% for tile in tiles limit:site.tiles-count %}
  <article>
    <span class="image">
      <img src="/{{ tile.image }}" alt="{{ tile.title }}" />
    </span>
    <header class="major">
      <h3><a href="{{ tile.url  | relative_url }}" class="link">{{ tile.title }}</a></h3>
      <p>{{ tile.description }}</p>
    </header>
  </article>
  {% endfor %}
</section>
</div>



