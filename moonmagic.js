try {
  hj('trigger', 'credit-offer');
} catch (e) {
}

function initjQuery(callback) {
  var script = document.createElement("script")
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
  $("#design-materials-gemstones, #ab-test").remove();

  // materials elements
  let materialsList = $('#variant-container .variant__list--material').html();
  let materialActive = $('#variant-container .variant__list--material .variant__label-current').html();
  let materialActiveElement = $('#variant-container .variant__list--material .active').parent().html();

  // gemstone elements
  let gemstonelsList = $('#variant-container .variant__list--gemstone').html();
  let gemstonelActive = $('#variant-container .variant__list--gemstone .variant__label-current').html();
  let gemstonelActiveElement = $('#variant-container .variant__list--gemstone .active').parent().html();

  let html = `
    <div id="design-materials-gemstones">
      <h2 class="title">Order different materials and gemstones in this design:</h2>
      
      <div class="wrap-materials-gemstones">
        <div class="materials-container">
          <button class="toggle">
            <div>${materialActiveElement}</div>
            
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
        
        <div class="gemstone-container">
          <button class="toggle">
            <div>${gemstonelActiveElement}</div>
            
            <div>
              Gemstone:
              <span class="text">
                ${gemstonelActive}
                
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 9.36623L0.910026 10.2857L6 5.14286L0.910026 0L0 0.919481L4.17995 5.14286L0 9.36623H0Z" fill="black"/>
                </svg>
              </span>
            </div>
          </button>
          <div class="list">${gemstonelsList}</div>
        </div>
      </div>
    </div>
  `;
  $('body').append(html);

  // добавити матеріали
  $('.materials-container .list a').each(function () {
    let text = $(this).attr('data-value');
    $(this).after(`<span>${text}</span>`)
  });

  // add gemstone
  $('.gemstone-container .list a').each(function () {
    let text = $(this).attr('title');
    $(this).after(`<span>${text}</span>`)
  });

  // перемикач для матеріалів
  $('#design-materials-gemstones .toggle').on('click', function () {
    $(this).next().stop().slideToggle(1000);
  });



  let styles = "<style id='ab-test'>";
  styles += `
	#design-materials-gemstones{
	  position: fixed;
    z-index: 1027;
    width: 100%;
    height: 200px;
    left: 0;
    bottom: 0;
    background: #fff;
    padding-top: 5px;
    box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
	}
	#design-materials-gemstones h2{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #5C5C5C;
    letter-spacing: inherit;
    text-transform: inherit;
    text-align: center;
    padding: 0 10px;
    margin-bottom: 3px;
  }
  #design-materials-gemstones .materials-container{
     position: relative;
  }
  #design-materials-gemstones .materials-container .text{
    display: block;
  }
  #design-materials-gemstones .toggle .variant__link, #design-materials-gemstones .toggle .variant__link--gemstone{
    border-radius: 50%;
    width: 38px;
    height: 38px;
  }
  #design-materials-gemstones .toggle{
    text-align: left;
    background: #fff;
    border: none;
    font-weight: 500;
    font-size: 12px;
    line-height: 13px;
    color: #5C5C5C;
    font-family: Montserrat,sans-serif;
    display: flex;
    align-items: center;
    padding: 0;
  }
  #design-materials-gemstones .toggle .text{
    color: #000;
    font-size: 12px;
    display: block;
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
  #design-materials-gemstones .wrap-materials-gemstones{
    display: flex;
  }
  #design-materials-gemstones .wrap-materials-gemstones > *{
    position: relative;
    padding: 0 10px;
    flex: 1;
  }
  #design-materials-gemstones .list a{
    width: 38px;
    height: 38px;
  }
  #design-materials-gemstones .list a + span{
    font-size: 12px;
    color: #000;
  }
  #design-materials-gemstones .wrap-materials-gemstones .variant__item{
    display: flex;
    align-items: center;
  }
	`;
  styles += "</style>";
  jQuery('body').append(styles);
}
