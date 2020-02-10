try {
  hj('trigger', 'credit-offer');
}
catch (e) { }

function initjQuery(callback) {
  var script = document.createElement( "script" )
  script.type = "text/javascript";
  if(script.readyState) {
    script.onreadystatechange = function() {
      if ( script.readyState === "loaded" || script.readyState === "complete" ) {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = function() {
      callback();
    };
  }
  script.src = '//code.jquery.com/jquery-3.3.1.min.js';
  document.getElementsByTagName( "head" )[0].appendChild( script );
}
if (!window.jQuery) {
  initjQuery(function() {
    readyjQueryinit();
  });
}else{
  readyjQueryinit();
}
function readyjQueryinit(){

  window.onload = function(){

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'event': 'autoEvent',
      'eventCategory': 'Exp - Credit offer',
      'eventAction': 'loaded'
    });
  }


  function AddCreditOffer(obj) {
    this.wrapperElement  = obj.wrapperElement;
    this.wrapperClass = obj.wrapperClass;
    this.name = obj.name;
    this.className = obj.className;
    this.imgLinks = obj.imgLinks;
    this.btnContent = obj.btnContent;
    this.newTitleTag = obj.newTitleTag;
    this.newTitleContent = obj.newTitleContent;
    this.newTitleClass = obj.newTitleClass;
    this.btnClass = obj.btnClass;
    this.creditInfoStart = obj.creditInfoStart;
    this.creditInfoAfterPrice = obj.creditInfoAfterPrice;
    this.creditInfoEnd = obj.creditInfoEnd;
    this.creditInfoAfterClass = obj.creditInfoAfterClass;
    this.creditInfoTag = obj.creditInfoTag;
    this.creditInfoClass = obj.creditInfoClass;
    this.creditInfoPriceTag = obj.creditInfoPriceTag;
    this.creditInfoPriceClass = obj.creditInfoPriceClass;


  }
  // инициализация создания нового блока
  AddCreditOffer.prototype.init = function(){
    console.log('inited');
    // создание блока
    let element = this.wrapper(this.wrapperElement,this.wrapperClass);
    // добавление в блок заголовка
    let newTitle = this.newElementContented(this.newTitleTag,this.newTitleClass,this.newTitleContent);
    element.appendChild(newTitle);
    // добавление инфоблока об оплате
    let priceBox = this.newElementContented(this.creditInfoTag,this.creditInfoClass,this.creditInfoStart);
    // добавление блока с числом
    let newNumberBox = this.wrapper(this.creditInfoPriceTag,this.creditInfoPriceClass);
    // добавление блока с текстом после числа
    let afterPricebox = this.newElementContented(this.creditInfoPriceTag,this.creditInfoAfterClass,this.creditInfoAfterPrice);
    // наполнение инфоблока об оплате
    priceBox.appendChild(newNumberBox);
    priceBox.appendChild(afterPricebox);
    priceBox.insertAdjacentHTML('beforeend','<br>'+this.creditInfoEnd);
    // добавление инфоблока в главный блок
    element.appendChild(priceBox);
    // добавление картинок
    let newImgBox = this.newImg();
    element.appendChild(newImgBox);
    // добавление кнопки
    let newBtn = this.newElementContented('btn',this.btnClass,this.btnContent);
    element.appendChild(newBtn);
    console.log(element);
    if(document.querySelector(`.${this.name}`) !== null) {
      document.querySelector(`.${this.name}`).insertAdjacentElement('beforebegin',element);
    }
  };
  // создание нового елемента
  AddCreditOffer.prototype.wrapper = function(name,className){
    let element = document.createElement(name);
    element.classList.add(className);
    return element;
  };
  // добавление картинок
  AddCreditOffer.prototype.newImg = function(){
    let imgWrapper = this.wrapper('div','img_box');
    this.imgLinks.map((val)=>{
      let element = this.wrapper('img','bank_img');
      element.setAttribute('src', val);
      imgWrapper.appendChild(element);

    });
    return imgWrapper;
  };
  // создание елемента с контентом (кнопки, заголовки, абзацы)
  AddCreditOffer.prototype.newElementContented = function(elem,elemClass,elemContent){
    let element = this.wrapper(elem,elemClass);
    element.innerText = elemContent;
    return element;
  };
  const newOffer = new AddCreditOffer({
    wrapperElement: 'div',
    wrapperClass: 'offer_wrapper',
    newTitleTag: 'p',
    newTitleClass: 'offer_title',
    newTitleContent: 'Кредитные предложения',
    name: 'product-additional-actions',
    className: 'product-buy-container',
    imgLinks: [
      'https://eldorado.ua/img/privat.svg',
      'https://eldorado.ua/img/mono-icon.svg',
      'https://res.cloudinary.com/dbbrpie5a/image/upload/v1579210490/eldorado/bank_vrroh2.png',
      'https://res.cloudinary.com/dbbrpie5a/image/upload/v1579215061/eldorado/alfa_logo_qmdydl.png',
      'https://eldorado.ua/img/a-bank.svg',
    ],
    btnContent: 'Узнать больше',
    btnClass: 'more_btn',
    creditInfoStart: 'От',
    creditInfoAfterPrice: 'грн. в месяц',
    creditInfoEnd: 'при оплате частями или покупке в кредит',
    creditInfoAfterClass: 'price_bolder',
    creditInfoTag: 'p',
    creditInfoClass:'price_box',
    creditInfoPriceTag:'span',
    creditInfoPriceClass:'price_number',
  });
  let addElement = function(){
    if (document.querySelector('.credit-information .button') !== null){
      if(document.querySelector('.product-additional-actions') !== null){

        newOffer.init();
        clearInterval(newInterval);
      }else {
        console.log('no');
        return
      }
    }
  };

  let moveElement = function(){
    if(document.querySelector('.credit-information .button') !== null){
      document.querySelector('.price_number').innerText = parseInt(document.querySelector('.value.credit-value a').innerText);
      document.querySelector('.img_box').insertAdjacentElement('afterend', document.querySelector('.credit-information .button'));
      document.querySelector('.more_btn').addEventListener('click',function(){
        document.querySelector('.offer_wrapper .button').click();
      })
      clearInterval(btnInterval);
      console.log('block added');

    } else {
      if (document.querySelector('.credit-information .button') !== null){
        console.log('block to add did not appear');
        return false;
      }
    }
  };
  let newInterval = setInterval(addElement,50);
  let btnInterval = setInterval(moveElement,50);
  document.addEventListener('click',function(e){
    console.log('clicked target: ',e.target)
    if(e.target.innerText =='Купить в кредит'){

      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        'event': 'autoEvent',
        'eventCategory': 'Exp - Credit offer',
        'eventAction': 'click',
        'eventLabel': 'Buy on credit'
      });
    }
    if(e.target.className =='more_btn'){

      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        'event': 'autoEvent',
        'eventCategory': 'Exp - Credit offer',
        'eventAction': 'click',
        'eventLabel': 'Learn more'
      });
    }
    if(e.target.parentElement.closest('.title.lp')){
      newInterval = setInterval(addElement,50);
      btnInterval = setInterval(moveElement,50);
      console.log('new inteval after click link');
    }else if(e.target.closest('.goods-image')){
      newInterval = setInterval(addElement,50);
      btnInterval = setInterval(moveElement,50);
    }
  });


  var styles = "<style>";
  styles += `
	.img_box {
		display: flex;
		margin-top: 20px;
	    margin-bottom: 20px;
	}
	.bank_img {
		width: 60px;
		display: block;
		height: 20px;
		object-fit: contain;
	}
	.offer_wrapper {
		background-color: #fff;
		margin-bottom: 30px;
		padding-left: 5px;
		padding-right: 5px;
	}
	.more_btn,
	.offer_wrapper .button{
		display: flex;
		height: 44px;
	    text-align: center;
	    border: 2px solid #fd0028;
	    cursor: pointer;
	    align-items: center;
	    font-weight: 500;
	    background-color: #fff;
	    box-sizing: border-box;
	    overflow: hidden;
	    justify-content: center;
	    z-index: 1;
	    transition: color 1s ease;
	    color: #474a4b;
	    margin-top: 20px;
	}
	.offer_wrapper .button {
		color: #fff;
		background-color: #fd0028;
	}
	.offer_title {
		color:#939596;
		padding-left: 20px;
	}
	.price_box {
		padding-left: 20px;
		font-size: 16px;
	}
	  @media(max-width: 374px){
	    .price_box{	font-size: 16px;}
	  }
	.price_number,
	.price_bolder{
		font-size: 26px;
	    font-weight: 700;
	    margin-left: 5px;
	}
	.credit-information {
		display: none;
	}
	`;
  styles    += "</style>";
  jQuery('body').append(styles);
}
