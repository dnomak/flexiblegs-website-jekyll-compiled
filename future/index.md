---
layout: default
dynamic_title: future
permalink: /future/
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
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick">
          <input type="hidden" name="hosted_button_id" value="NHEUHUB8863NS">
          <input type="image" src="/img/paypal-logo.svg" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
          <img alt="" border="0" src="https://www.paypalobjects.com/tr_TR/i/scr/pixel.gif" width="1" height="1" alt="PayPal">
        </form>
        <div class="dn-space-16"></div>
        {% if page.language == 'en' %}
          <p>To make our future plans a reality you can support us via PayPal :)</p>
        {% endif %}
        {% if page.language == 'tr' %}
          <p>Gelecek planlarını daha hızlı uygulayabilmemiz için PayPal aracılığıyla bağış yapabilirsiniz :)</p>
        {% endif %}
        <div class="dn-space-16"></div>
        {% if page.language == 'en' %}
          <ul>
            <li>Flexible Grid System
              <ul>
                <li>Sass, Scss, Less and Stylus</li>
              </ul>
            </li>
            <li>Flexible Frontend Framework
              <ul>
                <li>Flexible Fonticons</li>
                <li>Flexible Tabs</li>
                <li>Flexible Slider and more :)</li>
              </ul>
            </li>
            <li><a href="https://github.com/flexiblegs/grid-builder">Flexible Grid Builder</a></li>
            <li>Flexible Frontend Editor</li>
            <li>Flexible Shop
              <ul>
                <li>Mug</li>
                <li>Shirt</li>
                <li>Sticker and more :)</li>
              </ul>
            </li>
            <li>Flexible Cloud</li>
            <li>Flexible Workspace &amp; Cafe
              <ul>
                <li>Coffee (Flexible Blend)</li>
                <li>Carrot Cake and more :)</li>
              </ul>
            </li>
          </ul>
        {% endif %}
        {% if page.language == 'tr' %}
          <ul>
            <li>Flexible Grid System
              <ul>
                <li>Sass, Scss, Less and Stylus</li>
              </ul>
            </li>
            <li>Flexible Frontend Framework
              <ul>
                <li>Flexible Fonticons</li>
                <li>Flexible Tabs</li>
                <li>Flexible Slider ve daha fazlası :)</li>
              </ul>
            </li>
            <li><a href="https://github.com/flexiblegs/grid-builder">Flexible Grid Builder</a></li>
            <li>Flexible Frontend Editor</li>
            <li>Flexible Shop
              <ul>
                <li>Mug</li>
                <li>Shirt</li>
                <li>Sticker ve daha fazlası :)</li>
              </ul>
            </li>
            <li>Flexible Cloud</li>
            <li>Flexible Workspace &amp; Cafe
              <ul>
                <li>Coffee (Flexible Blend)</li>
                <li>Carrot Cake ve daha fazlası :)</li>
              </ul>
            </li>
          </ul>
        {% endif %}
      </div>
    </div>
  </div>
</div>
