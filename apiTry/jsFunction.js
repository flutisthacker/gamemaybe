function addClass(qSelector,myclass){
    document.querySelector(qSelector).classList.add(myclass)
}
function hasClass(qSelector,myclass){
    document.querySelector(qSelector).classList.contains(myclass)
}
function removeClass(qSelector,myclass){
    document.querySelector(qSelector).classList.remove(myclass)
}
function parentNode(qSelector,myclass){
    document.querySelector(qSelector).parentNode
}

function getObjectKeys(Objs){
    return Object.keys(Objs);
}

function getObjectFromEntries(entries1){
    return Object.fromEntries(entries1)
}
function getObjectEntries(obj){
    return Object.entries(obj)
}

function changeInnerHTML(id,newHTML){
   return document.querySelector(id).innerHTML = newHTML
}
function changeInnerText(id,newHTML){
    return document.querySelector(id).innerText = newHTML
}


function getIndexOf(arr1,indx){
    return arr1.indexOf(indx)
}
function myDom(dom){
    return document.querySelector(dom);
}
function DOMaddEvent(dom,evnt,fntn){
    myDom(dom).addEventListener(evnt,e=>fntn)
}

async function fetchAPI(url){
    const response = await fetch(url);
    const data = await response.json();
    return JSON.stringify(data)
}

function isArray(item){
    return Array.isArray(item);
}

function isObject(objValue) {
    return objValue && typeof objValue === 'object' && objValue.constructor === Object;
  }