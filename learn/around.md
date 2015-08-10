---
layout: default
title: wrap(around)
permalink: /learn/around/
---

<div id="css">
  <div class="dn-browser">
    <div class="dn-browser-header">
      {% include browser-button.html %}
      <div class="dn-style--title">wrap(<span>around</span>) (css)</div>
      {% include logo.html %}
    </div>
    <div class="dn-browser-body">
      <div class="dn-browser-body__pre">
        <pre class="not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.html</div><!--
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
        {% include around/compiled.html %}
      </div>
      {% include around/preview.html %}
      <div class="dn-browser-footer">
        <div class="wrap xl-gutter-24 xl-outside-24 xl-center xl-auto">
          <div class="col">
            <a href="http://codepen.io/dnomak/pen/doaZba?editors=110" class="dn-button dn-button--link">http://codepen.io/dnomak/pen/doaZba</a>
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
      <div class="dn-style--title">wrap(<span>around</span>) (bem-css)</div>
      {% include logo.html %}
    </div>
    <div class="dn-browser-body">
      <div class="dn-browser-body__pre">
        <pre class="not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.html</div><!--
          -->&lt;div class="wrap wrap--xl-flexbox <span>wrap--xl-around</span> wrap--xl-5"&gt;<br/><!--
          -->  &lt;div class="wrap__col"&gt;01&lt;/div&gt;<br/><!--
          -->  &lt;div class="wrap__col"&gt;02&lt;/div&gt;<br/><!--
          -->  &lt;div class="wrap__col"&gt;03&lt;/div&gt;<br/><!--
          -->  &lt;div class="wrap__col wrap__col--xl-1-1"&gt;04&lt;/div&gt;<br/><!--
          -->  &lt;div class="wrap__col"&gt;05&lt;/div&gt;<br/><!--
          -->  &lt;div class="wrap__col"&gt;06&lt;/div&gt;<br/><!--
          -->  &lt;div class="wrap__col"&gt;07&lt;/div&gt;<br/><!--
          -->&lt;/div&gt;<!--
        --></pre>
        {% include around/compiled.html %}
      </div>
      {% include around/preview.html %}
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
      <div class="dn-style--title">wrap(<span>around</span>) (scss-plus)</div>
      {% include logo.html %}
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
              -->  &lt;div class="example__item four"&gt;04&lt;/div&gt;<br/><!--
              -->  &lt;div class="example__item"&gt;05&lt;/div&gt;<br/><!--
              -->  &lt;div class="example__item"&gt;06&lt;/div&gt;<br/><!--
              -->  &lt;div class="example__item"&gt;07&lt;/div&gt;<br/><!--
              -->&lt;/div&gt;<!--
            --></pre>
            <br class="xl-hidden lg-not-hidden" />
          </div>
          <div class="col">
            <pre class="not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.scss</div><!--
              -->.example {<br/><!--
              -->  @include wrap;<br/><!--
              -->  @include wrap(flexbox);<br/><!--
              -->  @include <span>wrap(around)</span>;<br/><!--
              -->  @include wrap(5);<br/><!--
              -->  &__item {<br/><!--
              -->    @include col;<br/><!--
              -->    &.four {<br/><!--
              -->      @include col(1,1);<br/><!--
              -->    }<br/><!--
              -->  }<br/><!--
              -->}<!--
            --></pre>
            {% include around/compiled.html %}
          </div>
        </div>
      </div>
      {% include around/preview.html %}
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

<div id="sass-plus">
  <div class="dn-browser">
    <div class="dn-browser-header">
      {% include browser-button.html %}
      <div class="dn-style--title">wrap(<span>around</span>) (sass-plus)</div>
      {% include logo.html %}
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
              -->  &lt;div class="example__item four"&gt;04&lt;/div&gt;<br/><!--
              -->  &lt;div class="example__item"&gt;05&lt;/div&gt;<br/><!--
              -->  &lt;div class="example__item"&gt;06&lt;/div&gt;<br/><!--
              -->  &lt;div class="example__item"&gt;07&lt;/div&gt;<br/><!--
              -->&lt;/div&gt;<!--
            --></pre>
            <br class="xl-hidden lg-not-hidden" />
          </div>
          <div class="col">
            <pre class="not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.sass</div><!--
              -->.example<br/><!--
              -->  +wrap<br/><!--
              -->  +wrap(flexbox)<br/><!--
              -->  +<span>wrap(around)</span><br/><!--
              -->  +wrap(5)<br/><!--
              -->  &__item<br/><!--
              -->    +col<br/><!--
              -->    &.four<br/><!--
              -->      +col(1,1)<br/><!--
            --></pre>
            {% include around/compiled.html %}
          </div>
        </div>
      </div>
      {% include around/preview.html %}
      <div class="dn-browser-footer">
        <div class="wrap xl-gutter-24 xl-outside-24 xl-center xl-auto">
          <div class="col">
            <a href="https://github.com/flexiblegs/flexiblegs-sass-plus" class="dn-button dn-button--link">https://github.com/flexiblegs/flexiblegs-sass-plus</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="less-plus">
  <div class="dn-browser">
    <div class="dn-browser-header">
      {% include browser-button.html %}
      <div class="dn-style--title">wrap(<span>around</span>) (less-plus)</div>
      {% include logo.html %}
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
              -->  &lt;div class="example__item four"&gt;04&lt;/div&gt;<br/><!--
              -->  &lt;div class="example__item"&gt;05&lt;/div&gt;<br/><!--
              -->  &lt;div class="example__item"&gt;06&lt;/div&gt;<br/><!--
              -->  &lt;div class="example__item"&gt;07&lt;/div&gt;<br/><!--
              -->&lt;/div&gt;<!--
            --></pre>
            <br class="xl-hidden lg-not-hidden" />
          </div>
          <div class="col">
            <pre class="not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.less</div><!--
              -->.example {<br/><!--
              -->  .wrap;<br/><!--
              -->  .wrap(flexbox);<br/><!--
              -->  .<span>wrap(around)</span>;<br/><!--
              -->  .wrap(5);<br/><!--
              -->  &__item {<br/><!--
              -->    .col;<br/><!--
              -->    &.four {<br/><!--
              -->      .col(1,1);<br/><!--
              -->    }<br/><!--
              -->  }<br/><!--
              -->}<!--
            --></pre>
            {% include around/compiled.html %}
          </div>
        </div>
      </div>
      {% include around/preview.html %}
      <div class="dn-browser-footer">
        <div class="wrap xl-gutter-24 xl-outside-24 xl-center xl-auto">
          <div class="col">
            <a href="https://github.com/flexiblegs/flexiblegs-less-plus" class="dn-button dn-button--link">https://github.com/flexiblegs/flexiblegs-less-plus</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="stylus-plus">
  <div class="dn-browser">
    <div class="dn-browser-header">
      {% include browser-button.html %}
      <div class="dn-style--title">wrap(<span>around</span>) (stylus-plus)</div>
      {% include logo.html %}
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
              -->  &lt;div class="example__item four"&gt;04&lt;/div&gt;<br/><!--
              -->  &lt;div class="example__item"&gt;05&lt;/div&gt;<br/><!--
              -->  &lt;div class="example__item"&gt;06&lt;/div&gt;<br/><!--
              -->  &lt;div class="example__item"&gt;07&lt;/div&gt;<br/><!--
              -->&lt;/div&gt;<!--
            --></pre>
            <br class="xl-hidden lg-not-hidden" />
          </div>
          <div class="col">
            <pre class="not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.styl</div><!--
              -->.example<br/><!--
              -->  wrap()<br/><!--
              -->  wrap(flexbox)<br/><!--
              -->  <span>wrap(around)</span><br/><!--
              -->  wrap(5)<br/><!--
              -->  &__item<br/><!--
              -->    col()<br/><!--
              -->    &.four<br/><!--
              -->      col(1,1)<br/><!--
            --></pre>
            {% include around/compiled.html %}
          </div>
        </div>
      </div>
      {% include around/preview.html %}
      <div class="dn-browser-footer">
        <div class="wrap xl-gutter-24 xl-outside-24 xl-center xl-auto">
          <div class="col">
            <a href="https://github.com/flexiblegs/flexiblegs-stylus-plus" class="dn-button dn-button--link">https://github.com/flexiblegs/flexiblegs-stylus-plus</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
