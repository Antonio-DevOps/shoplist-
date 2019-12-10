"use strict";

// for list item variebles
let ullist = document.querySelector(".list");
let liNew = document.createElement("li");
let createSpanOne = document.createElement("span");
let createSpanTwo = document.createElement("span");
let lableCreate = document.createElement("label");
let ItsForForm = document.querySelector(".form");
let inputNew = document.createElement("input");
let inputSecond = document.createElement('input');


// for add second list item
let ullistSecond = document.querySelector(".list");
let liNewSecond = document.createElement("li");
let createSpanOneSecond = document.createElement("span");
let createSpanTwoSecond = document.createElement("span");
let lableCreateSecond = document.createElement("label");
let ItsForFormSecond = document.querySelector(".form");
let inputNewSecond = document.createElement("input");
let inputSecondNew = document.createElement('input');
let BtnNewForLi = document.createElement("button");

// ItsForForm.onsubmit = function (e) {
//     e.preventDefault();
//   }
// add New Year position

liNew.appendChild(lableCreate);
lableCreate.setAttribute("for", "box-next");
inputNew.setAttribute("type", "checkbox");
inputNew.setAttribute("id", "box-next");
createSpanOne.textContent = "New Year";
createSpanTwo.textContent = "buy gifts";
createSpanTwo.setAttribute("class", "span-group");
lableCreate.appendChild(inputNew);
lableCreate.appendChild(createSpanOne);
lableCreate.appendChild(createSpanTwo);
ullist.appendChild(liNew);

// variebles
let allLabel = document.querySelectorAll("label");
let FormNew = document.createElement("form");
FormNew.classList.add("new-form");
inputSecond.setAttribute("type", "text");
inputSecond.setAttribute("class", "form-input");


// createBotton

let btnForForm = document.createElement("button");
btnForForm.textContent = "Add";
FormNew.appendChild(inputSecond);
FormNew.appendChild(btnForForm);

ItsForForm.insertAdjacentElement("afterEnd", FormNew);
FormNew.style.display = "flex";
FormNew.style.justifyContent = "center";

// cycle for add Botton

for (let i = 0; i < allLabel.length; i++){
    let btnForLi = document.createElement('button');
    btnForLi.textContent = 'Delete';
    btnForLi.classList.add('del');
    btnForLi.style.marginLeft = 'auto';
    allLabel[i].appendChild(btnForLi);
    allLabel[i].style.display = "flex";
}

// click and add new li

btnForForm.onclick = function (event) {
    event.preventDefault();
    // u can find upper variebles "for add second list item"
    liNewSecond.appendChild(lableCreateSecond);
    lableCreateSecond.setAttribute("for", "box-next");
    inputNewSecond.setAttribute("type", "checkbox");
    inputNewSecond.setAttribute("id", "box-next");
    createSpanTwo.setAttribute("class", "span-group");
    lableCreateSecond.appendChild(inputNewSecond);
    lableCreateSecond.appendChild(createSpanOneSecond);
    lableCreateSecond.appendChild(createSpanTwoSecond);
    ullistSecond.appendChild(liNewSecond);

    // add btn for new li
    
    BtnNewForLi.classList.add("del");
    BtnNewForLi.textContent = "Delete";
    BtnNewForLi.style.marginLeft = "auto";
    BtnNewForLi.style.backgroundColor = "pink";
    BtnNewForLi.style.borderRadius = "3px";
    lableCreateSecond.style.display = "flex";
    lableCreateSecond.appendChild(BtnNewForLi);

    if (inputSecond.value === "") {
        ullistSecond.removeChild(liNewSecond);
    } else {
        createSpanOneSecond.innerText = inputSecond.value;
        event.preventDefault;
    }
}
let allLiHover = document.querySelectorAll("li");

for (let i = 0; i < allLiHover.length; i++){
    allLiHover[i].onmousemove = function (){
        this.classList.add("item--hover");
    }
    allLiHover[i].onmouseleave = function () {
       this.classList.remove('item--hover');
}
}

//   remove li

let removeBtn = document.querySelectorAll(".del");

document.body.onclick = function (m) {
    if (m.target.classList.contains("del")){
        m.target.closest("li").remove();
    }
}
inputSecond.style.cssText = 'width: 200px; height: 30px; border: 1px solid transparent;border-radius: 5px 0 0 5px; border-right: none; opasity: .6;'
btnForForm.style.cssText = 'width: 50px; height: 34px;color: #fff; font-weight: bold; background: inherit; border: 1px solid #fff;'

let modalNewWindow = document.querySelector(".ba-tooltip");

inputSecond.onfocus = function () {
    modalNewWindow.style.display = 'block';
    modalNewWindow.style.bottom = '80px';
    modalNewWindow.style.left = '270px';
  }