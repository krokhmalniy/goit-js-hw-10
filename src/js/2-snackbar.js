import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formSnackbar = document.querySelector('.form');

formSnackbar.addEventListener('submit', event => {
  event.preventDefault();

  const delay = formSnackbar.elements.delay.value;
  const state = formSnackbar.elements.state.value.toLowerCase();

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(event =>
      iziToast.show({
        title: 'OK',
        message: `✅ Fulfilled promise in ${event}ms`,
        backgroundColor: '#59A10D',
        iconUrl: '../img/bi_check2-circle.svg',
      })
    )
      .catch(event =>iziToast.show({
        title: 'EROR',
        message: `❌ Rejected promise in ${event}ms`,
        backgroundColor: '#EF4040',
        iconUrl: '../img/bi_x-octagon.svg',
      }));
});
