
export class ScrollToTop {
    constructor(el){
        this.el=el;
        this.coordinate=window.pageYOffset;
        // this.attachEvent();
        // debugger;

    }

    attachEvent(){
        this.el.addEventListener('click',()=>{
            this.coordinate = window.pageYOffset;
            console.log('a');
            // debugger;
            this.scrollToTop();
        });
    }
    scrollToTop() {
        if(this.coordinate > 0){
            window.scrollTo(0,this.coordinate);
            this.coordinate = this.coordinate - 200;
            console.log('ad');
            this.timer = setTimeout(()=>{
                this.scrollToTop();
            },100)
        }
        else {
            clearTimeout(this.timer);
            window.scrollTo(0,0);
        }
    }
}

