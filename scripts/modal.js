// modal
document.querySelectorAll('#feed-back, #modal-close, #modal-send').forEach(element => {
    element.addEventListener("click", closeModal); 
 });
 
 function closeModal() {
     document.querySelector('body').classList.toggle('overflow-hidden');
     document.getElementById("modal").classList.toggle('d-none');
 }
 