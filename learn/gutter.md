---
layout: default
title: wrap(gutter(@gutter))
permalink: /learn/gutter/
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
      <div class="dn-style--title">wrap(<span>gutter</span>(@gutter)) (css)</div>
      <a href="/" class="dn-logo"><img src="/img/flexiblegs-logo-white.png" alt=""></a>
    </div>
    <div class="dn-browser-body">
      <div class="dn-browser-body__pre">
        <pre class="is-not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button">view compiled</div><div class="dn-tag dn-tag--gray dn-tag--bottom">html</div><!--
          -->&lt;div class="wrap <span>xl-gutter-24</span>"&gt;<br/><!--
          -->  &lt;div class="col xl-3-12"&gt;01&lt;/div&gt;<br/><!--
          -->  &lt;div class="col xl-6-12"&gt;02&lt;/div&gt;<br/><!--
          -->  &lt;div class="col xl-3-12"&gt;03&lt;/div&gt;<br/><!--
          -->&lt;/div&gt;<!--
          --><div class="comment">&lt;!-- 0, 8, 16, 24, 40 --&gt;</div><!--
        --></pre>
        <pre class="is-compiled"><div class="dn-tag dn-tag--black dn-tag--top dn-tag--button">close</div><!--
          --><span>wrap(gutter(@gutter))</span><br/><!--
          -->  width: calc(100% + @gutter);<br/><!--
          -->  margin-left: -@gutter/2;<br/><!--
          -->  margin-right: -@gutter/2;<br/><!--
          -->  padding-left: 0;<br/><!--
          -->  padding-right: 0;<br/><!--
          --><span>wrap(gutter(@gutter)) > col</span><br/><!--
          -->  padding-left: @gutter/2;<br/><!--
          -->  padding-right: @gutter/2;<!--
        --></pre>
      </div>
      <div class="dn-browser-body__item">
        <div class="wrap xl-gutter-24 dn-style--wrap">
          <div class="col xl-3-12"><div class="dn-style--col">01</div></div>
          <div class="col xl-6-12"><div class="dn-style--col">02</div></div>
          <div class="col xl-3-12"><div class="dn-style--col">03</div></div>
        </div>
      </div>
      <div class="dn-browser-footer">
        <div class="wrap xl-gutter-24 xl-outside-24 xl-right xl-auto">
          <div class="col">
            <a href="http://codepen.io/dnomak/pen/qdLWbY?editors=110" class="dn-button dn-button--link dn-button--right">
              http://codepen.io/dnomak/pen/qdLWbY
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
