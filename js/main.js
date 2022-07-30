'use strict';
{
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');
    
    const open2 = document.getElementById('open2');
    const close2 = document.getElementById('close2');
    const modal2 = document.getElementById('modal2');
    const mask2 = document.getElementById('mask2');

    open.addEventListener('click', () => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
      });
    
      close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
      });
    
      mask.addEventListener('click', () => {
        close.click();
      });
    
      open2.addEventListener('click', () => {
        modal2.classList.remove('hidden2');
        mask2.classList.remove('hidden2');
      });
    
      close2.addEventListener('click', () => {
        modal2.classList.add('hidden2');
        mask2.classList.add('hidden2');
      });
    
      mask2.addEventListener('click', () => {
        close2.click();
      });

}