import { Products } from "./products.js";
const wrapperCream = document.querySelector(".wrapper-cream");
const wrapperMint = document.querySelector(".wrapper-mint");
const wrapperDenim = document.querySelector(".wrapper-denim");
const wrapperRose = document.querySelector(".wrapper-rose");
const wrapperDark = document.querySelector(".wrapper-dark");
const wrapperLavender = document.querySelector(".wrapper-lavender");
const wrapperSunkist = document.querySelector(".wrapper-sunkist");

function card(product) {
  return `
  <div class="card">
          <img src=${product.img}>
          <div class="grid">
              <div class="left-grid">
                  <a href=${product.links[0]} class="link" target="_blank"></a>
                  <a href=${product.links[1]} class "link" target="_blank"></a>
                  <a href=${product.links[2]} class="link" target="_blank"></a>
              </div>
              <div class="right-grid">
                  <a href=${product.links[3]} class="link" target="_blank"></a>
                  <a href=${product.links[4]} class="link" target="_blank"></a>
              </div>
          </div>
      </div>
  `;
}

Products.forEach((product) => {
    if(product.category == "cream"){
        wrapperCream.innerHTML += card(product)
    }else if(product.category == "mint"){
        wrapperMint.innerHTML += card(product)
    }else if(product.category == "denim"){
        wrapperDenim.innerHTML += card(product)
    }else if(product.category == "rose"){
        wrapperRose.innerHTML += card(product)
    }else if(product.category == "dark"){
        wrapperDark.innerHTML += card(product)
    }else if(product.category == "lavender"){
        wrapperLavender.innerHTML += card(product)
    }else if(product.category == "sunkist"){
        wrapperSunkist.innerHTML += card(product)
    }
});