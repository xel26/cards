import { Products } from "./products.js";
const wrapperCream = document.querySelector(".wrapper-cream");
const wrapperSage = document.querySelector(".wrapper-sage");

function card(product) {
  return `
  <div class="card">
          <img src=${product.img}>
          <div class="grid">
              <div class="left-grid">
                  <a href=${product.links[0]} class="link"></a>
                  <a href=${product.links[1]} class "link"></a>
                  <a href=${product.links[2]} class="link"></a>
              </div>
              <div class="right-grid">
                  <a href=${product.links[3]} class="link"></a>
                  <a href=${product.links[4]} class="link"></a>
              </div>
          </div>
      </div>
  `;
}

Products.forEach((product) => {
    if(product.category == "cream"){
        wrapperCream.innerHTML += card(product)
    }else {
        wrapperSage.innerHTML += card(product)
    }
});