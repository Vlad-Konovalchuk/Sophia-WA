// export function showMenu (rootEl) {
//     const toggle = rootEl.querySelector('.toggle');
//     const menuItems = rootEl.querySelector('.burger-menu');
//
//     function show() {
//         toggle.addEventListener('click', ()=>{
//             menuItems.classList.toggle('active')
//         })
//     }
//     show()
// }


export class BurgerMenu{
    constructor(rootEl){
        this.rootEl=rootEl;
        this.toggle = rootEl.querySelector('.toggle');
        this.menuItems = rootEl.querySelector('.burger-menu');
        this.show();
    }

     show() {
        this.toggle.addEventListener('click', ()=>{
            this.menuItems.classList.toggle('active')
        })
    }

}

