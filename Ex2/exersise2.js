let btn = document.getElementById('btn')

function print_current_page() {
    window.print()
}


btn.addEventListener('click', print_current_page)