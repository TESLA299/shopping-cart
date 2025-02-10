const cart_data = [
  { title: "Title 1", id: 1, image: "https://via.placeholder.com/150" },
  { title: "Title 2", id: 2, image: "https://via.placeholder.com/150" },
  { title: "Title 3", id: 3, image: "https://via.placeholder.com/150" },
  { title: "Title 4", id: 4, image: "https://via.placeholder.com/150" },
  { title: "Title 5", id: 5, image: "https://via.placeholder.com/150" },
  { title: "Title 6", id: 6, image: "https://via.placeholder.com/150" },
  { title: "Title 7", id: 7, image: "https://via.placeholder.com/150" },
  { title: "Title 8", id: 8, image: "https://via.placeholder.com/150" },
  { title: "Title 9", id: 9, image: "https://via.placeholder.com/150" },
];
if (!localStorage.getItem("email")) {
  window.location.href = "/login";
}

let my_cart = [];
const Cartcount = document.querySelector("#cart_count");
const CartContainer = document.getElementById("cart_container");
cart_data.forEach((data) => {
  const main_div = document.createElement("div");
  main_div.className = "pb-8";

  const inner_div = document.createElement("div");
  inner_div.className = "relative h-[200px] w-full";
  main_div.appendChild(inner_div);

  const imageTag = document.createElement("img");
  imageTag.className =
    "block size-full object-cover rounded-xl border-2 border-blue-500";
  imageTag.src = data.image;
  inner_div.append(imageTag);

  const inner_div2 = document.createElement("div");
  inner_div2.className =
    "absolute inset-x-0 flex justify-center items-center items-center -bottom-5";

  const cart_button = document.createElement("button");
  cart_button.className = "px-5 py-2 bg-blue-500 rounded-full text-white";
  cart_button.innerText = "Add to Cart";
  const btn_group = document.createElement("div");
  btn_group.className =
    "absolute inset-x-0 flex justify-center items-center items-center -bottom-5";

  const btn_plus = document.createElement("button");
  btn_plus.className = "rounded-l-full px-3 py-1 bg-blue-500 text-white";
  btn_plus.innerText = "+";
  btn_plus.onclick = () => {
    const left_cart = my_cart.filter((cart) => cart.id !== data.id);
    const current_cart = my_cart.find((cart) => cart.id === data.id);
    if (current_cart) {
      my_cart = [...left_cart, { ...current_cart, qty: current_cart.qty + 1 }];

      count.innerText = current_cart.qty + 1;
      Cartcount.innerText = my_cart.reduce((prev, cur) => {
        return prev + cur.qty;
      }, 0);
    }
  };

  const count = document.createElement("p");
  count.className = "px-3 py-1 bg-blue-500 text-white";
  count.innerText = 0;

  const btn_minus = document.createElement("button");
  btn_minus.className = "rounded-r-full px-3 py-1 bg-blue-500 text-white";
  btn_minus.innerText = "-";
  btn_minus.onclick = () => {
    const left_cart = my_cart.filter((cart) => cart.id !== data.id);
    const current_cart = my_cart.find((cart) => cart.id === data.id);
    if (current_cart && current_cart.qty > 0) {
      my_cart = [...left_cart, { ...current_cart, qty: current_cart.qty - 1 }];

      count.innerText = current_cart.qty - 1;
      Cartcount.innerText = my_cart.reduce((prev, cur) => {
        return prev + cur.qty;
      }, 0);
    }
  };

  btn_group.append(btn_plus);
  btn_group.append(count);
  btn_group.append(btn_minus);

  cart_button.onclick = () => {
    alert("You Can Start Order");
    const is_exit = my_cart.find((cart) => cart.id === data.id);
    if (!is_exit) {
      my_cart = [...my_cart, { ...data, qty: 1 }];
      const CartViewDiv = document.createElement("div");
      CartViewDiv.innerHTML = `
      <div class = "w-full flex items-center gap-5">

      <img src= '${data.image}' class = "size-12 rounded"/>
      <div>${data.title}</div>           
      </div>
      `;
      cart_view.append(CartViewDiv);
    }

    inner_div.removeChild(inner_div2);
    inner_div.append(btn_group);
    console.log(my_cart);
    count.innerText = 1;
    Cartcount.innerText = my_cart.reduce((prev, cur) => {
      return prev + cur.qty;
    }, 0);
  };

  inner_div2.appendChild(cart_button);

  inner_div.append(inner_div2);

  CartContainer.append(main_div);
});
const ssmm = document.getElementById("Confrin_order");
ssmm.addEventListener("click", () => {
  if (my_cart.length === 0) {
    Swal.fire({
      title: "Not Confrin",
      icon: "error",
    });
    return;
  }
  Swal.fire({
    title: "Confrin_order",
    icon: "success",
    draggable: true,
  });
});
