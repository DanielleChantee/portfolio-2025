---
layout: post
title: "My First Blog Post"
date: 2024-11-23 10:00:00 +0000
categories: jekyll blogging
tags: ["jekyll", "blogging", "tutorial"]
---

# My First Blog Post

Welcome to my first blog post! This is where I will start writing about my experiences and insights as a Shopify developer.

## Why Jekyll?

Jekyll is a great tool for creating simple static sites, and it works really well with GitHub Pages. You can write your posts using Markdown or HTML, and Jekyll will process them into static files.

Here's a basic example of Liquid in Jekyll:

{% if site.posts.size > 0 %}

  <ul>
    {% for post in site.posts %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% else %}
  <p>No posts yet!</p>
{% endif %}
