import {imagesLoaded} from 'imagesloaded';

function resizeGridItem(item){
    const grid = document.getElementsByClassName("grid")[0];
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    let rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
 }

function resizeAllGridItems(){
    const allItems = document.getElementsByClassName("item");
    for(let x=0;x<allItems.length;x++){
       resizeGridItem(allItems[x]);
    }
}

window.onload = resizeAllGridItems();

window.addEventListener("resize", resizeAllGridItems);

let allItems = document.getElementsByClassName("item");

for(let x=0;x<allItems.length;x++){
    imagesLoaded( allItems[x], resizeInstance);
} 

function resizeInstance(instance){
    let item = instance.elements[0];
    resizeGridItem(item);
 }
