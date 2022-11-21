// https://benfrain.com/creating-a-language-switcher-in-javascript/

// https://stackoverflow.com/questions/70783026/how-to-switch-language-by-toggle-button

// https://www.geeksforgeeks.org/how-to-switch-the-language-of-the-page-using-javascript/?tab=article
// https://weglot.com/9-tips-for-designing-a-multi-language-website/






// https://codepen.io/j0be/pen/jWGVvV
// https://codepen.io/raubaca/pen/bGWmZje
// https://codepen.io/yy/pen/vOYqYV
// https://codepen.io/General-Dev/pen/JRjwPa
// https://codepen.io/himalayasingh/pen/pxKKgd


const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.d-menu');
    const options = dropdown.querySelectorAll('.d-menu li');
    const selected = dropdown.querySelector('.selected');


    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });


    options.forEach(option =>{
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });

            option.classList.add('active');
        });
    });
});