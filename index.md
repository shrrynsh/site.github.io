---
layout: home
title: Home
---

<!-- This content will be inserted into the {{ content }} section of your home.html layout -->

<section id="additional-content">
  <h2>All Posts Archive</h2>
  <div class="posts-archive">
    {% for post in site.posts %}
      <div class="archive-item">
        <a href="{{ site.baseurl }}{{ post.url }}" class="archive-link">{{ post.title }}</a>
        <span class="archive-date">{{ post.date | date: "%B %d, %Y" }}</span>
      </div>
    {% endfor %}
  </div>
</section>

<style>
#additional-content {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 2rem;
}

#additional-content h2 {
  color: var(--text-primary);
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--accent);
  padding-bottom: 0.5rem;
}

.posts-archive {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.archive-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.archive-item:hover {
  background: #333;
}

.archive-link {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  flex-grow: 1;
}

.archive-link:hover {
  color: var(--accent);
}

.archive-date {
  color: #888;
  font-size: 0.9rem;
  margin-left: 1rem;
  white-space: nowrap;
}

@media (max-width: 600px) {
  .archive-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .archive-date {
    margin-left: 0;
    margin-top: 0.5rem;
  }
}
</style>
