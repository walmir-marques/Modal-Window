'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnOpenModal.length; i++) {
  let withModal = '.modal' + i;

  const closeModal = function closeModal() {
    document.querySelector(withModal).classList.add('hidden');
    overlay.classList.add('hidden');
  };

  btnOpenModal[i].addEventListener('click', function () {
    document.querySelector(withModal).classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  btnCloseModal[i].addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !document.querySelector(withModal).classList.contains('hidden')){
      closeModal();
    }
  });
  
}

