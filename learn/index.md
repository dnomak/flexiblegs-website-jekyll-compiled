---
layout: default
dynamic_title: learn
permalink: /learn/
---

<div class="dn-browser">
  <div class="dn-browser-header">
    {% include browser-button.html %}
    <div class="dn-style--title">{{ site.t.[page.language].[page.dynamic_title].title }}</div>
    {% include logo.html %}
  </div>
  <div class="dn-browser-body">
    <div class="dn-browser-body__item">
      <div class="dn-content">
        {% if page.language == 'en' %}
          <p>Before starting learn you need to know about <b>Grid System</b> and <b>Responive Design</b>.</p>
        {% endif %}
        {% if page.language == 'tr' %}
          <p>Öğrenmeye başlamadan önce <b>Grid System</b> ve <b>Responive Design</b> hakkında bilgi sahibi olmanız gerekmektedir.</p>
        {% endif %}
        <div class="dn-space-16"></div>
        <p><b>Responsive Meta</b></p>
        <div class="dn-space-16"></div>
        <pre><div class="dn-tag dn-tag--gray dn-tag--bottom">.html</div><!--
          --><div class="comment">&lt;head&gt;<br/><!--
          -->  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;<br/><!--
          -->&lt;/head&gt;</div><!--
        --></pre>
        <div class="dn-space-24"></div>
        <div class="gray">
          {% if page.language == 'en' %}
            <p><b>Compiled View</b></p>
          {% endif %}
          {% if page.language == 'tr' %}
            <p><b>Derlenmiş Görünüm</b></p>
          {% endif %}
          <div class="dn-space-8"></div>
          {% if page.language == 'en' %}
            <p>Switching to compile view you view the CSS properties of classes and mixins. Having a knowledge about this topic will improve your usage.</p>
          {% endif %}
          {% if page.language == 'tr' %}
            <p>Derlenmiş görünüme geçiş yaparak class veya mixinlerin oluşturduğu CSS özelliklerini görebilirsiniz. Bu konuda bilgi sahibi olmanız kullanım hakimiyetiniz açısından oldukça faydalı olacaktır.</p>
          {% endif %}
          <div class="dn-space-8"></div>
          {% if page.language == 'en' %}
            <p>On <b>CSS</b> section static. On <b>Sass</b>, <b>Less</b> or <b>Stylus</b> sections dynamic sections are marked as <b>@variable</b>.</p>
          {% endif %}
          {% if page.language == 'tr' %}
            <p><b>CSS</b> kısmında sabit <b>Sass</b>, <b>Less</b> veya <b>Stylus</b> kısmında dinamik olacak kısımlar <b>@variable</b> şeklinde belirtilmektedir.</p>
          {% endif %}
          <div class="dn-space-8"></div>
          {% if page.language == 'en' %}
            <p>For browser compatability <b>-ms</b>, <b>-moz</b> ve <b>-webkit</b> aren't added to the samples.</p>
          {% endif %}
          {% if page.language == 'tr' %}
            <p>Tarayıcı uyumluluğu için gereken <b>-ms</b>, <b>-moz</b> ve <b>-webkit</b> yazımları eklenmemiştir.</p>
          {% endif %}
        </div>
        <div class="wrap xl-gutter-24 xl-top xl-2 lg-1">
          <div class="col">
            <div class="dn-space-24"></div>
            {% if page.language == 'en' %}
              <p><b>Static</b></p>
            {% endif %}
            {% if page.language == 'tr' %}
              <p><b>Statik</b></p>
            {% endif %}
            <div class="dn-space-16"></div>
            <ul>
              <li><a href="/learn/wrap/?framework=css">CSS</a></li>
              <li><a href="/learn/wrap/?framework=bem-css">BEM CSS</a></li>
              <li><span class="line-through">Scss</span></li>
              <li><span class="line-through">Sass</span></li>
              <li><span class="line-through">Less</span></li>
              <li><span class="line-through">Stylus</span></li>
            </ul>
          </div>
          <div class="col">
            <div class="dn-space-24"></div>
            {% if page.language == 'en' %}
              <p><b>Dynamic</b></p>
            {% endif %}
            {% if page.language == 'tr' %}
              <p><b>Dinamik</b></p>
            {% endif %}
            <div class="dn-space-16"></div>
            <ul>
              <li><a href="/learn/wrap/?framework=scss-plus">Scss Plus</a></li>
              <li><a href="/learn/wrap/?framework=sass-plus">Sass Plus</a></li>
              <li><a href="/learn/wrap/?framework=less-plus">Less Plus</a></li>
              <li><a href="/learn/wrap/?framework=stylus-plus">Stylus Plus</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
