import { Popup } from "./popup.js";

export class PopupCatShow extends Popup {
  constructor(className) {
    super(className);
  }

  open(data) {
    this.fillData(data)
    super.open();
  }


  
  fillData(data) {
    this._popupElement.querySelector("h2").innerText = data.name
    this._popupElement.querySelector(".cat-show-age").innerText = `возраст: ${data.age}`
    this._popupElement.querySelector(".cat-show-description").innerText = data.description
    this._popupElement.querySelector(".cat-show-img").src = data.image
     this._popupElement.querySelector(".cat-show-rate").innerText = `рейтинг: ${data.rate} / 10`;


  
   }

}

