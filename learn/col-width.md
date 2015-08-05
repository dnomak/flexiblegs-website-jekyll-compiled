---
layout: default
title: col(@width)
permalink: /learn/col-width/
---

<div id="css">
  <div class="dn-browser">
    <div class="dn-browser-header">
      <div class="dn-browser-button">
        <div class="wrap xl-auto">
          <div class="col"><div class="dn-browser-button__circle"></div></div>
          <div class="col"><div class="dn-browser-button__circle"></div></div>
          <div class="col"><div class="dn-browser-button__circle"></div></div>
        </div>
      </div>
      <div class="dn-style--title">col(<span>@width</span>) (css)</div>
      <a href="/" class="dn-logo"><img src="/img/flexiblegs-logo-white.png" alt=""></a>
    </div>
    <div class="dn-browser-body">
      <div class="dn-browser-body__pre">
        <pre class="is-not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button">view compiled</div><div class="dn-tag dn-tag--gray dn-tag--bottom">html</div><!--
          -->&lt;div class="wrap"&gt;<br/><!--
          -->  &lt;div class="col <span>xl-1-3</span>"&gt;01&lt;/div&gt;<br/><!--
          -->  &lt;div class="col <span>xl-1-3</span>"&gt;02&lt;/div&gt;<br/><!--
          -->  &lt;div class="col <span>xl-1-3</span>"&gt;03&lt;/div&gt;<br/><!--
          -->&lt;/div&gt;<!--
          --><div class="comment">&lt;!-- 1-1 --&gt;</div><!--
          --><div class="comment">&lt;!-- 1-2 --&gt;</div><!--
          --><div class="comment">&lt;!-- 1-3, 2-3 --&gt;</div><!--
          --><div class="comment">&lt;!-- 1-4, 2-4, 3-4 --&gt;</div><!--
          --><div class="comment">&lt;!-- 1-5, 2-5, 3-5, 4-5 --&gt;</div><!--
          --><div class="comment">&lt;!-- 1-6, 2-6, 3-6, 4-6, 5-6 --&gt;</div><!--
          --><div class="comment">&lt;!-- 1-7, 2-7, 3-7, 4-7, 5-7, 6-7 --&gt;</div><!--
          --><div class="comment">&lt;!-- 1-8, 2-8, 3-8, 4-8, 5-8, 6-8, 7-8 --&gt;</div><!--
          --><div class="comment">&lt;!-- 1-9, 2-9, 3-9, 4-9, 5-9, 6-9, 7-9, 8-9, --&gt;</div><!--
          --><div class="comment">&lt;!-- 1-10, 2-10, 3-10, 4-10, 5-10, 6-10, 7-10, 8-10, 9-10, --&gt;</div><!--
          --><div class="comment">&lt;!-- 1-11, 2-11, 3-11, 4-11, 5-11, 6-11, 7-11, 8-11, 9-11, 10-11, --&gt;</div><!--
          --><div class="comment">&lt;!-- 1-12, 2-12, 3-12, 4-12, 5-12, 6-12, 7-12, 8-12, 9-12, 10-12, 11-12, --&gt;</div><!--
        --></pre>
        <pre class="is-compiled"><div class="dn-tag dn-tag--black dn-tag--top dn-tag--button">close</div><!--
          --><span>wrap > col(@width)</span><br/><!--
          -->  width: @width;<br/><!--
          -->  // Formule<br/><!--
          -->  // @width = 100% / @row * @col<!--
        --></pre>
      </div>
      <div class="dn-browser-body__item">
        <div class="wrap dn-style--wrap">
          <div class="col xl-1-3"><div class="dn-style--col">01</div></div>
          <div class="col xl-1-3"><div class="dn-style--col">02</div></div>
          <div class="col xl-1-3"><div class="dn-style--col">03</div></div>
        </div>
      </div>
      <div class="dn-browser-footer">
        <div class="wrap xl-gutter-24 xl-outside-24 xl-center xl-auto">
          <div class="col">
            <a href="http://codepen.io/dnomak/pen/LVXqRB?editors=110" class="dn-button dn-button--link">
              http://codepen.io/dnomak/pen/LVXqRB
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
