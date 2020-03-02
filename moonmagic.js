try {
  hj('trigger', 'optimize_pdp');
} catch (e) {
}

window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event': 'event-to-ga',
  'eventCategory': 'Exp - Optimize PDP',
  'eventAction': 'loaded'
});

function initjQuery(callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = function () {
      callback();
    };
  }
  script.src = '//code.jquery.com/jquery-3.3.1.min.js';
  document.getElementsByTagName("head")[0].appendChild(script);
}

if (!window.jQuery) {
  initjQuery(function () {
    readyjQueryinit();
  });
} else {
  readyjQueryinit();
}

function readyjQueryinit() {
  let styles = "<style id='ab-test'>";
  styles += `
    #design-materials-gemstones{
      position: fixed;
      z-index: 1027;
      width: 100%;
      left: 0;
      bottom: 0;
      background: #fff;
      padding-top: 5px;
      -webkit-box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
              box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
      font-family: Montserrat, sans-serif;
      bottom: 0%;
      display: none;
    }
    #design-materials-gemstones .gemstone-container *{
      text-transform: capitalize;
    }
    #design-materials-gemstones *{
      letter-spacing: 0;
      font-weight: 500;
      font-family: Montserrat, sans-serif;
    }
    #design-materials-gemstones h2{
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #5C5C5C;
      text-transform: inherit;
      text-align: center;
      padding: 0 10px;
      margin-bottom: 0px; 
    }
    #design-materials-gemstones .element-container{
       max-width: 100%;
       position: relative;
       min-width: 0;
    }
    #design-materials-gemstones .materials-container .text{
      display: block;
    }
    #design-materials-gemstones .toggle .variant__swatch{
      border-radius: 50%;
      width: 38px;
      height: 38px;
    }
    #design-materials-gemstones .klaviyo-bis-trigger{
      display: none;
      font-size: 10px;
      margin-top: 0;
      height: 48px;
    }
    #design-materials-gemstones .toggle{
      text-align: left;
      background: #fff;
      border: none;
      font-weight: 500;
      font-size: 12px;
      line-height: 13px;
      color: #5C5C5C;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      padding: 0;
      max-width: 100%;
    }
    #design-materials-gemstones .toggle > *{
      min-width: 0;
    }
    #design-materials-gemstones .toggle .text svg{
      position: absolute;
      right: 0;
      top: 1px;
    }
    #design-materials-gemstones .toggle .text{
      color: #000;
      font-size: 12px;
      display: block;
      position: relative;
      padding-right: 12px;
      white-space: nowrap;
      overflow: hidden;
      -o-text-overflow: ellipsis;
         text-overflow: ellipsis;
    }
    #design-materials-gemstones .toggle .item{
      min-width: 48px;
    }
    #design-materials-gemstones .list{
      position: absolute;
      bottom: 100%;
      background: #fff;
      width: 100%;
      left: 0;
      padding: 10px;
      display: none;
    }
    #design-materials-gemstones .wrap-container > *{
      -webkit-box-flex: 1;
          -ms-flex: 1;
              flex: 1;
    }
    #design-materials-gemstones .wrap-container{
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      position: relative;
    }
    #design-materials-gemstones .wrap-container.top > *{
      padding: 5px 10px;
    }
    #design-materials-gemstones .list li{
      cursor: pointer;
    }
    #design-materials-gemstones .list a{
      min-width: 38px;
      height: 38px;
    }
    #design-materials-gemstones .list a + a{
      font-size: 12px;
      color: #000;
      height: initial;
    }
    #design-materials-gemstones .wrap-container .variant__item{
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
    }
    #design-materials-gemstones .size-container{
      max-width: 70px;
    }
    #design-materials-gemstones .size-container .toggle{
      width: 100%;
      border: 1px solid #E5E5E5;
      height: 48px;
      -ms-flex-pack: distribute;
          justify-content: space-around;
      padding: 0 5px;
    }
    #design-materials-gemstones .size-container .list a{
      margin-right: 0;
      width: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
    }
    #design-materials-gemstones .size-container .text{
      font-size: 16px;
      font-weight: 500;
      -ms-flex-pack: distribute;
          justify-content: space-around;
      margin-top: 3px;
    }
    #design-materials-gemstones .open-cart-btn,
    #design-materials-gemstones .add-design{
      border: none;
      color: #fff;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      font-size: 14px;
      text-transform: uppercase;
      text-align: left;
      padding: 0;
      min-height: 48px;
    }
    #design-materials-gemstones .open-cart-btn .image,
    #design-materials-gemstones .add-design .image{
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      width: 50px;
      height: 40px;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      margin-right: 10px;
    }
    #design-materials-gemstones .add-design{
      background: #FFC4B7;
    }
    #design-materials-gemstones .open-cart-btn .count{
      position: absolute;
      top: 0px;
      min-width: 21px;
      height: 21px;
      border-radius: 50%;
      background: #FFC4B7;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      right: 0px;
      color: #22425C;
    }
    #design-materials-gemstones .open-cart-btn .see-cart-text{
      display: none;
    }
    #design-materials-gemstones .open-cart-btn .cart-count{
      position: relative;
      height: 30px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: end;
          -ms-flex-align: end;
              align-items: flex-end;
    }
    #design-materials-gemstones .open-cart-btn{
      background: #22425C;
    }
    .product-bar-buy--mobile{
      display: none!important;
    }
    @media(max-width: 420px) {
      #design-materials-gemstones .klaviyo-bis-trigger.button.button--add-to-cart.button--klaviyo-bis {
      line-height: 1.2;
      padding-top: 4%;
      }
    }
    @media(max-width: 360px) {
      #design-materials-gemstones .open-cart-btn, #design-materials-gemstones .add-design {
        font-size: 12px;
      }
      #design-materials-gemstones .open-cart-btn .image, #design-materials-gemstones .add-design .image {
        width: 40px;
        margin-right: 5px;
      }
    }
    `;
  styles += "</style>";
  $('body').append(styles);

  let html = '<div id="design-materials-gemstones"></div>';
  $('body').append(html);

  function addElementsAB() {
    let materialsList = $('#variant-container .variant__list--material').html();
    let materialActive = $('#variant-container .variant__list--material .variant__label-current').html();
    let materialActiveElement = $('#variant-container .variant__list--material .active').parent().html();

    // gemstone elements
    let gemstoneList = $('#variant-container .variant__list--gemstone').html();
    let gemstoneActive = $('#variant-container .variant__list--gemstone .variant__label-current').html();
    let gemstoneActiveElement = $('#variant-container .variant__list--gemstone .active').parent().html();

    // size elements
    let sizeList = $('#variant-container .variant__list--size').html();
    let sizeActive = $('#variant-container .variant__list--size .variant__label-current').html();

    // перевірка чи є gemstone
    let gemstoneCount = $('#variant_crosslink_gemstone li').length;
    let gemstone = '';
    if(gemstoneCount){
      gemstone = `
      <div class="gemstone-container element-container">
          <button class="toggle">
            <div class="item">${gemstoneActiveElement}</div>
            
            <div>
              Gemstone:
              <span class="text">
                ${gemstoneActive}
                
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 9.36623L0.910026 10.2857L6 5.14286L0.910026 0L0 0.919481L4.17995 5.14286L0 9.36623H0Z" fill="black"/>
                </svg>
              </span>
            </div>
          </button>
          <div class="list">${gemstoneList}</div>
        </div>
    `;
    }

    // перевірка чи є material
    let materialCount = $('#variant-container .variant__list--material li').length;
    let material = '';
    if(materialCount){
      material = `
      <div class="materials-container element-container">
          <button class="toggle">
            <div class="item">${materialActiveElement}</div>
            
            <div>
              Material:
              <span class="text">
                ${materialActive}
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 9.36623L0.910026 10.2857L6 5.14286L0.910026 0L0 0.919481L4.17995 5.14286L0 9.36623H0Z" fill="black"/>
                </svg>
              </span>
            </div>
          </button>
          <div class="list">${materialsList}</div>
        </div>
    `;
    }

    // перевірка чи є size
    let sizeCount = $('#variant-container .variant__list--size li').length;
    let size = '';
    if(sizeCount){
      size = `
      <div class="size-container element-container">
        <button class="toggle">
          <div>
            Size:
            <span class="text">
              ${sizeActive}
            </span>
          </div>
          
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L0.535899 -6.52533e-07L7.4641 -4.68497e-08L4 6Z" fill="#C4C4C4"/>
          </svg>
        </button>
        <div class="list">${sizeList}</div>
      </div>
    `;
    }

    let htmlInner = `
      
      <div class="wrap-container top">
        ${material}
        ${gemstone}
      </div>
      
      <div class="wrap-container">
        ${size}
        
        <button class="add-design">
          <span class="image">
            <svg width="23" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41035 21.8693H7.41141C7.41228 21.8693 7.41316 21.8691 7.41404 21.8691H19.6309C19.9316 21.8691 20.1961 21.6696 20.2787 21.3804L22.974 11.9468C23.0321 11.7435 22.9914 11.5248 22.8642 11.356C22.7368 11.1872 22.5376 11.0879 22.3262 11.0879H5.85634L5.37466 8.92023C5.30605 8.61192 5.03265 8.39258 4.7168 8.39258H0.673828C0.301643 8.39258 0 8.69422 0 9.06641C0 9.43859 0.301643 9.74023 0.673828 9.74023H4.17633C4.26161 10.1244 6.48138 20.1135 6.60913 20.6882C5.89301 20.9995 5.39062 21.7135 5.39062 22.543C5.39062 23.6576 6.29748 24.5645 7.41211 24.5645H19.6309C20.003 24.5645 20.3047 24.2628 20.3047 23.8906C20.3047 23.5184 20.003 23.2168 19.6309 23.2168H7.41211C7.04063 23.2168 6.73828 22.9145 6.73828 22.543C6.73828 22.172 7.03957 21.8702 7.41035 21.8693ZM21.4328 12.4355L19.1225 20.5215H7.95258L6.1557 12.4355H21.4328Z" fill="white"/>
            <path d="M6.73828 26.5859C6.73828 27.7006 7.64514 28.6074 8.75977 28.6074C9.87439 28.6074 10.7812 27.7006 10.7812 26.5859C10.7812 25.4713 9.87439 24.5645 8.75977 24.5645C7.64514 24.5645 6.73828 25.4713 6.73828 26.5859ZM8.75977 25.9121C9.13125 25.9121 9.43359 26.2145 9.43359 26.5859C9.43359 26.9574 9.13125 27.2598 8.75977 27.2598C8.38828 27.2598 8.08594 26.9574 8.08594 26.5859C8.08594 26.2145 8.38828 25.9121 8.75977 25.9121Z" fill="white"/>
            <path d="M16.2617 26.5859C16.2617 27.7006 17.1686 28.6074 18.2832 28.6074C19.3978 28.6074 20.3047 27.7006 20.3047 26.5859C20.3047 25.4713 19.3978 24.5645 18.2832 24.5645C17.1686 24.5645 16.2617 25.4713 16.2617 26.5859ZM18.2832 25.9121C18.6547 25.9121 18.957 26.2145 18.957 26.5859C18.957 26.9574 18.6547 27.2598 18.2832 27.2598C17.9117 27.2598 17.6094 26.9574 17.6094 26.5859C17.6094 26.2145 17.9117 25.9121 18.2832 25.9121Z" fill="white"/>
            <rect x="13.1429" width="1.71429" height="8" fill="white"/>
            <rect x="18" y="3.14285" width="1.71429" height="8" transform="rotate(90 18 3.14285)" fill="white"/>
           </svg>
          </span>
            
           <div class="text">
            Add this <br> design
           </div>
        </button>
        
        <a class="klaviyo-bis-trigger button button--add-to-cart button--klaviyo-bis" href="#">Notify me when available</a>
        
        <button class="open-cart-btn buy-now" id="js-pp-add-to-cart-bar-mobile">
          <span class="image">
            <span class="count">0</span>
            
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41035 14.8693H7.41141C7.41228 14.8693 7.41316 14.8691 7.41404 14.8691H19.6309C19.9316 14.8691 20.1961 14.6696 20.2787 14.3804L22.974 4.94685C23.0321 4.74347 22.9914 4.52483 22.8642 4.35602C22.7368 4.18721 22.5376 4.08789 22.3262 4.08789H5.85634L5.37466 1.92023C5.30605 1.61192 5.03265 1.39258 4.7168 1.39258H0.673828C0.301643 1.39258 0 1.69422 0 2.06641C0 2.43859 0.301643 2.74023 0.673828 2.74023H4.17633C4.26161 3.12435 6.48138 13.1135 6.60913 13.6882C5.89301 13.9995 5.39062 14.7135 5.39062 15.543C5.39062 16.6576 6.29748 17.5645 7.41211 17.5645H19.6309C20.003 17.5645 20.3047 17.2628 20.3047 16.8906C20.3047 16.5184 20.003 16.2168 19.6309 16.2168H7.41211C7.04063 16.2168 6.73828 15.9145 6.73828 15.543C6.73828 15.172 7.03957 14.8702 7.41035 14.8693ZM21.4328 5.43555L19.1225 13.5215H7.95258L6.1557 5.43555H21.4328Z" fill="white"/>
            <path d="M6.73828 19.5859C6.73828 20.7006 7.64514 21.6074 8.75977 21.6074C9.87439 21.6074 10.7812 20.7006 10.7812 19.5859C10.7812 18.4713 9.87439 17.5645 8.75977 17.5645C7.64514 17.5645 6.73828 18.4713 6.73828 19.5859ZM8.75977 18.9121C9.13125 18.9121 9.43359 19.2145 9.43359 19.5859C9.43359 19.9574 9.13125 20.2598 8.75977 20.2598C8.38828 20.2598 8.08594 19.9574 8.08594 19.5859C8.08594 19.2145 8.38828 18.9121 8.75977 18.9121Z" fill="white"/>
            <path d="M16.2617 19.5859C16.2617 20.7006 17.1686 21.6074 18.2832 21.6074C19.3978 21.6074 20.3047 20.7006 20.3047 19.5859C20.3047 18.4713 19.3978 17.5645 18.2832 17.5645C17.1686 17.5645 16.2617 18.4713 16.2617 19.5859ZM18.2832 18.9121C18.6547 18.9121 18.957 19.2145 18.957 19.5859C18.957 19.9574 18.6547 20.2598 18.2832 20.2598C17.9117 20.2598 17.6094 19.9574 17.6094 19.5859C17.6094 19.2145 17.9117 18.9121 18.2832 18.9121Z" fill="white"/>
            </svg>
          </span>
            
           <div class="text">
            <div class="buy-now-text">Buy now</div>
            <div class="see-cart-text">See cart</div>
           </div>
        </button>
      </div>
  `;

    $('#design-materials-gemstones').html(htmlInner);

    function cartCounts (){
      let cartCount = 0;
      $('#cartPopup .cart-popup__list .quantity').each(function () {
        cartCount = cartCount + Number($(this).val());
      });

      if(cartCount !== 0){
        $('#design-materials-gemstones .open-cart-btn .count').show().html(cartCount);

        if($('.site-header__main .site-nav__mobile-right .cart-button-header [data-cart-render="item_count"]').length === 0){
          $('.site-header__main .site-nav__mobile-right .cart-button-header').append(`<span data-cart-render="item_count">${cartCount}</span>`);
        } else {
          $('.site-header__main .site-nav__mobile-right .cart-button-header [data-cart-render="item_count"]').text(cartCount);
        }
      } else {
        $('#design-materials-gemstones .open-cart-btn .count').hide();
      }
    }

    cartCounts();

    if(materialCount) {
      // добавити назви матеріалів
      $('.materials-container .list a').each(function () {
        let text = $(this).attr('data-value');
        let newLink = $(this).attr('href');
        $(this).after(`<a href="${newLink}">${text}</a>`)
      });
    }

    if(gemstoneCount) {
      // добавити назви gemstone
      $('.gemstone-container .list a').each(function () {
        let text = $(this).attr('title');
        let newLink = $(this).attr('href');
        $(this).after(`<a href="${newLink}">${text}</a>`)
      });
    }

    // dropdown
    $('#design-materials-gemstones .toggle').on('click', function (e) {
      $(this).next().stop().slideToggle(300);
    });

    $('#design-materials-gemstones .size-container a, #design-materials-gemstones .materials-container a').on('click', function (e) {
      e.preventDefault();
    });

    if(materialCount) {
      // вибрати матеріал
      $('#design-materials-gemstones .materials-container .list').on('click', 'li', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          'event': 'event-to-ga',
          'eventCategory': 'Exp - Optimize PDP',
          'eventAction': 'click',
          'eventLabel': 'Material'
        });

        let id = $(this).index();
        $(`#variant-container .variant__list--material li:eq(${id}) a`).click();
        addElementsAB();
      });
    }

    if(gemstoneCount) {
      // вибрати камінь
      $('#design-materials-gemstones .gemstone-container .list').on('click', 'li', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          'event': 'event-to-ga',
          'eventCategory': 'Exp - Optimize PDP',
          'eventAction': 'click',
          'eventLabel': 'Gemstone'
        });

        let id = $(this).index();
        $(`#variant-container .variant__list--gemstone li:eq(${id}) a`).click();
        addElementsAB();
      });
    }

    if(sizeCount) {
      // вибрати розмір
      $('#design-materials-gemstones .size-container .list').on('click', 'li', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          'event': 'event-to-ga',
          'eventCategory': 'Exp - Optimize PDP',
          'eventAction': 'click',
          'eventLabel': 'Size'
        });

        let id = $(this).index();
        $(`#variant-container .variant__list--size li:eq(${id}) a`).click();
        addElementsAB();
      });
    }

    $('.product__form--main .button--add-to-cart, #overlay, #cartPopup, #design-materials-gemstones .add-design').on('click', function () {
      setTimeout(function () {
        cartCounts();
      }, 1000);
    });

    let notify = $('.product__form--main .klaviyo-bis-trigger');
    if(notify.css('display') === 'inline-block'){
      $('#design-materials-gemstones .add-design').hide();
      $('#design-materials-gemstones .klaviyo-bis-trigger').show();

      $('#design-materials-gemstones .buy-now-text').hide();
      $('#design-materials-gemstones .see-cart-text').show();
    } else {
      $('#design-materials-gemstones .add-design').show();
      $('#design-materials-gemstones .klaviyo-bis-trigger').hide();

      $('#design-materials-gemstones .buy-now-text').show();
      $('#design-materials-gemstones .see-cart-text').hide();
    }
  }

  addElementsAB();

  $('body').on('click', '#js-pp-add-to-cart, #design-materials-gemstones .open-cart-btn, .cart-button-header', function () {
    $('#cartPopup, #overlay').removeAttr('style');
  });

  $('#design-materials-gemstones').on('click', '.open-cart-btn', function () {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'event': 'event-to-ga',
      'eventCategory': 'Exp - Optimize PDP',
      'eventAction': 'click',
      'eventLabel': 'Buy now'
    });
  });

  $('#design-materials-gemstones').on('click', ".add-design", function () {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'event': 'event-to-ga',
      'eventCategory': 'Exp - Optimize PDP',
      'eventAction': 'click',
      'eventLabel': 'Add this design'
    });
    $('.product__form--main .button--add-to-cart').click();
    $('#cartPopup, #overlay').hide();
  });

  $('body').on('click', '.product__form--main #js-pp-add-to-cart', function () {
    let sizeActive = $('#variant-container .variant__list--size .variant__label-current').html();
    let nameDrag = $('#variant-container .variant__list--material .variant__label-current').text();
    let nameProduct = $('.product__content .product__title').text();
    let product = nameProduct + nameDrag + " / " + sizeActive + nameDrag + " / " + sizeActive;

    if(localStorage.getItem(product) === null){
      localStorage.setItem(product, product);
    }
  });

  $('body').on('click', '#design-materials-gemstones .open-cart-btn, .product__form--main #js-pp-add-to-cart',function () {
    let sizeActive = $('#variant-container .variant__list--size .variant__label-current').html();
    let nameDrag = $('#variant-container .variant__list--material .variant__label-current').text();
    let nameProduct = $('.product__content .product__title').text();
    let product = nameProduct + nameDrag + " / " + sizeActive + nameDrag + " / " + sizeActive;

    if(localStorage.getItem(product) === null){
      localStorage.setItem(product, product);
      $('.product__form--main .button--add-to-cart').click();
    } else {
      $('.site-header__right .cart-button-header').click();
    }
  });

  $('body').on('click', '.product__form--main #js-pp-add-to-cart, #design-materials-gemstones .add-design', function () {
    let nameDrag = $('#variant-container .variant__list--material .variant__label-current').text();
    let nameProduct = $('.product__content .product__title').text();
    let sizeActive = $('#variant-container .variant__list--size .variant__label-current').html();
    let product = nameProduct + nameDrag + " / " + sizeActive + nameDrag + " / " + sizeActive;

    if(localStorage.getItem(product) === null){
      localStorage.setItem(product, product);
    }
  });

  $('.cart-popup__content .cart-popup__list').on('click', '.cart-popup__item-remove', function () {
    let text = $(this).parents('.cart-popup__item').find('.cart-popup__item-size .cart-popup__item-size-val').text();
    let nameProduct = $(this).parents('.cart-popup__item').find('.cart-popup__item-title a').text();

    if(localStorage.getItem(nameProduct + text) !== null){
      localStorage.removeItem(nameProduct + text);
    }
  });

  // клік по елементам на сторінці
  $('#variant-container .variant__link').on('click', function () {
    addElementsAB();
  });

  setTimeout(function () {
    $("#design-materials-gemstones").slideDown(500);
  }, 1500);
}
