const fruitForm = document.querySelector("#inputSection form")

const fruitList = document.querySelector("#fruitSection ul")

const fruitNutrition = document.querySelector("#nutritionSection p")

const fruitCarbs = document.querySelector("#carbs")

const fruitProtein = document.querySelector("#protein")

const fruitFat = document.querySelector("#fat")

const fruitSugar = document.querySelector("#sugar")

// Get the fruit data 

const fetchFruitData = fruit => {
    // This will fetch the data and return a promise

    // sends request to a url
    fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`)

    // response object converted to json format
    .then((resp) => resp.json())
    .then(data => {
        console.log(data)
        addFruit(data)
    })
    .catch(e => console.error(e))
}

let totalCal = 0
let totalCarbs = 0
let totalProtein = 0
let totalFat = 0
let totalSugar = 0

const addFruit = fruit => {
    const li = document.createElement("li")
    li.textContent = fruit.name 
    fruitList.appendChild(li)

    li.addEventListener("click", () => {
        fruitList.removeChild(li)
    })

    totalCal += fruit.nutritions.calories
    fruitNutrition.textContent = `Total calories: ${totalCal}`

    totalCarbs += fruit.nutritions.carbohydrates
    fruitCarbs.textContent = `Total Carbohydrates: ${totalCarbs}`

    totalFat += fruit.nutritions.fat
    fruitFat.textContent = `Total Fat: ${totalFat}`

    totalProtein += fruit.nutritions.protein
    fruitProtein.textContent = `Total Protein: ${totalProtein}`

    totalSugar += fruit.nutritions.sugar
    fruitSugar.textContent = `Total Sugar: ${totalSugar}`
} 

fruitForm.addEventListener("submit", e => {
    e.preventDefault()
    fetchFruitData(e.target.fruitInput.value)
    e.target.fruitInput.value = ""
})


