let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

let leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromStorage)


if (leadsFromStorage) {
    myLeads = leadsFromStorage
    renderLeads()
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    renderLeads();
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

