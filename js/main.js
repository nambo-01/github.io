'use strict';
{
    // ポートフォリオ
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');
    
    // ビンゴ
    const open2 = document.getElementById('open2');
    const close2 = document.getElementById('close2');
    const modal2 = document.getElementById('modal2');
    const mask2 = document.getElementById('mask2');
    
    // お問合せページ
    const open3 = document.getElementById('open3');
    const close3 = document.getElementById('close3');
    const modal3 = document.getElementById('modal3');
    const mask3 = document.getElementById('mask3');
    
    // ポートフォリオ 
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
    
    // ビンゴ
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
    
    // お問合せページ
    open3.addEventListener('click', () => {
      modal3.classList.remove('hidden3');
      mask3.classList.remove('hidden3');
      });
    
      close3.addEventListener('click', () => {
        modal3.classList.add('hidden3');
        mask3.classList.add('hidden3');
      });
    
      mask3.addEventListener('click', () => {
        close3.click();
      });
}