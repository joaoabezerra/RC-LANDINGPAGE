const addBtn = document.getElementById("addBtn");
const itemInput = document.getElementById("itemInput");
const shoppingList = document.getElementById("shoppingList");
const notification = document.getElementById("notification");

function showNotification() {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

function createItem(itemName) {
  const li = document.createElement("li");

  li.innerHTML = `
    <div class="item-content">
      <input type="checkbox">
      <span>${itemName}</span>
    </div>

    <button class="delete-btn">
      🗑️
    </button>
  `;

  const checkbox = li.querySelector("input");
  const text = li.querySelector("span");
  const deleteBtn = li.querySelector(".delete-btn");

  checkbox.addEventListener("change", () => {
    text.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
    showNotification();
  });

  shoppingList.appendChild(li);
}

addBtn.addEventListener("click", () => {
  const itemName = itemInput.value.trim();

  if (itemName === "") {
    alert("Digite um item válido.");
    return;
  }

  createItem(itemName);

  itemInput.value = "";
  itemInput.focus();
});

document.querySelectorAll("li").forEach((item) => {
  const checkbox = item.querySelector("input");
  const text = item.querySelector("span");
  const deleteBtn = item.querySelector(".delete-btn");

  checkbox.addEventListener("change", () => {
    text.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", () => {
    item.remove();
    showNotification();
  });
});