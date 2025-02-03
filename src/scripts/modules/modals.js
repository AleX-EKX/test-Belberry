export function modals () {
    const allModals = document.querySelectorAll(".modal");

    $('.open-modal').click((e)=> {
        const modalValue = e.target.attributes['data-type-modal'].value;
        const modalElement = document.querySelector(`[data-type="${modalValue}"]`);
        modalElement.attributes['data-modal-state'].value = "open";
        document.documentElement.style.overflow = "hidden";
    });

    $('.btn-modal-close').click(closeModal);
    $('.modal-inset').click(closeModal);

    function closeModal() {
        allModals.forEach((el)=>{
            el.attributes['data-modal-state'].value = "close";
        });
        document.documentElement.style.overflow = null;
    }
}