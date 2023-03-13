import {getTranslation} from "./helpers.js";

const select = document.querySelector('#languages-list')
const  output = document.querySelector('#output-text')
select.addEventListener('change', e => {
    output.textContent = getTranslation(e.target.value)
})