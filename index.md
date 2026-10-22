---
layout: home
title: Home
landing-title: 'Halloween On Hill Top'
description: null
image: null
author: null
show_tile: false
order: 1
nav-menu: true
---


🍁🍂 For Halloween 2026 we are decorating the outside of 21 Hill Top in [aid of Cancer Research]({{ site.donations-url }}). I feel a ghost-filled graveyard coming on… Our spoooooky decorations will be up on:
- Friday 30th October 5-7pm (for those who want a quieter visit)
- Saturday 31st October (Halloween!) 5-8pm

@ 21 Hill Top Avenue, Cheadle Hulme, SK8 7HN

Hope you can come and take a look!

<ul class="actions">
    <li><a href="{{ site.donations-url }}" class="button special">make a donation</a></li>
</ul>

As you may know, our family, with the help of some fab friends, used to put on a 'spooky tour' every Halloween in [aid of Cancer Research UK]({{ site.donations-url }}).

Sadly, it looks like 2022's 'Facility 21' was our last tour. The vast majority of our amazing scare team (of twenty!) have gone off to University or pastures new (and we can't run a terrifying tour without our scare team!). But that's not the end of the story. Since 2023 we have decorated the front of our house in scary ways for all to see!

[Since 2016](/previous/) we've done six spooky tours and four spine-chilling graveyards! We wanted to thank you all so much for all your support, and all your donations, over the past ten years.<br>
Sally, John and Team Halloween! Xxx 🍂🍁🍂

### 👻 Spine-tingling photos from previous years

Brave enough to look back? Pick a year to see the scares we've served up:

{% assign years = site.html_pages | where_exp: "item", "item.previous == true" | sort: "order" %}
<ul class="actions small">
{% for year in years %}
    <li style="margin: 0.5em 0;"><a href="{{ year.url | relative_url }}" class="button" title="{{ year.title }}">{{ year.title | split: ' - ' | first }}</a></li>
{% endfor %}
</ul>
