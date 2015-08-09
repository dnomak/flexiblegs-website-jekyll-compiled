---
layout: default
title: wrap(@width)
permalink: /learn/wrap-width/
---

<div id="css">
  <div class="dn-browser">
    <div class="dn-browser-header">
      {% include browser-button.html %}
      <div class="dn-style--title">wrap(<span>@width</span>) (css)</div>
      <a href="/" class="dn-logo"><img src="/img/flexiblegs-logo-white.png" alt=""></a>
    </div>
    <div class="dn-browser-body">
      <div class="dn-browser-body__pre">
        <pre class="is-not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.html</div><!--
          -->&lt;div class="wrap xl-gutter-24 <span>xl-3</span>"&gt;<br/><!--
          -->  &lt;div class="col"&gt;01&lt;/div&gt;<br/><!--
          -->  &lt;div class="col"&gt;02&lt;/div&gt;<br/><!--
          -->  &lt;div class="col"&gt;03&lt;/div&gt;<br/><!--
          -->&lt;/div&gt;<!--
          --><div class="comment">&lt;!-- 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 --&gt;</div><!--
        --></pre>
        {% include wrap-width/is-compiled.html %}
      </div>
      {% include wrap-width/preview.html %}
      <div class="dn-browser-footer">
        <div class="wrap xl-gutter-24 xl-outside-24 xl-center xl-auto">
          <div class="col">
            <a href="http://codepen.io/dnomak/pen/qdLWZY?editors=110" class="dn-button dn-button--link">http://codepen.io/dnomak/pen/qdLWZY</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="bem-css">
  <div class="dn-browser">
    <div class="dn-browser-header">
      {% include browser-button.html %}
      <div class="dn-style--title">wrap(<span>@width</span>) (bem-css)</div>
      <a href="/" class="dn-logo"><img src="/img/flexiblegs-logo-white.png" alt=""></a>
    </div>
    <div class="dn-browser-body">
      <div class="dn-browser-body__pre">
        <pre class="is-not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.html</div><!--
          -->&lt;div class="wrap wrap--xl-gutter-24 <span>wrap--xl-3</span>"&gt;<br/><!--
          -->  &lt;div class="wrap__col"&gt;01&lt;/div&gt;<br/><!--
          -->  &lt;div class="wrap__col"&gt;02&lt;/div&gt;<br/><!--
          -->  &lt;div class="wrap__col"&gt;03&lt;/div&gt;<br/><!--
          -->&lt;/div&gt;<!--
          --><div class="comment">&lt;!-- 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 --&gt;</div><!--
        --></pre>
        {% include wrap-width/is-compiled.html %}
      </div>
      {% include wrap-width/preview.html %}
      <div class="dn-browser-footer">
        <div class="wrap xl-gutter-24 xl-outside-24 xl-center xl-auto">
          <div class="col">
            <a href="https://github.com/flexiblegs/flexiblegs-bem-css" class="dn-button dn-button--link">https://github.com/flexiblegs/flexiblegs-bem-css</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="scss-plus">
  <div class="dn-browser">
    <div class="dn-browser-header">
      {% include browser-button.html %}
      <div class="dn-style--title">wrap(<span>@width</span>) (scss-plus)</div>
      <a href="/" class="dn-logo"><img src="/img/flexiblegs-logo-white.png" alt=""></a>
    </div>
    <div class="dn-browser-body">
      <div class="dn-browser-body__pre">
        <div class="wrap xl-top xl-gutter-24 xl-2 lg-1">
          <div class="col">
            <pre><div class="dn-tag dn-tag--gray dn-tag--bottom">.html</div><!--
              -->&lt;div class="example"&gt;<br/><!--
              -->  &lt;div class="example__item"&gt;01&lt;/div&gt;<br/><!--
              -->  &lt;div class="example__item"&gt;02&lt;/div&gt;<br/><!--
              -->  &lt;div class="example__item"&gt;03&lt;/div&gt;<br/><!--
              -->&lt;/div&gt;<!--
            --></pre>
            <br class="xl-hidden lg-not-hidden" />
          </div>
          <div class="col">
            <pre class="is-not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.scss</div><!--
              -->.example {<br/><!--
              -->  @include wrap;<br/><!--
              -->  @include wrap(gutter,24px);<br/><!--
              -->  @include <span>wrap(3)</span>;<br/><!--
              -->  &__item {<br/><!--
              -->    @include col;<br/><!--
              -->  }<br/><!--
              -->}<!--
            --></pre>
            {% include wrap-width/is-compiled.html %}
          </div>
        </div>
      </div>
      {% include wrap-width/preview.html %}
      <div class="dn-browser-footer">
        <div class="wrap xl-gutter-24 xl-outside-24 xl-center xl-auto">
          <div class="col">
            <a href="https://github.com/flexiblegs/flexiblegs-scss-plus" class="dn-button dn-button--link">https://github.com/flexiblegs/flexiblegs-scss-plus</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
