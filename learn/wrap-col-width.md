---
layout: default
title: wrap(col(@width))
permalink: /learn/wrap-col-width/
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
      <div class="dn-style--title">wrap(col(<span>@width</span>) (css)</div>
      <a href="/" class="dn-logo"><img src="/img/flexiblegs-logo-white.png" alt=""></a>
    </div>
    <div class="dn-browser-body">
      <div class="dn-browser-body__pre">
        <pre class="is-not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button">view compiled</div><div class="dn-tag dn-tag--gray dn-tag--bottom">html</div><!--
          -->&lt;div class="wrap xl-gutter-24 <span>xl-3</span>"&gt;<br/><!--
          -->  &lt;div class="col"&gt;01&lt;/div&gt;<br/><!--
          -->  &lt;div class="col"&gt;02&lt;/div&gt;<br/><!--
          -->  &lt;div class="col"&gt;03&lt;/div&gt;<br/><!--
          -->&lt;/div&gt;<!--
          --><div class="comment">&lt;!-- 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 --&gt;</div><!--
        --></pre>
        <pre class="is-compiled"><div class="dn-tag dn-tag--black dn-tag--top dn-tag--button">close</div><!--
          --><span>wrap(col(@width)) > col</span><br/><!--
          -->  width: @width;<br/><!--
          -->  // Formule<br/><!--
          -->  // @width = 100% / @col<!--
        --></pre>
      </div>
      <div class="dn-browser-body__item">
        <div class="wrap xl-gutter-24 xl-3 dn-style--wrap">
          <div class="col"><div class="dn-style--col">01</div></div>
          <div class="col"><div class="dn-style--col">02</div></div>
          <div class="col"><div class="dn-style--col">03</div></div>
        </div>
      </div>
      <div class="dn-browser-footer">
        <div class="wrap xl-gutter-24 xl-outside-24 xl-right xl-auto">
          <div class="col">
            <a href="http://codepen.io/dnomak/pen/qdLWZY?editors=110" class="dn-button dn-button--link dn-button--right">
              http://codepen.io/dnomak/pen/qdLWZY
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
