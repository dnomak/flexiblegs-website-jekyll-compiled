---
layout: default
title: col(@width)
permalink: /learn/col-width/
---

<div id="css">
  <div class="dn-browser">
    <div class="dn-browser-header">
      {% include browser-button.html %}
      <div class="dn-style--title">col(<span>@width</span>) (css)</div>
      {% include logo.html %}
    </div>
    <div class="dn-browser-body">
      <div class="dn-browser-body__pre">
        <pre class="not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.html</div><!--
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
        {% include col-width/compiled.html %}
      </div>
      {% include col-width/preview.html %}
      <div class="dn-browser-footer">
        <div class="wrap xl-gutter-24 xl-outside-24 xl-center xl-auto">
          <div class="col">
            <a href="http://codepen.io/dnomak/pen/LVXqRB?editors=110" class="dn-button dn-button--link">http://codepen.io/dnomak/pen/LVXqRB</a>
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
      <div class="dn-style--title">col(<span>@width</span>) (bem-css)</div>
      {% include logo.html %}
    </div>
    <div class="dn-browser-body">
      <div class="dn-browser-body__pre">
        <pre class="not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.html</div><!--
          -->&lt;div class="wrap"&gt;<br/><!--
          -->  &lt;div class="wrap__col <span>wrap__col--xl-1-3</span>"&gt;01&lt;/div&gt;<br/><!--
          -->  &lt;div class="wrap__col <span>wrap__col--xl-1-3</span>"&gt;02&lt;/div&gt;<br/><!--
          -->  &lt;div class="wrap__col <span>wrap__col--xl-1-3</span>"&gt;03&lt;/div&gt;<br/><!--
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
        {% include col-width/compiled.html %}
      </div>
      {% include col-width/preview.html %}
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
      <div class="dn-style--title">col(<span>@width</span>) (scss-plus)</div>
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
              -->&lt;/div&gt;<!--
            --></pre>
            <br class="xl-hidden lg-not-hidden" />
          </div>
          <div class="col">
            <pre class="not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.scss</div><!--
              -->.example {<br/><!--
              -->  @include wrap;<br/><!--
              -->  &__item {<br/><!--
              -->    @include col;<br/><!--
              -->    @include <span>col(1,3)</span>;<br/><!--
              -->  }<br/><!--
              -->}<!--
            --></pre>
            {% include col-width/compiled.html %}
          </div>
        </div>
      </div>
      {% include col-width/preview.html %}
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
      <div class="dn-style--title">col(<span>@width</span>) (sass-plus)</div>
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
              -->&lt;/div&gt;<!--
            --></pre>
            <br class="xl-hidden lg-not-hidden" />
          </div>
          <div class="col">
            <pre class="not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.sass</div><!--
              -->.example<br/><!--
              -->  +wrap<br/><!--
              -->  &__item<br/><!--
              -->    +col<br/><!--
              -->    +<span>col(1,3)</span><!--
            --></pre>
            {% include col-width/compiled.html %}
          </div>
        </div>
      </div>
      {% include col-width/preview.html %}
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
      <div class="dn-style--title">col(<span>@width</span>) (less-plus)</div>
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
              -->&lt;/div&gt;<!--
            --></pre>
            <br class="xl-hidden lg-not-hidden" />
          </div>
          <div class="col">
            <pre class="not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.less</div><!--
              -->.example {<br/><!--
              -->  .wrap;<br/><!--
              -->  &__item {<br/><!--
              -->    .col;<br/><!--
              -->    .<span>col(1,3)</span>;<br/><!--
              -->  }<br/><!--
              -->}<!--
            --></pre>
            {% include col-width/compiled.html %}
          </div>
        </div>
      </div>
      {% include col-width/preview.html %}
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
      <div class="dn-style--title">col(<span>@width</span>) (stylus-plus)</div>
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
              -->&lt;/div&gt;<!--
            --></pre>
            <br class="xl-hidden lg-not-hidden" />
          </div>
          <div class="col">
            <pre class="not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.styl</div><!--
              -->.example<br/><!--
              -->  wrap()<br/><!--
              -->  &__item<br/><!--
              -->    col()<br/><!--
              -->    <span>col(1,3)</span><!--
            --></pre>
            {% include col-width/compiled.html %}
          </div>
        </div>
      </div>
      {% include col-width/preview.html %}
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
