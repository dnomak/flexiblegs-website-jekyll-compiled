---
layout: default
title: wrap(align(top))
permalink: /learn/top/
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
      <div class="dn-style--title">wrap(align(<span>top</span>)) (css)</div>
      <a href="/" class="dn-logo"><img src="/img/flexiblegs-logo-white.png" alt=""></a>
    </div>
    <div class="dn-browser-body">
      <div class="dn-browser-body__pre">
        <pre class="is-not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button">view compiled</div><div class="dn-tag dn-tag--gray dn-tag--bottom">html</div><!--
          -->&lt;div class="wrap <span>xl-top</span>"&gt;<br/><!--
          -->  &lt;div class="col xl-3-12"&gt;01&lt;/div&gt;<br/><!--
          -->  &lt;div class="col xl-6-12"&gt;02&lt;/div&gt;<br/><!--
          -->  &lt;div class="col xl-3-12"&gt;03&lt;/div&gt;<br/><!--
          -->&lt;/div&gt;<!--
        --></pre>
        <pre class="is-compiled"><div class="dn-tag dn-tag--black dn-tag--top dn-tag--button">close</div><!--
          --><span>wrap(align(top))</span><br/><!--
          -->  align-content: flex-start;<br/><!--
          -->  align-items: flex-start;<br/><!--
          --><span>wrap(align(top)) > col</span><br/><!--
          -->  vertical-align: top;<!--
        --></pre>
      </div>
      <div class="dn-browser-body__item">
        <div class="wrap xl-top dn-style--wrap" style="height: 144px;">
          <div class="col xl-3-12"><div class="dn-style--col">01</div></div>
          <div class="col xl-6-12"><div class="dn-style--col" style="height: 96px; line-height: 96px;">02</div></div>
          <div class="col xl-3-12"><div class="dn-style--col">03</div></div>
        </div>
      </div>
      <div class="dn-browser-footer">
        <div class="wrap xl-gutter-24 xl-outside-24 xl-center xl-auto">
          <div class="col">
            <a href="http://codepen.io/dnomak/" class="dn-button dn-button--link">
              http://codepen.io/dnomak/
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
