---
layout: default
title: col(not-first)
permalink: /learn/not-first/
---

<div id="css">
  <div class="dn-browser">
    <div class="dn-browser-header">
      {% include browser-button.html %}
      <div class="dn-style--title">col(<span>not-first</span>) (css)</div>
      <a href="/" class="dn-logo"><img src="/img/flexiblegs-logo-white.png" alt=""></a>
    </div>
    <div class="dn-browser-body">
      <div class="dn-browser-body__pre">
        <pre class="is-not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.html</div><!--
          -->&lt;div class="wrap xl-flexbox xl-gutter-24 xl-3"&gt;<br/><!--
          -->  &lt;div class="col"&gt;01&lt;/div&gt;<br/><!--
          -->  &lt;div class="col"&gt;02&lt;/div&gt;<br/><!--
          -->  &lt;div class="col <span>xl-not-first</span>"&gt;03&lt;/div&gt;<br/><!--
          -->&lt;/div&gt;<!--
        --></pre>
        {% include not-first/is-compiled.html %}
      </div>
      {% include not-first/preview.html %}
      <div class="dn-browser-footer">
        <div class="wrap xl-gutter-24 xl-outside-24 xl-center xl-auto">
          <div class="col">
            <a href="http://codepen.io/dnomak/pen/YXBEPM?editors=110" class="dn-button dn-button--link">
              http://codepen.io/dnomak/pen/YXBEPM
            </a>
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
      <div class="dn-style--title">col(<span>not-first</span>) (bem-css)</div>
      <a href="/" class="dn-logo"><img src="/img/flexiblegs-logo-white.png" alt=""></a>
    </div>
    <div class="dn-browser-body">
      <div class="dn-browser-body__pre">
        <pre class="is-not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.html</div><!--
          -->&lt;div class="wrap wrap--xl-flexbox wrap--xl-gutter-24 wrap--xl-3"&gt;<br/><!--
          -->  &lt;div class="wrap__col"&gt;01&lt;/div&gt;<br/><!--
          -->  &lt;div class="wrap__col"&gt;02&lt;/div&gt;<br/><!--
          -->  &lt;div class="wrap__col <span>wrap__col--xl-not-first</span>"&gt;03&lt;/div&gt;<br/><!--
          -->&lt;/div&gt;<!--
        --></pre>
        {% include not-first/is-compiled.html %}
      </div>
      {% include not-first/preview.html %}
      <div class="dn-browser-footer">
        <div class="wrap xl-gutter-24 xl-outside-24 xl-center xl-auto">
          <div class="col">
            <a href="http://codepen.io/dnomak/" class="dn-button dn-button--link">http://codepen.io/dnomak/</a>
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
      <div class="dn-style--title">col(<span>not-first</span>) (scss-plus)</div>
      <a href="/" class="dn-logo"><img src="/img/flexiblegs-logo-white.png" alt=""></a>
    </div>
    <div class="dn-browser-body">
      <div class="dn-browser-body__pre">

        <div class="wrap xl-top xl-gutter-24 xl-2 lg-1">
          <div class="col">
            <pre><div class="dn-tag dn-tag--gray dn-tag--bottom">.html</div><!--
              -->&lt;div class="example"&gt;<br/><!--
              -->  &lt;div class="example__item one"&gt;01&lt;/div&gt;<br/><!--
              -->  &lt;div class="example__item two"&gt;02&lt;/div&gt;<br/><!--
              -->  &lt;div class="example__item three"&gt;03&lt;/div&gt;<br/><!--
              -->&lt;/div&gt;<!--
            --></pre>
            <br class="xl-hidden lg-not-hidden" />
          </div>
          <div class="col">
            <pre class="is-not-compiled"><div class="dn-tag dn-tag--gray dn-tag--top dn-tag--button"><i class="fa fa-magic fa-lg"></i></div><div class="dn-tag dn-tag--gray dn-tag--bottom">.html</div><!--
              -->&lt;div class="wrap wrap--xl-flexbox wrap--xl-gutter-24 wrap--xl-3"&gt;<br/><!--
              -->  &lt;div class="wrap__col"&gt;01&lt;/div&gt;<br/><!--
              -->  &lt;div class="wrap__col"&gt;02&lt;/div&gt;<br/><!--
              -->  &lt;div class="wrap__col <span>wrap__col--xl-not-first</span>"&gt;03&lt;/div&gt;<br/><!--
              -->&lt;/div&gt;<!--
            --></pre>
            {% include not-first/is-compiled.html %}
          </div>
        </div>

      </div>
      {% include not-first/preview.html %}
      <div class="dn-browser-footer">
        <div class="wrap xl-gutter-24 xl-outside-24 xl-center xl-auto">
          <div class="col">
            <a href="http://codepen.io/dnomak/" class="dn-button dn-button--link">http://codepen.io/dnomak/</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
