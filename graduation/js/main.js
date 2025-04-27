(function () {   
    document.addEventListener('DOMContentLoaded', function() {
        const mobileTel = document.querySelector('.header__top-tel--mobile');
        const openTelIcon = document.querySelector('.icon__open-tel');
        const closeIcon = document.querySelector('.close__icon');
        
        // Изначально скрываем мобильный телефон
        mobileTel.style.display = 'none';
        
        // При клике на иконку телефона показываем его
        openTelIcon.addEventListener('click', function() {
        mobileTel.style.display = 'flex';
        setTimeout(() => {
            mobileTel.style.transform = 'translateX(-200px)';
        }, 10);
        });
        
        // При клике на иконку закрытия скрываем телефон
        closeIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileTel.style.transform = 'translateX(0)';
            setTimeout(() => {
                mobileTel.style.display = 'none';
            }, 300);
        });
    });
        //модалка 
    
        const modal = document.querySelector('.modal')
        const modalButtons = document.querySelectorAll('.button')
    
        modalButtons.forEach(button => {
            button.addEventListener('click', openModal)
        })
        modal.addEventListener('click', closeModal)
    
        function openModal(e) {
            e.preventDefault()
            document.body.classList.toggle('body--opened-modal')
        }
    
        function closeModal(e) {
            e.preventDefault()
    
            const target = e.target
    
            if (target.closest('.modal__cancel') || target.classList.contains('modal')){
                document.body.classList.remove('body--opened-modal')
            }
        }

        //Аккордион

        const accordionlists = document.querySelectorAll('.accordion-list')

    accordionlists.forEach(el => {


        el.addEventListener('click', (e) => {
            e.preventDefault();

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });

    // Обработчики для кнопок "Все объявления" и "Все вакансии"
    const infoOtherButton = document.querySelector('.info__other');
    const vacanciesOtherButton = document.querySelector('.vacancies__other');
    const vacanciesOtherMobileButton = document.querySelector('.vacancies__other--mobile');
    const infoOtherMobileButton = document.querySelector('.info__other--mobile');
    
    // Обработчик для кнопки "Все объявления"
    if (infoOtherButton) {
        infoOtherButton.addEventListener('click', function(e) {
            e.preventDefault();
            const infoSwiper = document.querySelector('.info__swiper');
            const infoWrapper = infoSwiper.querySelector('.info__wrapper');
            
            if (!infoSwiper.classList.contains('grid-view')) {
                // Переход в режим сетки
                // Сначала добавляем класс, но делаем невидимым для плавного перехода
                infoSwiper.classList.add('grid-view');
                infoWrapper.style.opacity = '0';
                
                // Применяем изменения позиционирования и затем показываем с задержкой
                setTimeout(() => {
                    infoWrapper.style.opacity = '1';
                    infoWrapper.style.transition = 'opacity 0.3s ease';
                }, 10);
                
                this.textContent = 'Вернуться к слайдеру';
            } else {
                // Переход обратно в режим слайдера
                infoWrapper.style.opacity = '0';
                
                setTimeout(() => {
                    infoSwiper.classList.remove('grid-view');
                    infoWrapper.style.opacity = '1';
                    
                    // Обновляем Swiper при возврате к слайдеру
                    if (swiper) {
                        swiper.update();
                        updateInfoSlideOpacity(swiper);
                    }
                }, 300);
                
                this.textContent = 'Все объявления';
            }
        });
    }
    
    // Обработчик для кнопки "Все вакансии"
    if (vacanciesOtherButton) {
        vacanciesOtherButton.addEventListener('click', function(e) {
            e.preventDefault();
            const vacanciesSwiper = document.querySelector('.vacancies__swiper');
            const vacanciesWrapper = vacanciesSwiper.querySelector('.vacancies__wrapper');
            
            if (!vacanciesSwiper.classList.contains('grid-view')) {
                // Переход в режим сетки
                vacanciesSwiper.classList.add('grid-view');
                vacanciesWrapper.style.opacity = '0';
                
                setTimeout(() => {
                    vacanciesWrapper.style.opacity = '1';
                    vacanciesWrapper.style.transition = 'opacity 0.3s ease';
                }, 10);
                
                this.textContent = 'Вернуться к слайдеру';
            } else {
                // Переход обратно в режим слайдера
                vacanciesWrapper.style.opacity = '0';
                
                setTimeout(() => {
                    vacanciesSwiper.classList.remove('grid-view');
                    vacanciesWrapper.style.opacity = '1';
                    
                    // Обновляем Swiper при возврате к слайдеру
                    if (vacanciesSwiperInstance) {
                        vacanciesSwiperInstance.update();
                        updateVacanciesSlideOpacity(vacanciesSwiperInstance);
                    }
                }, 300);
                
                this.textContent = 'Все вакансии';
            }
        });
    }

    // Обработчик для кнопки "Все вакансии" (мобильная версия)
    if (vacanciesOtherMobileButton) {
        vacanciesOtherMobileButton.addEventListener('click', function(e) {
            e.preventDefault();
            const vacanciesSwiper = document.querySelector('.vacancies__swiper');
            const vacanciesWrapper = vacanciesSwiper.querySelector('.vacancies__wrapper');
            
            if (!vacanciesSwiper.classList.contains('grid-view')) {
                // Переход в режим сетки
                vacanciesSwiper.classList.add('grid-view');
                vacanciesWrapper.style.opacity = '0';
                
                setTimeout(() => {
                    vacanciesWrapper.style.opacity = '1';
                    vacanciesWrapper.style.transition = 'opacity 0.3s ease';
                }, 10);
                
                this.textContent = 'Вернуться к слайдеру';
            } else {
                // Переход обратно в режим слайдера
                vacanciesWrapper.style.opacity = '0';
                
                setTimeout(() => {
                    vacanciesSwiper.classList.remove('grid-view');
                    vacanciesWrapper.style.opacity = '1';
                    
                    // Обновляем Swiper при возврате к слайдеру
                    if (vacanciesSwiperInstance) {
                        vacanciesSwiperInstance.update();
                        updateVacanciesSlideOpacity(vacanciesSwiperInstance);
                    }
                }, 300);
                
                this.textContent = 'Все вакансии';
            }
        });
    }

    // Обработчик для кнопки "Все объявления" (мобильная версия)
    if (infoOtherMobileButton) {
        infoOtherMobileButton.addEventListener('click', function(e) {
            e.preventDefault();
            const infoSwiper = document.querySelector('.info__swiper');
            const infoWrapper = infoSwiper.querySelector('.info__wrapper');
            
            if (!infoSwiper.classList.contains('grid-view')) {
                // Переход в режим сетки
                infoSwiper.classList.add('grid-view');
                infoWrapper.style.opacity = '0';
                
                setTimeout(() => {
                    infoWrapper.style.opacity = '1';
                    infoWrapper.style.transition = 'opacity 0.3s ease';
                }, 10);
                
                this.textContent = 'Вернуться к слайдеру';
            } else {
                // Переход обратно в режим слайдера
                infoWrapper.style.opacity = '0';
                
                setTimeout(() => {
                    infoSwiper.classList.remove('grid-view');
                    infoWrapper.style.opacity = '1';
                    
                    // Обновляем Swiper при возврате к слайдеру
                    if (swiper) {
                        swiper.update();
                        updateInfoSlideOpacity(swiper);
                    }
                }, 300);
                
                this.textContent = 'Все объявления';
            }
        });
    }

    //Слайдер объявлений

    swiper = new Swiper('.info__swiper', {

        spaceBetween: 15,
        slidesPerView: 1,


        navigation: {
            nextEl: '.info__next',
            prevEl: '.info__prev',
        },


        breakpoints: {
            360: {
                spaceBetween: 25,
                slidesPerView: 1,
            },

            710: {
                slidesPerView: 2,
            },

            1200: {
                slidesPerView: 3,
            }
        },
        
        // Добавляем обработчики событий для управления прозрачностью слайдов
        on: {
            init: function() {
                // Инициализация - установка начальных классов
                updateInfoSlideOpacity(this);
            },
            slideChange: function() {
                // При смене слайдов обновляем классы
                updateInfoSlideOpacity(this);
            }
        }
    });
    
    // Функция для обновления прозрачности слайдов в info
    function updateInfoSlideOpacity(swiper) {
        // Получаем все слайды
        const slides = swiper.slides;
        
        // Сначала сбрасываем классы у всех слайдов
        slides.forEach(slide => {
            slide.classList.remove('info__slide-opacity-left', 'info__slide-opacity-right', 'info__slide-active');
        });
        
        // Получаем текущий активный индекс и общее количество слайдов
        const activeIndex = swiper.activeIndex;
        const lastIndex = slides.length - 1;
        
        // Добавляем классы в зависимости от положения слайда
        slides.forEach((slide, index) => {
            if (index < activeIndex) {
                // Слайды слева от активного
                slide.classList.add('info__slide-opacity-left');
            } else if (index > activeIndex && index <= activeIndex + swiper.params.slidesPerView - 1) {
                // Слайды справа от активного, но видимые
                slide.classList.add('info__slide-active');
            } else if (index > activeIndex + swiper.params.slidesPerView - 1) {
                // Слайды справа за пределами видимой области
                slide.classList.add('info__slide-opacity-right');
            } else {
                // Активный слайд
                slide.classList.add('info__slide-active');
            }
            
            // Добавляем особую обработку для краевых слайдов
            if (activeIndex === 0 && index === 0) {
                // Если мы на первом слайде
                slide.classList.add('info__slide-active');
                slide.classList.remove('info__slide-opacity-left');
            }
            if (activeIndex === lastIndex - swiper.params.slidesPerView + 1 && index === lastIndex) {
                // Если мы на последнем видимом слайде
                slide.classList.add('info__slide-active');
                slide.classList.remove('info__slide-opacity-right');
            }
        });
    }

    // аккардион в слайдере info
    
    // Находим все кнопки "Подробнее"
    const infoButtons = document.querySelectorAll('.info__slide-button');
    
    // Добавляем обработчик событий для каждой кнопки
    infoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Находим родительский элемент .info__slide-accardion
            const accordion = this.closest('.info__slide-accardion');
            
            // Находим текстовый элемент и градиент
            const textElement = accordion.querySelector('.info__slide-text');
            const fadeOut = textElement.querySelector('.fade-out');
            
            // Переключаем классы для разворачивания/сворачивания текста
            textElement.classList.toggle('expanded');
            
            if (fadeOut) {
                fadeOut.classList.toggle('hidden');
            }
            
            // Меняем текст кнопки
            if (this.textContent.trim() === 'Подробнее') {
                this.textContent = 'Свернуть';
            } else {
                this.textContent = 'Подробнее';
            }
        });
    });
    
    // Инициализация слайдера вакансий
    const vacanciesSwiperInstance = new Swiper('.vacancies__swiper', {
        spaceBetween: 15,
        slidesPerView: 1,

        navigation: {
            nextEl: '.vacancies__next',
            prevEl: '.vacancies__prev',
        },

        breakpoints: {
            360: {
                slidesPerView: 1,
            },

            710: {
                slidesPerView: 2,
            },

            1200: {
                slidesPerView: 3,
            }
        },
        
        // Добавляем обработчики событий для управления прозрачностью слайдов
        on: {
            init: function() {
                // Инициализация - установка начальных классов
                updateVacanciesSlideOpacity(this);
            },
            slideChange: function() {
                // При смене слайдов обновляем классы
                updateVacanciesSlideOpacity(this);
            }
        }
    });
    
    // Функция для обновления прозрачности слайдов в vacancies
    function updateVacanciesSlideOpacity(swiper) {
        // Получаем все слайды
        const slides = swiper.slides;
        
        // Сначала сбрасываем классы у всех слайдов
        slides.forEach(slide => {
            slide.classList.remove('vacancies__slide-opacity-left', 'vacancies__slide-opacity-right', 'vacancies__slide-active');
        });
        
        // Получаем текущий активный индекс и общее количество слайдов
        const activeIndex = swiper.activeIndex;
        const lastIndex = slides.length - 1;
        
        // Добавляем классы в зависимости от положения слайда
        slides.forEach((slide, index) => {
            if (index < activeIndex) {
                // Слайды слева от активного
                slide.classList.add('vacancies__slide-opacity-left');
            } else if (index > activeIndex && index <= activeIndex + swiper.params.slidesPerView - 1) {
                // Слайды справа от активного, но видимые
                slide.classList.add('vacancies__slide-active');
            } else if (index > activeIndex + swiper.params.slidesPerView - 1) {
                // Слайды справа за пределами видимой области
                slide.classList.add('vacancies__slide-opacity-right');
            } else {
                // Активный слайд
                slide.classList.add('vacancies__slide-active');
            }
            
            // Добавляем особую обработку для краевых слайдов
            if (activeIndex === 0 && index === 0) {
                // Если мы на первом слайде
                slide.classList.add('vacancies__slide-active');
                slide.classList.remove('vacancies__slide-opacity-left');
            }
            if (activeIndex === lastIndex - swiper.params.slidesPerView + 1 && index === lastIndex) {
                // Если мы на последнем видимом слайде
                slide.classList.add('vacancies__slide-active');
                slide.classList.remove('vacancies__slide-opacity-right');
            }
        });
    }

    // аккардион в слайдере vacancies
    
    // Находим все кнопки "Подробнее"
    const vacanciesButtons = document.querySelectorAll('.vacancies__slide-button');
    
    // Добавляем обработчик событий для каждой кнопки
    vacanciesButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Находим родительский элемент .vacancies__slide-accardion
            const accordion = this.closest('.vacancies__slide-accardion');
            
            // Находим текстовый элемент и градиент
            const textElement = accordion.querySelector('.vacancies__slide-text');
            const fadeOut = textElement.querySelector('.fade-out');
            
            // Переключаем классы для разворачивания/сворачивания текста
            textElement.classList.toggle('expanded');
            
            if (fadeOut) {
                fadeOut.classList.toggle('hidden');
            }
            
            // Меняем текст кнопки
            if (this.textContent.trim() === 'Подробнее') {
                this.textContent = 'Свернуть';
            } else {
                this.textContent = 'Подробнее';
            }
        });
    });
    
}) ()