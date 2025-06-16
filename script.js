var input_val = document.getElementById("item-input");
var box_val = document.getElementById("item-list");
var filter_val = document.getElementById("filter");
var clear_btn = document.getElementById('clear');
var shopping_list = [];

printArray();
document.getElementsByClassName("btn")[0].addEventListener("click", function (e) {
    e.preventDefault();
    if (input_val.value == "") {
        alert("Enter Appropriate Values");
    }
    else {
        shopping_list.push(input_val.value);
        printArray();
    }

    input_val.value = "";
    filter_val.value = "";

});

function printArray() {
    box_val.innerHTML = "";
    for (let i = 0; i < shopping_list.length; i++) {
        box_val.innerHTML += `
            <li>
                ${shopping_list[i]}
                <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark" id=${i}></i>
                </button>
            </li>
         `;

    }
}

function clearHistory() {
    if (box_val.innerText != "") {
        var choice = confirm("Are you sure you want to delete all the list?");
        if (choice) {
            box_val.innerHTML = "";
            shopping_list = [];
        }
    }
}

clear_btn.addEventListener('click', clearHistory);

box_val.addEventListener('click', (e) => {
    let targeted_btn_id = e.target.id;
    if (targeted_btn_id) {
        shopping_list.splice(targeted_btn_id, 1);
        printArray();
    }
})

filter_val.addEventListener("input", function () {
    const filter_val = this.value.toLowerCase();
    const filtered_list = shopping_list.filter(item => item.toLowerCase().includes(filter_val));
    printFilteredArray(filtered_list);
});

function printFilteredArray(filteredArray) {
    box_val.innerHTML = "";
    for (let i = 0; i < filteredArray.length; i++) {
        const indexInOriginal = shopping_list.indexOf(filteredArray[i]);
        box_val.innerHTML += `
            <li>
                ${filteredArray[i]}
                <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark" id=${indexInOriginal}></i>
                </button>
            </li>
         `;
    }
}