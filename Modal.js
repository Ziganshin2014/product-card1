export class Modal {   
    constructor(id) {
        this.modal = document.querySelector(id);
        this.regest = document.querySelector('.reges');
        this.tim = document.querySelector('.tim');
        this.overlay = document.querySelector('.overlay');
        this.Listentim ();

    } 
    open() {
        this.regest.classList.add("active");
        this.modal.classList.add("modal-showed");
        this.overlay.classList.add("showed");
    }

    close() {
        this.regest.classList.remove("active");
        this.modal.classList.remove("modal-showed");
        this.overlay.classList.remove("showed");
    }

    isOpen() {
        return this.modal.classList.contains("modal-showed");
    }

    Listentim () {
        This.tim.addEventListener('click', () => this.close());
        }  



}