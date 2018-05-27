export function showMenu (rootEl) {
    const toggle = rootEl.querySelector('.toggle');
    const menuItems = rootEl.querySelector('.burger-menu');
// debugger;
    function show() {
        toggle.addEventListener('click', ()=>{
            menuItems.classList.toggle('active')
        })
    }
    show()
}