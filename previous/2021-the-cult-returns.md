---
layout: post
title: 2021 - The Cult Returns
image: assets/images/2021/main.jpg
previous: true
order: 1
---

Article text would go here lorum ipsum

<div class="box alt">
	<div class="row 50% uniform">
        {% for image in site.static_files %}
            {% if image.path contains 'images/2021' %}
                <div class="4u"><span class="image fit square-fit"><img src="{{ site.baseurl | append: image.path | resize: "800x800>" }}" alt="" /></span></div>
            {% endif %}
        {% endfor %}
	</div>
</div>
