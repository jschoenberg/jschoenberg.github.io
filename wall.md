---
layout: page
title: The Wall
section: 02 / Curated
permalink: /wall/
---
<p class="page-intro">When they say "throw shit at the wall and see what sticks", this is what they are referring to. Typically these are ideas that I have/had and just want to note should I come back to them</p>
<div class="wall-list">
  <article class="wall-item">
    <h2>Easy Entrance</h2>
    <div class="wall-components">
      <section class="wall-component">
        <div class="eyebrow">Idea</div>
        <p>Facial recognition camera to unlock my door</p>
      </section>
      <section class="wall-component">
        <div class="eyebrow">Description</div>
        <p>When taking in groceries, items from the store, or just when tired, it can be a bit annoying to pull out my keys or phone to unlock my door. Goal is to have a camera that recognizes my face (and other security mechanisms) and have it unlock my lock for me.</p>
      </section>
      <section class="wall-component">
        <div class="eyebrow">Considerations</div>
        <p>1. ML, computer vision
            2.Requires getting a camera
            3. Need to analyze power requirements
            4. Need to reverse engineer lock/unlock mechanism that my phone uses</p>
      </section>
    </div>
  </article>
  <article class="wall-item">
    <h2>Anti-Instrumentation Library</h2>
    <div class="wall-components">
      <section class="wall-component">
        <div class="eyebrow">Idea</div>
        <p>Detection and Defense against Dynamic Instrumentation</p>
      </section>
      <section class="wall-component">
        <div class="eyebrow">Description</div>
        <p>A C ABI compatible library that performs detection and defense of dynamic instrumentation mechanisms. Not OS/environment agnostic, OS/environment considerate</p>
      </section>
      <section class="wall-component">
        <div class="eyebrow">Considerations</div>
        <p>1. Only raises price of instrumentation, nothing that is fully client-side is 100% to work
            2. Android and Linux have same OS but far different permissions. Must be taken into account
            3. Very complex topic, needs lots of research</p>
      </section>
    </div>
  </article>
</div>
