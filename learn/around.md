---
layout: default
title: wrap(align(around))
permalink: /learn/around/
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
      <div class="dn-style--title">wrap(align(<span>around</span>)) (css)</div>
      <a href="/" class="dn-logo"><img src="/img/flexiblegs-logo-white.png" alt=""></a>
    </div>
    <div class="dn-browser-body">
      <div class="dn-browser-body__pre">
        <pre class="is-not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button">view compiled</div><div class="dn-tag dn-tag--gray dn-tag--bottom">html</div><!--
          -->&lt;div class="wrap xl-flexbox <span>xl-around</span> xl-5"&gt;<br/><!--
          -->  &lt;div class="col"&gt;01&lt;/div&gt;<br/><!--
          -->  &lt;div class="col"&gt;02&lt;/div&gt;<br/><!--
          -->  &lt;div class="col"&gt;03&lt;/div&gt;<br/><!--
          -->  &lt;div class="col xl-1-1"&gt;04&lt;/div&gt;<br/><!--
          -->  &lt;div class="col"&gt;05&lt;/div&gt;<br/><!--
          -->  &lt;div class="col"&gt;06&lt;/div&gt;<br/><!--
          -->  &lt;div class="col"&gt;07&lt;/div&gt;<br/><!--
          -->&lt;/div&gt;<!--
        --></pre>
        <pre class="is-compiled"><div class="dn-tag dn-tag--black dn-tag--top dn-tag--button">close</div><!--
          --><span>wrap(align(around))</span><br/><!--
          -->  justify-content: space-around;<br/><!--
          -->  align-content: space-around;<br/><!--
        --></pre>
      </div>
      <div class="dn-browser-body__item">
        <div class="dn-tag dn-tag--red dn-tag--center">flexbox</div>
        <div class="wrap xl-flexbox xl-around xl-5 dn-style--wrap" style="height: 256px;">
          <div class="col"><div class="dn-style--col">01</div></div>
          <div class="col"><div class="dn-style--col">02</div></div>
          <div class="col"><div class="dn-style--col">03</div></div>
          <div class="col xl-1-1"><div class="dn-style--col">04</div></div>
          <div class="col"><div class="dn-style--col">05</div></div>
          <div class="col"><div class="dn-style--col">06</div></div>
          <div class="col"><div class="dn-style--col">07</div></div>
        </div>
      </div>
      <div class="dn-browser-footer">
        <div class="wrap xl-gutter-24 xl-outside-24 xl-right xl-auto">
          <div class="col">
            <a href="http://codepen.io/dnomak/" class="dn-button dn-button--link dn-button--right">
              http://codepen.io/dnomak/
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
