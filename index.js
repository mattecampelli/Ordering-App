import { menuArray } from "./data.js"

const toggleBtn = document.getElementById("dropdown-toggle")
const dropdownList = document.getElementById("dropdown-list")
const dropdown = document.querySelector(".dropdown")
const renderedItems = document.getElementById("rendered-items")
const addItemBtn = document.getElementById("add-to-order")
const selection = document.getElementById("selection")
const inputEl = document.querySelectorAll('input[type="checkbox"]')
const addToCartBtn = document.querySelectorAll(".add-to-cart")
const orderItems = document.getElementById("order-items")
const totalPrice = document.getElementById("total-price")
const orderSummary = document.getElementById("order-summary")
const payNowBtn = document.getElementById("pay-now")
const paymentModal = document.getElementById("payment-modal")
const paymentForm = document.getElementById("payment-form")
let count = 0

toggleBtn.addEventListener("click", function() {
    dropdownList.classList.toggle("hidden")
})

document.addEventListener("click", function(e) {
    const clickedInsideDropdown = dropdown.contains(e.target)

    if (!clickedInsideDropdown) {
        dropdownList.classList.add("hidden")
    }
})

addItemBtn.addEventListener("click", () => {
    selection.classList.add("fade-out")

    setTimeout(() => {
        selection.classList.add("hidden")

        renderMenu()
        renderedItems.style.display = "block"
        orderSummary.style.display = "block"

        setTimeout(() => {
            renderedItems.classList.add("visible")
            orderSummary.classList.add("visible")
        }, 10)
    }, 500)
})

function renderMenu() {
    const itemSelected = menuArray.map( (item) => {
        if (inputEl[item.id].checked) {
            const foodSelected =
                                `<div class="item">
                                    <i class="${item.image}"></i>
                                    <div class="item-specs">
                                        <p>${item.name}</p>
                                        <p class="ingredients">${item.ingredients.join(", ")}</p>
                                        <p>${item.price} €</p>
                                    </div>
                                    <button class="add-to-cart" data-id="${item.id}">+</button>
                                </div>`
            return foodSelected
        }
    } )
    renderedItems.innerHTML = itemSelected.join("")
}

function renderOrderSummary() {
    orderItems.innerHTML = menuArray.map((item) => {
        if (item.count > 0) {
            return `<div class="order-item">
                        <div class="final-check">
                            <p>${item.name} x${item.count}</p>
                            <button class="remove-item" data-id="${item.id}">Rimuovi x1</button>
                        </div>
                        <p>${item.price * item.count} €</p>
                    </div>`
        }
    }).join(" ")

    const total = menuArray.reduce((acc, item) => acc + (item.price * item.count), 0)

    totalPrice.innerHTML = `<p>Totale: ${total} €</p>
    <button class="pay-now" id="pay-now" ${total === 0 ? "disabled" : ""}>Paga ora</button>`
}

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("add-to-cart")) {
        const itemId = e.target.dataset.id
        const clickedItem = menuArray.find( (item) => {
            return item.id === Number(itemId)
        })

        if (clickedItem) {
            clickedItem.count += 1
        }

        renderOrderSummary()
    }

    if (e.target.classList.contains("remove-item")) {
        const itemId = e.target.dataset.id
        const clickedItem = menuArray.find( (item) => {
            return item.id === Number(itemId)
        })

        if (clickedItem) {
            clickedItem.count -= 1
            if (clickedItem.count < 0) {
                clickedItem.count = 0
            }
        }

        renderOrderSummary()
    }

    if (e.target.classList.contains("pay-now")) {
        paymentModal.classList.remove("hidden")

        setTimeout(() => {
            paymentModal.classList.add("visible")
        }, 10)
    }

    if (e.target.classList.contains("new-order-btn")) {
        location.reload()
    }
})

paymentForm.addEventListener("submit", function(e) {
    e.preventDefault()

    const formData = new FormData(paymentForm)
    const customerName = formData.get("name")
    const customerAdress = formData.get("address")

    document.querySelector(".payment-form-container").innerHTML = `
        <p class="confirmation-message">Il tuo cibo sta arrivando a ${customerAdress}, ${customerName}!</p>
        <button type="button" class="send-food-btn new-order-btn">Fai un altro ordine</button>
    `
})