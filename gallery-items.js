const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const refs = {
  gallery: document.querySelector(".js-gallery"),
  image: document.createElement("img"),
  lightbox: document.querySelector(".lightbox"),
  lightbox__image: document.querySelector(".lightbox__image"),
  btn: document.querySelector('[data-action="close-lightbox"]'),
  modal: document.querySelector(".lightbox__content"),
  
};

const createGalleryItem = ({ preview, original, description }) =>
  `<li class="gallery__item">
   <a class="gallery__link" href=${original}>
  <img class="gallery__image" src=${preview} data-source=${original} alt=${description}/>
</a>
</li>`;

const galleryContainer = images.reduce(
  (i, item) => i + createGalleryItem(item),
  ''
);
 
refs.gallery.insertAdjacentHTML("afterbegin", galleryContainer);
refs.image.classList.add("gallery__image");


  function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  else {
    refs.lightbox.classList.add('is-open');
    refs.lightbox.querySelector('.lightbox__image').src = e.target.getAttribute('data-source');
    refs.lightbox.querySelector('.lightbox__image').alt = e.target.alt;
    }
}

function openModal(e) {
  window.addEventListener('keydown', onPressEsc);
  if (e.target != refs.gallery) {
    refs.lightbox.classList.add('is-open');
  }
}


function onClickClose(e) {
 e.preventDefault(); 
  refs.lightbox.classList.remove("is-open");
  refs.lightbox__image.src = '';
  refs.lightbox__image.alt = '';

}

function closeModal(e) {
  if (e.target === refs.lightbox__image) {
  refs.lightbox.classList.remove("is-open");
  refs.lightbox__image.src = '';
  refs.lightbox__image.alt = '';
  }
}

function closeModalByEsc() {
  window.removeEventListener('keydown', onPressEsc);
  refs.lightbox.classList.remove("is-open");
  refs.lightbox__image.src = '';
  refs.lightbox__image.alt = '';
}

function onPressEsc(e) {
  if(e.code === 'Escape'){
    closeModalByEsc();
  }
}


refs.gallery.addEventListener('click', e => {e.preventDefault();openModal(e);onGalleryClick(e);
});

refs.btn.addEventListener("click", onClickClose);

refs.lightbox.addEventListener("click", closeModal);
