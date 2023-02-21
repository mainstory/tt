// // // ================================== // Основной JS // ================================== //


if (document.querySelector('[data-section-shop]') || document.querySelector('[data-section-inventory]')) {

   var mySwiper = new Swiper('.swiper', {
      spaceBetween: 15,
      freeMode: true,
      slidesPerView: "auto",
   });


}





//# Случайная карточка
function randomCard(items, zone) {

   let itemsAmount = items.length - 1

   const actualIndex = getRandomIntInclusive(0, itemsAmount)

   // let active = ''
   // if (items[actualIndex].rarity === 'Обычная') {
   //    active = '_default'
   // }
   // if (items[actualIndex].rarity === 'Редкая') {
   //    active = '_rare'
   // }
   // if (items[actualIndex].rarity === 'Легендарная') {
   //    active = '_legendary'
   // }
   let price

   if (items[actualIndex].color === 'yellow') {
      price = 3200
   }
   if (items[actualIndex].color === 'red') {
      price = 1600
   }
   if (items[actualIndex].color === 'pink') {
      price = 800
   }
   if (items[actualIndex].color === 'fiolet') {
      price = 400
   }
   if (items[actualIndex].color === 'blue') {
      price = 100
   }
   if (items[actualIndex].color === 'light-blue') {
      price = 50
   }


   let template
   if (items[actualIndex].color === 'yellow') {
      template = `
      <div class="big-card swiper-slide" data-big-card data-card data-card-color="${items[actualIndex].color}">
      <div class="big-card__top" data-card-category>
      ${items[actualIndex].category}
      </div>
      <div class="big-card__bottom">
         <div class="big-card__title" data-card-title>${items[actualIndex].title}</div>


         <div class="big-card__img" data-card-img>${items[actualIndex].img}</div>
         <div class="big-card__btn" data-card-btn data-card-price="${price}">${price}</div>

      </div>

   </div>
      `
   } else {
      template = `
   <div class="card card--red swiper-slide" data-card data-card-color="${items[actualIndex].color}">
   <div class="card__top" data-card-category>
      ${items[actualIndex].category}
   </div>
   <div class="card__bottom">
      <div class="card__title" data-card-title>${items[actualIndex].title}</div>
      <div class="card__img" data-card-img>${items[actualIndex].img}</div>
      <div class="card__btn" data-card-btn data-card-price="${price}">${price}</div>
   </div>

</div>

   `
   }






   document.querySelector(`[${zone}]`).insertAdjacentHTML('beforeend', template)

   mySwiper.update()


}

function setBox(zone) {



   let template = `
   
   <div class="box swiper-slide" data-box>
   <div class="box__top">
      КЕЙС
   </div>
   <div class="box__bottom">


      <div class="box__img">
         <img src="img/question.svg" alt="">
      </div>


   </div>

   <div class="box__btn" data-box-btn data-card-price="500">500</div>


</div>

   `

   mySwiper.update()




   document.querySelector(`[${zone}]`).insertAdjacentHTML('beforeend', template)



}


if (document.querySelector('[data-section-shop]')) {

   randomCard(colorYellowItems, 'data-shop-zone')
   setBox('data-shop-zone')
   randomCard(colorRedItems, 'data-shop-zone')
   randomCard(colorPinkItems, 'data-shop-zone')
   randomCard(colorFioletItems, 'data-shop-zone')
   randomCard(colorBlueItems, 'data-shop-zone')
   randomCard(colorLightBlueItems, 'data-shop-zone')

}





// cfg

// таймер повставлен в:
const startHour = 0
const startMinute = 0

// сейчас время:
const nowHour = 2
const nowMinute = 0

// сейчас день:
const day = 5


function startAll() {

   function generateData() {

      function strStart() {

         let str_startHour
         let str_startMinute

         if (startHour < 10) {
            str_startHour = `0${startHour}`
         } else {
            str_startHour = startHour
         }

         if (startMinute < 10) {
            str_startMinute = `0${startMinute}`
         } else {
            str_startMinute = startMinute
         }

         console.log(`=== начало: ${str_startHour}:${str_startMinute}`);

      }
      strStart()

      let mtn_nowHour = nowHour

      function mtnNexDay() {


         if (mtn_nowHour === 0 && startHour === 22) {
            mtn_nowHour = 24
         }
         if (mtn_nowHour === 1 && startHour === 22) {
            mtn_nowHour = 25
         }
         if (mtn_nowHour === 2 && startHour === 22) {
            mtn_nowHour = 26
         }

         if (mtn_nowHour === 0 && startHour === 23) {
            mtn_nowHour = 24
         }
         if (mtn_nowHour === 1 && startHour === 23) {
            mtn_nowHour = 25
         }
         if (mtn_nowHour === 2 && startHour === 23) {
            mtn_nowHour = 26
         }

      }
      mtnNexDay()

      function strNow() {

         let str_nowHours = nowHour
         let str_nowMinute = nowMinute

         if (str_nowHours < 10) {
            str_nowHours = `0${str_nowHours}`
         }

         if (str_nowMinute < 10) {
            str_nowMinute = `0${str_nowMinute}`
         }

         console.log(`сейчас: ${str_nowHours}:${str_nowMinute}`);

      }
      strNow()

      let mtn_hourAdd = startHour + 3

      function strLeft() {

         let mtn_nowMinute = nowMinute

         mtn_nowMinute = 60 - mtn_nowMinute
         if (mtn_nowMinute === 60) {
            mtn_nowMinute = 0
         }

         let addNumber = mtn_hourAdd - 24

         // основная формула, вычисляет сколько осталось часов
         let timerHour = mtn_hourAdd - mtn_nowHour

         if (startHour === 22 || startHour === 23) {

            timerHour = (24 - mtn_nowHour) + addNumber

         }

         if (nowMinute !== 0) {
            timerHour = timerHour - 1
         }

         if (timerHour === 0 && nowMinute === 0) {
            console.log('таймер завершен');
            return
         }

         if (timerHour < 0 || timerHour > 3) {

            console.log('таймер завершен');
            return

         } else {

            let str_timerHour
            let mtn_str_nowMinute = mtn_nowMinute

            if (timerHour < 10) {
               str_timerHour = `0${timerHour}`
            }

            if (mtn_str_nowMinute < 10) {
               mtn_str_nowMinute = `0${mtn_str_nowMinute}`
            }

            console.log(`осталось: ${str_timerHour}:${mtn_str_nowMinute}`);

            // вывод
            // console.log(timerHour);
            // console.log(mtn_nowMinute);

            return [timerHour, mtn_nowMinute]

         }

      }
      const [timerHour, mtn_nowMinute] = strLeft()

      let mtn_str_hourAdd = mtn_hourAdd
      let str_startMinute = startMinute

      function strEnd() {

         if (mtn_hourAdd < 10) {
            mtn_str_hourAdd = `0${mtn_hourAdd}`
         }
         if (mtn_hourAdd === 24) {
            mtn_str_hourAdd = '00'
         }
         if (mtn_hourAdd === 25) {
            mtn_str_hourAdd = '01'
         }
         if (mtn_hourAdd === 26) {
            mtn_str_hourAdd = '02'
         }

         if (str_startMinute < 10) {
            str_startMinute = `0${str_startMinute}`
         }

         console.log(`=== конец: ${mtn_str_hourAdd}:${str_startMinute}`);

      }
      strEnd()

      startTimer(timerHour, mtn_nowMinute)


   }
   generateData()

}

function startTimer(hour, minute) {

   if (minute === 0) {
      hour = hour - 1
   }

   if (minute === 0) {
      minute = 60
   }

   if (hour < 0) {
      console.log('END');
      generateBattleData()
   } else {
      timer()
   }

   function timer() {

      function linkTimer() {

         let modernHour = ''
         if (hour < 10) {
            modernHour = `0`
         }

         let modernMinute = ''
         if (minute < 11) {
            modernMinute = `0`
         }

         minute--
         // console.log(`${modernHour}${hour}:${modernMinute}${minute}`);
         const elem = document.querySelector('.main__score-middle')
         elem.innerText = `${modernHour}${hour}:${modernMinute}${minute}`

         if (minute <= 0) {
            hour--
            minute = 60
         }

         if (hour === -1) {
            if (minute === 60) {
               clearInterval(id)
               console.log('END');
               generateBattleData()
            }
         }

      }


      let id = setInterval(linkTimer, 10)

   }


}



// localstorage
function save(name, value) {
   localStorage.setItem(name, value)
}
function get(name) {
   return localStorage.getItem(name)
}
function rem(name) {
   localStorage.removeItem(name)
}
function off() {
   localStorage.clear();
}



// document.querySelector('[data-my-money]')
if (document.querySelector('[data-shop]')) {
   if (get('myMoney') === null) {
      save('myMoney', '5000')
      document.querySelector('[data-my-money]').setAttribute('data-my-money', get('myMoney'))
      document.querySelector('[data-my-money]').innerHTML = get('myMoney')

   } else {
      document.querySelector('[data-my-money]').setAttribute('data-my-money', get('myMoney'))
      document.querySelector('[data-my-money]').innerHTML = get('myMoney')


   }
}







function getRandomIntInclusive(min, max) {
   const randomBuffer = new Uint32Array(1);

   window.crypto.getRandomValues(randomBuffer);

   let randomNumber = randomBuffer[0] / (0xffffffff + 1);

   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(randomNumber * (max - min + 1)) + min;
}



function getRandomInt(min, max) {
   const randomBuffer = new Uint32Array(1);

   window.crypto.getRandomValues(randomBuffer);

   let randomNumber = randomBuffer[0] / (0xffffffff + 1);

   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(randomNumber * (max - min)) + min
}





function mainAll() {





   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('[data-generate]')) {

         if (document.querySelector('[data-cycle="8"]')) {

            const div = document.createElement('div')

            div.innerHTML = `<div class="finish" data-finish>Завершить</div>`
            document.querySelector('[data-generate]').after(div)

         }

      }
   })

   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('[data-finish]')) {

         document.querySelector('[data-zone]').remove()

         const div = document.createElement('div')

         div.innerHTML = `<div data-zone></div>`
         document.querySelector('[data-main]').append(div)


      }
   })
}
mainAll()

//# Цели
function targets() {

   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('[data-set-target]')) {

         new Audio('audio/buttonclickrelease.mp3').play()

         let targetName;
         let targetDifficult;
         // targetName = prompt('Название')
         targetName = 'Цель'


         if (targetName === '' || targetName === null) {
            return
         }

         // targetDifficult = prompt('Сложность (1-3)')
         targetDifficult = '1'

         if ((targetDifficult === '' || targetDifficult === null)) {
            return
         }
         if (targetDifficult !== '1' && targetDifficult !== '2' && targetDifficult !== '3') {
            return
         }

         // console.log('1');


         document.querySelector('[data-zone-target]').insertAdjacentHTML('afterbegin', `
      <div class="main__targets-target" data-target>
      <div class="main__targets-target-left">
         <div class="main__targets-target-icon" data-icon data-finished="no"></div>
         <div class="main__targets-target-title" data-target-title>${targetName}</div>

      </div>
      <div class="main__targets-target-right">
         <div class="main__targets-target-succes" data-target-succes>+${targetDifficult}</div>
         <div class="main__targets-target-succes-icon"><img src="img/icon.svg" alt=""></div>

      </div>

   </div>
      `)

         document.querySelector('[data-zone-achievement]').insertAdjacentHTML('afterbegin', `
      <div class="main__achievement" data-achievement>
      <div class="main__achievement-name">ПОСТАВЛЕНО! </div>
      <div class="main__achievement-reward">+1</div>
      <div class="main__achievement-reward-icon"><img src="img/icon.svg" alt=""></div>
      </div>
      `)

         const elem = document.querySelector('[data-achievement]')
         function removeActual() {

            elem.remove()

         }
         setTimeout(removeActual, 1000)

      }

   })

   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('[data-target-title]')) {
         const rename = prompt('Переименовать на:')
         if (rename === '' || rename === null) {
            return
         }
         eventTarget.innerHTML = rename
         new Audio('audio/buttonclickrelease.mp3').play()

      }

   })
   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('[data-target-succes]')) {
         const rename = prompt('Изменить сложность на: (1-3)')
         if (rename === '' || rename === null) {
            return
         }
         if (rename !== '1' && rename !== '2' && rename !== '3') {
            return
         }
         eventTarget.innerHTML = `+${rename}`
         new Audio('audio/buttonclickrelease.mp3').play()

      }

   })

   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.hasAttribute('data-target')) {
         const question = confirm('Удалить?')
         if (question === true) {
            eventTarget.remove()
            new Audio('audio/buttonclickrelease.mp3').play()

         }
      }

   })

}
targets()


//# Ачивки при выполнении целей
document.addEventListener('click', (event) => {
   const eventTarget = event.target



   if (eventTarget.closest('[data-icon]')) {

      if (eventTarget.getAttribute('data-finished') === 'no') {

         new Audio('audio/buttonclickrelease.mp3').play()

         const newSucces = Number(document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max')) + 1
         document.querySelector('[data-zone-target]').setAttribute('data-actual-point-max', newSucces)


         eventTarget.classList.add('_active')
         eventTarget.setAttribute('data-finished', 'yes')
         eventTarget.closest('[data-target]').classList.add('_active')


         document.querySelector('[data-zone-achievement]').insertAdjacentHTML('afterbegin', `
      <div class="main__achievement" data-achievement>
      <div class="main__achievement-name">ДОСТИГНУТО!</div>
      <div class="main__achievement-reward">+1</div>
      <div class="main__achievement-reward-icon"><img src="img/icon.svg" alt=""></div>
      </div>
      `)
         const achievement = document.querySelector('[data-achievement]')
         function removeActual() {

            achievement.remove()

         }
         setTimeout(removeActual, 1000)

         document.querySelector('[data-zone-inscription]').insertAdjacentHTML('afterbegin', `<div class="inscription" data-inscription>Mainstory достигает цель!</div>`)
         const inscription = document.querySelector('[data-inscription]')
         function removeActual2() {

            inscription.remove()

         }
         setTimeout(removeActual2, 1000)

      }
   }

})


// document.addEventListener('click', (event) => {
//    const eventTarget = event.target

//    if (eventTarget.closest('[data-burger]')) {
//       document.querySelector('[data-burger-menu]').classList.add('_active')
//       new Audio('audio/buttonclickrelease.mp3').play()

//    }

// })
// document.addEventListener('click', (event) => {
//    const eventTarget = event.target

//    if (eventTarget.closest('[data-burger-shadow]')) {
//       document.querySelector('[data-burger-menu]').classList.remove('_active')
//       new Audio('audio/buttonclickrelease.mp3').play()


//    }

// })

// document.addEventListener('click', (event) => {
//    const eventTarget = event.target

//    if (eventTarget.closest('.burger-menu__link')) {

//       new Audio('audio/buttonclickrelease.mp3').play()


//    }

// })

// off()


if (document.querySelector('[data-section-shop]')) {

   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('[data-card-btn]')) {

         if (!eventTarget.hasAttribute('data-card-buyed')) {

            // new Audio('audio/18-zvukov-najatiya-dlya-montaja-j (mp3cut.net).mp3').play()
            new Audio('audio/buttonclickrelease.mp3').play()
            new Audio('audio/gambling.mp3').play()


            const card = eventTarget.closest('[data-card]')
            const color = card.getAttribute('data-card-color')

            if (color === 'yellow') {
               save('buyedYellow', '')

            }

            if (color === 'red') {
               save('buyedRed', '')

            }

            if (color === 'pink') {
               save('buyedPink', '')

            }

            if (color === 'fiolet') {
               save('buyedFiolet', '')

            }

            if (color === 'blue') {
               save('buyedBlue', '')

            }

            if (color === 'light-blue') {
               save('buyedLightBlue', '')

            }


            const myMoney = get('myMoney')
            const price = Number(card.querySelector('[data-card-price]').getAttribute('data-card-price'))

            if (myMoney >= price) {

               const newMyMoney = myMoney - price

               document.querySelector('[data-my-money]').setAttribute('data-my-money', newMyMoney)
               document.querySelector('[data-my-money]').innerText = newMyMoney

            }

            const myPrice = Number(document.querySelector('[data-my-money]').getAttribute('data-my-money'))

            const category = card.querySelector('[data-card-category]').innerText
            const title = card.querySelector('[data-card-title]').innerText
            const img = card.querySelector('[data-card-img]').innerHTML
            console.log(img);



            console.log(
               category,
               title,
               price,
               img,
               myPrice,
               color,
            );



            if (get('array') === null) {

               const array = [
                  {
                     category,
                     title,
                     img,
                     color,
                  },
               ]

               save('array', JSON.stringify(array))

            } else {
               const array = JSON.parse(get('array'))

               console.log(array);

               const obj = {
                  category,
                  title,
                  img,
                  color,
               }
               console.log(obj);


               array.push(obj)


               save('array', JSON.stringify(array))

            }




            eventTarget.setAttribute('data-card-buyed', '')
            eventTarget.innerText = 'Приобретено'


            const receiving = document.querySelector('[data-receiving]')

            console.log(receiving);

            receiving.setAttribute('data-receiving-color', color)

            receiving.querySelector('[data-receiving-box]').setAttribute('data-card-color', color)

            receiving.querySelector('[data-receiving-category]').innerText = category
            receiving.querySelector('[data-receiving-title]').innerText = title



            receiving.querySelector('[data-receiving-img]').innerHTML = img


            function a() {

               receiving.classList.add('_active')

            }

            setTimeout(a, 1000)





            save('myMoney', Number(document.querySelector('[data-my-money]').getAttribute('data-my-money')))


         }
      }

   })

}

// off()

if (document.querySelector('[data-shop]')) {

   if (get('buyedYellow') !== null) {
      const btn = document.querySelector('[data-card-color="yellow"]').querySelector('[data-card-btn]')
      btn.innerText = 'Приобретено'
      btn.setAttribute('data-card-buyed', '')
   }
   if (get('buyedRed') !== null) {
      const btn = document.querySelector('[data-card-color="red"]').querySelector('[data-card-btn]')
      btn.innerText = 'Приобретено'
      btn.setAttribute('data-card-buyed', '')
   }
   if (get('buyedPink') !== null) {
      const btn = document.querySelector('[data-card-color="pink"]').querySelector('[data-card-btn]')
      btn.innerText = 'Приобретено'
      btn.setAttribute('data-card-buyed', '')
   }
   if (get('buyedFiolet') !== null) {
      const btn = document.querySelector('[data-card-color="fiolet"]').querySelector('[data-card-btn]')
      btn.innerText = 'Приобретено'
      btn.setAttribute('data-card-buyed', '')
   }
   if (get('buyedBlue') !== null) {
      const btn = document.querySelector('[data-card-color="blue"]').querySelector('[data-card-btn]')
      btn.innerText = 'Приобретено'
      btn.setAttribute('data-card-buyed', '')
   }
   if (get('buyedLightBlue') !== null) {
      const btn = document.querySelector('[data-card-color="light-blue"]').querySelector('[data-card-btn]')
      btn.innerText = 'Приобретено'
      btn.setAttribute('data-card-buyed', '')
   }

}



const inventory = document.querySelector('[data-inventory]')

if (inventory) {

   if (get('array') !== null) {

      const array = JSON.parse(get('array'))

      array.forEach((e, index) => {

         if (e !== null) {


            console.log(e);


            if (e.color === 'yellow') {
               const template = `

            <div class="big-card swiper-slide" data-big-card data-card data-card-color="${e.color}" data-card-index="${index}">
            <div class="big-card__top" data-card-category>
            ${e.category}
            </div>
            <div class="big-card__bottom">
               <div class="big-card__title" data-card-title>${e.title}</div>


               <div class="big-card__img" data-card-img>${e.img}</div>
               <div class="big-card__btn">ПРИМЕНИТЬ</div>

            </div>

         </div>

            `
               document.querySelector('[data-inventory]').insertAdjacentHTML("afterbegin", template)


            } else {
               const template = `

            <div class="card card--red swiper-slide" data-card data-card-color="${e.color}" data-card-index="${index}">
            <div class="card__top" data-card-category>
               ${e.category}
            </div>
            <div class="card__bottom">
               <div class="card__title" data-card-title>${e.title}</div>
               <div class="card__img" data-card-img>${e.img}</div>
               <div class="card__btn">ПРИМЕНИТЬ</div>
            </div>

         </div>

            `
               document.querySelector('[data-inventory]').insertAdjacentHTML("afterbegin", template)

            }
         }

         mySwiper.update()



      })





   }

}




import {
   colorYellowItems,
   colorRedItems,
   colorPinkItems,
   colorFioletItems,
   colorBlueItems,
   colorLightBlueItems
} from './storage.js';

// off()
document.addEventListener('click', (event) => {
   const eventTarget = event.target

   if (eventTarget.closest('[data-box-btn]')) {


      const price = Number(eventTarget.getAttribute('data-card-price'))
      const myMoney = Number(document.querySelector('[data-my-money]').getAttribute('data-my-money'))

      if (myMoney >= price) {



         const result = myMoney - price

         save('myMoney', result)
         document.querySelector('[data-my-money]').setAttribute('data-my-money', result)
         document.querySelector('[data-my-money]').innerHTML = result




         new Audio('audio/buttonclickrelease.mp3').play()
         new Audio('audio/gambling.mp3').play()


         let items;
         const rulete = getRandomIntInclusive(1, 100)

         // вероятности:
         // обычная 50%
         // редкая 30%
         // легендарная 10%
         // проигрыш 50%
         console.log(rulete);
         // if (rulete <= 100) {
         //    //редкость 
         //    items = colorLightBlueItems


         // }

         console.log(rulete);

         if (rulete === 1) {
            //редкость 1%
            items = colorYellowItems
         }
         if (rulete > 1 && rulete <= 6) {
            //редкость 5%
            items = colorRedItems
         }
         if (rulete > 6 && rulete <= 16) {
            //редкость 10%
            items = colorPinkItems
         }
         if (rulete > 16 && rulete <= 36) {
            //редкость 20%
            items = colorFioletItems
         }
         if (rulete > 36 && rulete <= 46) {
            //редкость 30%
            items = colorBlueItems
         }
         if (rulete > 46) {
            //редкость 54%

            items = colorLightBlueItems
         }




         //  else {
         //ничего не выпало



         //    return
         // }
         // console.log(items);


         let itemsAmount = items.length - 1
         console.log(`количество ${itemsAmount}`);

         const actualIndex = getRandomIntInclusive(0, itemsAmount)

         let active = ''
         if (items[actualIndex].color === 'yellow') {
            active = 'yellow'
         }
         if (items[actualIndex].color === 'red') {
            active = 'red'
         }
         if (items[actualIndex].color === 'pink') {
            active = 'pink'
         }
         if (items[actualIndex].color === 'fiolet') {
            active = 'fiolet'
         }
         if (items[actualIndex].color === 'blue') {
            active = 'blue'
         }
         if (items[actualIndex].color === 'light-blue') {
            active = 'light-blue'
         }


         const elem = document.querySelector('[data-receiving]')
         // elem.setAttribute('data-card-color', active)
         document.querySelector('[data-receiving-box]').setAttribute('data-card-color', active)
         elem.setAttribute('data-receiving-color', active)
         elem.querySelector('[data-receiving-category]').innerText = items[actualIndex].category
         elem.querySelector('[data-receiving-title]').innerText = items[actualIndex].title
         console.log(items[actualIndex].title);
         elem.querySelector('[data-receiving-img]').innerHTML = items[actualIndex].img

         function a() {

            elem.classList.add('_active')

         }

         setTimeout(a, 1000)

         console.log('====================================================');
         console.log(`актуальный индекс: ${actualIndex}`);
         console.log(items[actualIndex].category);
         console.log(items[actualIndex].title);
         console.log(items[actualIndex].img);
         console.log(items[actualIndex].color);
         console.log('====================================================');



         const category = items[actualIndex].category
         const title = items[actualIndex].title
         const img = items[actualIndex].img
         const color = items[actualIndex].color



         if (get('array') === null) {

            const array = [
               {
                  category,
                  title,
                  img,
                  color,
               }
            ]

            save('array', JSON.stringify(array))

         } else {

            const array = JSON.parse(get('array'))

            const obj = {
               category,
               title,
               img,
               color,
            }

            console.log(array);


            console.log(obj);


            array.push(obj)


            save('array', JSON.stringify(array))
         }







      } else {

         alert('Не достаточно монет')

      }
   }

})




document.addEventListener('click', (event) => {
   const eventTarget = event.target

   if (eventTarget.closest('[data-receiving-btn]')) {
      document.querySelector('[data-receiving]').classList.remove('_active')
      new Audio('audio/buttonclickrelease.mp3').play()

   }

})






// document.addEventListener('click', (event) => {
//    const eventTarget = event.target

//    if (eventTarget.closest('.lobby__link')) {
//       new Audio('audio/buttonclickrelease.mp3').play()

//    }

// })


function generateBattleData() {



   //# Проверка есть ли таблица
   const table = document.querySelector('[data-table]')
   if (table) {
      //# ================================================================== Таблица есть
      console.log('есть')

      function have() {


         let blueScore = Number(document.querySelector('[data-blue-score]').getAttribute('data-blue-score'))
         let orangeScore = Number(document.querySelector('[data-orange-score]').getAttribute('data-orange-score'))


         //# Вводные данные
         // игроки попадаются до 10 лвла
         /*const lvl = Number(prompt('Подбор игроков под уровень'))*/
         const lvl = 10
         // console.log(lvl);
         if (!isNaN(lvl) && lvl !== 0) {

            // актуальный цикл
            /*const cycle = Number(prompt('Актуальный цикл'))*/
            const cycle = 4
            if (!isNaN(cycle) && cycle !== 0) {

               main(lvl, cycle)

            } else {
               alert('Введено не число');
            }
         } else {
            alert('Введено не число');
         }

         //# Механизм
         function main(lvl, cycle) {

            //# Время взависимости от цикла
            // время
            let time;
            if (cycle === 1) {
               time = '00:00 - 03:00'
            }
            if (cycle === 2) {
               time = '03:00 - 06:00'
            }
            if (cycle === 3) {
               time = '06:00 - 09:00'
            }
            if (cycle === 4) {
               time = '9:00 - 12:00'
            }
            if (cycle === 5) {
               time = '12:00 - 15:00'
            }
            if (cycle === 6) {
               time = '15:00 - 18:00'
            }
            if (cycle === 7) {
               time = '18:00 - 21:00'
            }
            if (cycle === 8) {
               time = '21:00 - 00:00'
            }

            //# Лвл ботов
            let blueBotLvl1 = Number(document.querySelector('[data-name-blue-bot-lvl1]').getAttribute('data-name-blue-bot-lvl1'))
            const nameBlueBotLvl1 = Number(document.querySelector('[data-name-blue-bot-lvl1]').getAttribute('data-name-blue-bot-lvl1'))
            let blueBotLvl2 = Number(document.querySelector('[data-name-blue-bot-lvl2]').getAttribute('data-name-blue-bot-lvl2'))
            const nameBlueBotLvl2 = Number(document.querySelector('[data-name-blue-bot-lvl2]').getAttribute('data-name-blue-bot-lvl2'))
            let blueBotLvl3 = Number(document.querySelector('[data-name-blue-bot-lvl3]').getAttribute('data-name-blue-bot-lvl3'))
            const nameBlueBotLvl3 = Number(document.querySelector('[data-name-blue-bot-lvl3]').getAttribute('data-name-blue-bot-lvl3'))
            let blueBotLvl4 = Number(document.querySelector('[data-name-blue-bot-lvl4]').getAttribute('data-name-blue-bot-lvl4'))
            const nameBlueBotLvl4 = Number(document.querySelector('[data-name-blue-bot-lvl4]').getAttribute('data-name-blue-bot-lvl4'))

            let orangeBotLvl1 = Number(document.querySelector('[data-name-orange-bot-lvl1]').getAttribute('data-name-orange-bot-lvl1'))
            const nameOrangeBotLvl1 = Number(document.querySelector('[data-name-orange-bot-lvl1]').getAttribute('data-name-orange-bot-lvl1'))
            let orangeBotLvl2 = Number(document.querySelector('[data-name-orange-bot-lvl2]').getAttribute('data-name-orange-bot-lvl2'))
            const nameOrangeBotLvl2 = Number(document.querySelector('[data-name-orange-bot-lvl2]').getAttribute('data-name-orange-bot-lvl2'))
            let orangeBotLvl3 = Number(document.querySelector('[data-name-orange-bot-lvl3]').getAttribute('data-name-orange-bot-lvl3'))
            const nameOrangeBotLvl3 = Number(document.querySelector('[data-name-orange-bot-lvl3]').getAttribute('data-name-orange-bot-lvl3'))
            let orangeBotLvl4 = Number(document.querySelector('[data-name-orange-bot-lvl4]').getAttribute('data-name-orange-bot-lvl4'))
            const nameOrangeBotLvl4 = Number(document.querySelector('[data-name-orange-bot-lvl4]').getAttribute('data-name-orange-bot-lvl4'))


            let blueBotLvl5 = 0
            let nameBlueBotLvl5 = 0
            let blue5 = 0
            let actualPointBlue5 = 0
            let blueBot5
            if (document.querySelector('[data-name-blue-bot-lvl5]')) {
               blueBotLvl5 = Number(document.querySelector('[data-name-blue-bot-lvl5]').getAttribute('data-name-blue-bot-lvl5'))
               nameBlueBotLvl5 = Number(document.querySelector('[data-name-blue-bot-lvl5]').getAttribute('data-name-blue-bot-lvl5'))
               blue5 = getRandomInt(0, blueBotLvl5)
               actualPointBlue5 = Number(document.querySelector('[data-actual-point-blue5]').getAttribute('data-actual-point-blue5')) + blue5
               blueBot5 = document.querySelector('[data-blue-bot5]').getAttribute('data-blue-bot5')
            }

            let orangeBotLvl5 = 0
            let nameOrangeBotLvl5 = 0
            let orange5 = 0
            let actualPointOrange5 = 0
            let orangeBot5
            if (document.querySelector('[data-name-orange-bot-lvl5]')) {
               orangeBotLvl5 = Number(document.querySelector('[data-name-orange-bot-lvl5]').getAttribute('data-name-orange-bot-lvl5'))
               nameOrangeBotLvl5 = Number(document.querySelector('[data-name-orange-bot-lvl5]').getAttribute('data-name-orange-bot-lvl5'))
               orange5 = getRandomInt(0, orangeBotLvl5)
               orangeBot5 = document.querySelector('[data-orange-bot5]').getAttribute('data-orange-bot5')
               actualPointOrange5 = Number(document.querySelector('[data-actual-point-orange5]').getAttribute('data-actual-point-orange5')) + orange5
               // blueBotLvl5 = Number(document.querySelector('[data-name-blue-bot-lvl5]').getAttribute('data-name-blue-bot-lvl5'))
               // nameBlueBotLvl5 = Number(document.querySelector('[data-name-blue-bot-lvl5]').getAttribute('data-name-blue-bot-lvl5'))
               // actualPointBlue5 = Number(document.querySelector('[data-actual-point-blue5]').getAttribute('data-actual-point-blue5')) + blue5
               // blueBot5 = document.querySelector('[data-blue-bot5]').getAttribute('data-blue-bot5')
            }


            //# Полученый балл
            let blue1 = getRandomInt(0, blueBotLvl1)
            let blue2 = getRandomInt(0, blueBotLvl2)
            let blue3 = getRandomInt(0, blueBotLvl3)
            let blue4 = getRandomInt(0, blueBotLvl4)
            let orange1 = getRandomInt(0, orangeBotLvl1)
            let orange2 = getRandomInt(0, orangeBotLvl2)
            let orange3 = getRandomInt(0, orangeBotLvl3)
            let orange4 = getRandomInt(0, orangeBotLvl4)

            //# Ники
            const blueBot1 = document.querySelector('[data-blue-bot1]').getAttribute('data-blue-bot1')
            const blueBot2 = document.querySelector('[data-blue-bot2]').getAttribute('data-blue-bot2')
            const blueBot3 = document.querySelector('[data-blue-bot3]').getAttribute('data-blue-bot3')
            const blueBot4 = document.querySelector('[data-blue-bot4]').getAttribute('data-blue-bot4')
            const orangeBot1 = document.querySelector('[data-orange-bot1]').getAttribute('data-orange-bot1')
            const orangeBot2 = document.querySelector('[data-orange-bot2]').getAttribute('data-orange-bot2')
            const orangeBot3 = document.querySelector('[data-orange-bot3]').getAttribute('data-orange-bot3')
            const orangeBot4 = document.querySelector('[data-orange-bot4]').getAttribute('data-orange-bot4')


            // console.log(blueScore);



            let actualPointBlue1 = Number(document.querySelector('[data-actual-point-blue1]').getAttribute('data-actual-point-blue1')) + blue1
            let actualPointBlue2 = Number(document.querySelector('[data-actual-point-blue2]').getAttribute('data-actual-point-blue2')) + blue2
            let actualPointBlue3 = Number(document.querySelector('[data-actual-point-blue3]').getAttribute('data-actual-point-blue3')) + blue3
            let actualPointBlue4 = Number(document.querySelector('[data-actual-point-blue4]').getAttribute('data-actual-point-blue4')) + blue4
            let actualPointOrange1 = Number(document.querySelector('[data-actual-point-orange1]').getAttribute('data-actual-point-orange1')) + orange1
            let actualPointOrange2 = Number(document.querySelector('[data-actual-point-orange2]').getAttribute('data-actual-point-orange2')) + orange2
            let actualPointOrange3 = Number(document.querySelector('[data-actual-point-orange3]').getAttribute('data-actual-point-orange3')) + orange3
            let actualPointOrange4 = Number(document.querySelector('[data-actual-point-orange4]').getAttribute('data-actual-point-orange4')) + orange4






            function darkLuck() {

               const maxValueOut = Math.max(
                  actualPointBlue1, actualPointBlue2, actualPointBlue3, actualPointBlue4, actualPointBlue5,
                  actualPointOrange1, actualPointOrange2, actualPointOrange3, actualPointOrange4, actualPointOrange5
               )



               if (actualPointBlue1 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue1}`);
                     actualPointBlue1 = Math.round(actualPointBlue1 / 2)
                     // blue1 = actualPointBlue1
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 1`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue1}`);

                  }
               }
               if (actualPointBlue2 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue2}`);
                     actualPointBlue2 = Math.round(actualPointBlue2 / 2)
                     // blue2 = actualPointBlue2
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 2`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue2}`);

                  }
               }
               if (actualPointBlue3 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue3}`);
                     actualPointBlue3 = Math.round(actualPointBlue3 / 2)
                     // blue3 = actualPointBlue3
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 3`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue3}`);

                  }
               }
               if (actualPointBlue4 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue4}`);
                     actualPointBlue4 = Math.round(actualPointBlue4 / 2)
                     // blue4 = actualPointBlue4
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 4`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue4}`);

                  }
               }
               if (actualPointBlue5 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue5}`);
                     actualPointBlue5 = Math.round(actualPointBlue5 / 2)
                     // blue5 = actualPointBlue5
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 5`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue5}`);

                  }
               }
               if (actualPointOrange1 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange1}`);
                     actualPointOrange1 = Math.round(actualPointOrange1 / 2)
                     // orange1 = actualPointOrange1
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 6`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange1}`);

                  }
               }
               if (actualPointOrange2 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange2}`);
                     actualPointOrange2 = Math.round(actualPointOrange2 / 2)
                     // orange2 = actualPointOrange2
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 7`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange2}`);

                  }
               }
               if (actualPointOrange3 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange3}`);
                     actualPointOrange3 = Math.round(actualPointOrange3 / 2)
                     // orange3 = actualPointOrange3
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 8`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange3}`);

                  }
               }
               if (actualPointOrange4 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange4}`);
                     actualPointOrange4 = Math.round(actualPointOrange4 / 2)
                     // orange4 = actualPointOrange4
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 9`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange4}`);

                  }
               }
               if (actualPointOrange5 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange5}`);
                     actualPointOrange5 = Math.round(actualPointOrange5 / 2)
                     // orange5 = actualPointOrange5
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 10`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange5}`);

                  }
               }

            }
            darkLuck()

            let myTeamPlace = Number(document.querySelector('[data-my-team-place]').getAttribute('data-my-team-place'))


            //# Счёт
            const meScore = Number(document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max'))
            // blueScore = (blue1 + blue2 + blue3 + blue4 + blue5 + meScore) + blueScore
            // orangeScore = (orange1 + orange2 + orange3 + orange4 + orange5 + meScore) + orangeScore

            let blueScore
            let orangeScore
            // const checkMyTeamPlace = document.querySelector('[data-my-team-place]').getAttribute('data-my-team-place')
            if (myTeamPlace === 1) {
               blueScore = actualPointBlue1 + actualPointBlue2 + actualPointBlue3 + actualPointBlue4 + meScore
               orangeScore = actualPointOrange1 + actualPointOrange2 + actualPointOrange3 + actualPointOrange4 + actualPointOrange5

               console.log(` ${actualPointBlue1} + ${actualPointBlue2} + ${actualPointBlue3} + ${actualPointBlue4} + ${meScore}`)
               console.log(` ${actualPointOrange1} + ${actualPointOrange2} + ${actualPointOrange3} + ${actualPointOrange4} + ${actualPointOrange5}`)


            }
            if (myTeamPlace === 2) {
               blueScore = actualPointBlue1 + actualPointBlue2 + actualPointBlue3 + actualPointBlue4 + actualPointBlue5
               orangeScore = actualPointOrange1 + actualPointOrange2 + actualPointOrange3 + actualPointOrange4 + meScore
            }

            let myPlaceBlue1 = ''
            let myPlaceBlue2 = ''
            let myPlaceBlue3 = ''
            let myPlaceBlue4 = ''
            let myPlaceBlue5 = ''
            let myPlaceBlue6 = ''

            let myPlaceOrange1 = ''
            let myPlaceOrange2 = ''
            let myPlaceOrange3 = ''
            let myPlaceOrange4 = ''
            let myPlaceOrange5 = ''
            let myPlaceOrange6 = ''

            let x = Number(document.querySelector('[data-my-place]').getAttribute('data-my-place'))

            let colorTeam = ''
            if (myTeamPlace === 2) {
               colorTeam = 'main__table-player--orange'
            }



            // <div data-name-blue-bot-lvl1="" data-blue-bot1="" data-blue1="" data-actual-point-blue1="" data-actual-point-max="">0LVL👤Mainstory: [0] +0</div>
            let myName = `
      

      <div class="main__table-player ${colorTeam}" data-player data-my-team-place="${myTeamPlace}" data-my-place="${x}" data-actual-point-max="${document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max')}">
      <div class="main__table-player-left">
         <div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
         <div class="main__table-player-name">Mainstory</div>

      </div>
      <div class="main__table-player-right">
         <div class="main__table-player-succes">${document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max')}</div>

      </div>

   </div>

      `
            let ifRemoveBlue = `

      <div class="main__table-player" data-player data-order="5"  data-name-blue-bot-lvl5="${nameBlueBotLvl5}" data-blue-bot5="${blueBot5}" data-blue5="${blue5}" data-actual-point-blue5="${actualPointBlue5}" data-actual-point-max="${actualPointBlue5}">
      <div class="main__table-player-left">
         <div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
         <div class="main__table-player-name">${blueBot5}</div>

      </div>
      <div class="main__table-player-right">
         <div class="main__table-player-succes">${actualPointBlue5}</div>

      </div>

   </div>
      `
            let ifRemoveOrange = `
      <div class="main__table-player main__table-player--orange" data-player data-order="10"  data-name-orange-bot-lvl5="${nameOrangeBotLvl5}" data-orange-bot5="${orangeBot5}" data-orange5="${orange5}" data-actual-point-orange5="${actualPointOrange5}" data-actual-point-max="${actualPointOrange5}">
      <div class="main__table-player-left">
         <div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
         <div class="main__table-player-name">${orangeBot5}</div>

      </div>
      <div class="main__table-player-right">
         <div class="main__table-player-succes">${actualPointOrange5}</div>

      </div>

   </div>
      
      `

            // data-my-team-place="1" data-my-place="2"


            if (myTeamPlace === 1) {
               //blue

               ifRemoveBlue = ''


               if (1 === x) {
                  myPlaceBlue1 = myName
               }
               if (2 === x) {
                  myPlaceBlue2 = myName

               }
               if (3 === x) {
                  myPlaceBlue3 = myName

               }
               if (4 === x) {
                  myPlaceBlue4 = myName

               }
               if (5 === x) {
                  myPlaceBlue5 = myName

               }
               if (6 === x) {
                  myPlaceBlue6 = myName

               }
            }
            if (myTeamPlace === 2) {
               //orange

               ifRemoveOrange = ''


               // let x = getRandomInt(1, 7)

               if (1 === x) {
                  myPlaceOrange1 = myName
               }
               if (2 === x) {
                  myPlaceOrange2 = myName

               }
               if (3 === x) {
                  myPlaceOrange3 = myName

               }
               if (4 === x) {
                  myPlaceOrange4 = myName

               }
               if (5 === x) {
                  myPlaceOrange5 = myName

               }
               if (6 === x) {
                  myPlaceOrange6 = myName

               }
            }




            //# Вывод
            const template = `

<div class="main__score" data-blue-score="${blueScore}" data-orange-score="${orangeScore}">
<div class="main__score-left">${blueScore}</div>
<div class="main__score-middle">00:00</div>
<div class="main__score-right">${orangeScore}</div>

</div>

<div class="main__table" data-table>
<div class="main__table-blue">

<div class="main__table-top">

<div class="main__table-title-team">СИНИЕ</div>
<div class="main__table-title-succes">УСПЕХИ</div>

</div>

${myPlaceBlue1}
<div class="main__table-player" data-player data-order="1"  data-name-blue-bot-lvl1="${nameBlueBotLvl1}" data-blue-bot1="${blueBot1}" data-blue1="${blue1}" data-actual-point-blue1="${actualPointBlue1}" data-actual-point-max="${actualPointBlue1}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${blueBot1}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${actualPointBlue1}</div>

</div>

</div>
${myPlaceBlue2}
<div class="main__table-player" data-player data-order="2"  data-name-blue-bot-lvl2="${nameBlueBotLvl2}" data-blue-bot2="${blueBot2}" data-blue2="${blue2}" data-actual-point-blue2="${actualPointBlue2}" data-actual-point-max="${actualPointBlue2}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${blueBot2}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${actualPointBlue2}</div>

</div>

</div>
${myPlaceBlue3}
<div class="main__table-player" data-player data-order="3"  data-name-blue-bot-lvl3="${nameBlueBotLvl3}" data-blue-bot3="${blueBot3}" data-blue3="${blue3}" data-actual-point-blue3="${actualPointBlue3}" data-actual-point-max="${actualPointBlue3}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${blueBot3}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${actualPointBlue3}</div>

</div>

</div>
${myPlaceBlue4}
<div class="main__table-player" data-player data-order="4"  data-name-blue-bot-lvl4="${nameBlueBotLvl4}" data-blue-bot4="${blueBot4}" data-blue4="${blue4}" data-actual-point-blue4="${actualPointBlue4}" data-actual-point-max="${actualPointBlue4}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${blueBot4}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${actualPointBlue4}</div>

</div>

</div>
${myPlaceBlue5}
${ifRemoveBlue}
${myPlaceBlue6}


</div>
<div class="main__table-orange">

<div class="main__table-top">

<div class="main__table-title-team main__table-title-team--orange">ОРАНЖЕВЫЕ</div>
<div class="main__table-title-succes">УСПЕХИ</div>

</div>

${myPlaceOrange1}
<div class="main__table-player main__table-player--orange" data-player data-order="6"  data-name-orange-bot-lvl1="${nameOrangeBotLvl1}" data-orange-bot1="${orangeBot1}" data-orange1="${orange1}" data-actual-point-orange1="${actualPointOrange1}" data-actual-point-max="${actualPointOrange1}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${orangeBot1}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${actualPointOrange1}</div>

</div>

</div>
${myPlaceOrange2}

<div class="main__table-player main__table-player--orange" data-player data-order="7"  data-name-orange-bot-lvl2="${nameOrangeBotLvl2}" data-orange-bot2="${orangeBot2}" data-orange2="${orange2}" data-actual-point-orange2="${actualPointOrange2}" data-actual-point-max="${actualPointOrange2}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${orangeBot2}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${actualPointOrange2}</div>

</div>

</div>
${myPlaceOrange3}

<div class="main__table-player main__table-player--orange" data-player data-order="8"  data-name-orange-bot-lvl3="${nameOrangeBotLvl3}" data-orange-bot3="${orangeBot3}" data-orange3="${orange3}" data-actual-point-orange3="${actualPointOrange3}" data-actual-point-max="${actualPointOrange3}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${orangeBot3}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${actualPointOrange3}</div>

</div>

</div>
${myPlaceOrange4}

<div class="main__table-player main__table-player--orange" data-player data-order="9"  data-name-orange-bot-lvl4="${nameOrangeBotLvl4}" data-orange-bot4="${orangeBot4}" data-orange4="${orange4}" data-actual-point-orange4="${actualPointOrange4}" data-actual-point-max="${actualPointOrange4}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${orangeBot4}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${actualPointOrange4}</div>

</div>

</div>
${myPlaceOrange5}
${ifRemoveOrange}
${myPlaceOrange6}

</div>


</div>




`

            // console.log(template)

            // const div = document.createElement('div')
            // div.innerHTML = template
            document.querySelector('[data-zone]').insertAdjacentHTML('afterbegin', template)
            // document.querySelector('[data-zone]').prepend(div)

            const me = Number(document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max'))

            const maxValue = Math.max(
               actualPointBlue1, actualPointBlue2, actualPointBlue3, actualPointBlue4, actualPointBlue5,
               actualPointOrange1, actualPointOrange2, actualPointOrange3, actualPointOrange4, actualPointOrange5,
               me
            )

            document.querySelectorAll('[data-actual-point-max]').forEach((e) => {
               const checkAtt = Number(e.getAttribute('data-actual-point-max'))
               if (checkAtt === maxValue) {
                  e.classList.add('_active')


               }
               // else {
               //    e.classList.remove('_active')

               // }

            })




            if (blueScore > orangeScore) {
               console.log('в мини матче выиграла синяя команда');

               let elemInner = document.querySelector('[data-table]').outerHTML
               let score = document.querySelector('.main__score').outerHTML
               save('winner', elemInner)
               save('score', score)
               save('winnerColor', 'blue')

            }
            if (blueScore < orangeScore) {
               console.log('в мини матче выиграла оранжевая команда');

               let elemInner = document.querySelector('[data-table]').outerHTML
               let score = document.querySelector('.main__score').outerHTML
               save('winner', elemInner)
               save('score', score)
               save('winnerColor', 'orange')

            }
            if (blueScore === orangeScore) {
               console.log('ничья');

               let elemInner = document.querySelector('[data-table]').outerHTML
               let score = document.querySelector('.main__score').outerHTML
               save('winner', elemInner)
               save('score', score)
               save('winnerColor', 'nothing')


            }




            //# копирование в буфер обмена
            /*  navigator.clipboard.writeText(template).then(() => console.log("Скопировано")).catch(err => console.error(err))
              */

            console.log('==================================================================')


            function winnerPopup() {

               // audio-win.mp3


               // document.querySelector('[data-winner-zone]').innerHTML = get('score')
               document.querySelector('[data-winner-zone]').insertAdjacentHTML('beforeend', get('score'))
               document.querySelector('[data-winner-zone]').insertAdjacentHTML('beforeend', get('winner'))

               if (get('winnerColor') === 'blue') {
                  document.querySelector('[data-winner-title]').classList.add(`_${get('winnerColor')}`)
                  document.querySelector('.winner__body').classList.add(`_${get('winnerColor')}`)
                  document.querySelector('[data-winner-title]').innerText = 'СИНЯЯ КОМАНДА'

               }
               if (get('winnerColor') === 'orange') {
                  document.querySelector('[data-winner-title]').classList.add(`_${get('winnerColor')}`)
                  document.querySelector('.winner__body').classList.add(`_${get('winnerColor')}`)
                  document.querySelector('[data-winner-title]').innerText = 'ОРАНЖЕВАЯ КОМАНДА'

               }
               if (get('winnerColor') === 'nothing') {
                  document.querySelector('[data-winner-title]').classList.add(`_${get('winnerColor')}`)
                  document.querySelector('.winner__body').classList.add(`_${get('winnerColor')}`)
                  document.querySelector('[data-winner-title]').innerText = 'НИЧЬЯ'

               }


               document.querySelector('.wrapper').classList.add('_active')
               document.querySelector('body').classList.add('_scroll-off')




               // new Audio('audio/gambling.mp3').play()







               // new Audio('audio/audio-win.mp3').play()

               // &&&
               // document.querySelector('[data-receiving]').classList.add('_active')

            }
            winnerPopup()



            document.querySelector('[data-receiving]').classList.add('_active')

            save('myMoney', Number(get('myMoney')) + 200)




         }

      }
      have()
   } else {
      //# ================================================================== Таблицы нету
      console.log('нету')

      function notHave() {

         //# Генератор ников
         const names = [
            'Maggotta',
            'HoleyMole',
            'PrincePle',
            'CatInHat',
            'Myopia',

            'Redshock',
            'Willowisp',
            'BeardDemon',
            'Hypophrenia',
            'SandySun',

            'DriveTime',
            'Moonlighter',
            'MarcAntony',
            'Trilemma',
            'Safflower',

            'CrystalRage',
            'HodgePodge',
            'MorningDawning',
            'NarrowVictory',
            'RiseUp',
         ]
         let actualElems = []
         let amount = 10

         // new
         if (actualElems.length) {

         } else {
            const x = getRandomInt(0, 20)
            const name = names[x]
            actualElems.push(name)
         }

         do {

            const x = getRandomInt(0, 20)
            const name = names[x]
            // console.log(name);

            let check = 'start'

            actualElems.forEach((actualElem) => {
               if (actualElem === name) {
                  check = 'stop'
               }
            })

            if (check === 'start') {
               // console.log('этот ник свободен');

               actualElems.push(name)
            }
            if (check === 'stop') {
               // console.log('этот ник уже занят');
            }



         } while (actualElems.length < amount)

         console.log(actualElems);

         //# Вводные данные
         const lvl = 10
         if (!isNaN(lvl) && lvl !== 0) {

            // актуальный цикл
            const cycle = 4
            if (!isNaN(cycle) && cycle !== 0) {

               main(lvl, cycle)

            } else {
               alert('Введено не число');
            }
         } else {
            alert('Введено не число');
         }

         //# Механизм
         function main(lvl, cycle) {

            //# Время взависимости от цикла
            // время
            let time;
            if (cycle === 1) {
               time = '00:00 - 03:00'
            }
            if (cycle === 2) {
               time = '03:00 - 06:00'
            }
            if (cycle === 3) {
               time = '06:00 - 09:00'
            }
            if (cycle === 4) {
               time = '9:00 - 12:00'
            }
            if (cycle === 5) {
               time = '12:00 - 15:00'
            }
            if (cycle === 6) {
               time = '15:00 - 18:00'
            }
            if (cycle === 7) {
               time = '18:00 - 21:00'
            }
            if (cycle === 8) {
               time = '21:00 - 00:00'
            }


            //# Лвл ботов
            let blueBotLvl1 = lvl
            const nameBlueBotLvl1 = blueBotLvl1

            let blueBotLvl2 = lvl
            const nameBlueBotLvl2 = blueBotLvl2

            let blueBotLvl3 = lvl
            const nameBlueBotLvl3 = blueBotLvl3


            let blueBotLvl4 = lvl
            const nameBlueBotLvl4 = blueBotLvl4


            let blueBotLvl5 = lvl
            const nameBlueBotLvl5 = blueBotLvl5


            let orangeBotLvl1 = lvl
            const nameOrangeBotLvl1 = orangeBotLvl1


            let orangeBotLvl2 = lvl
            const nameOrangeBotLvl2 = orangeBotLvl2


            let orangeBotLvl3 = lvl
            const nameOrangeBotLvl3 = orangeBotLvl3



            let orangeBotLvl4 = lvl
            const nameOrangeBotLvl4 = orangeBotLvl4



            let orangeBotLvl5 = lvl
            const nameOrangeBotLvl5 = orangeBotLvl5


            //# Полученый балл
            let blue1 = getRandomInt(1, blueBotLvl1 + 1)
            let blue2 = getRandomInt(1, blueBotLvl2 + 1)
            let blue3 = getRandomInt(1, blueBotLvl3 + 1)
            let blue4 = getRandomInt(1, blueBotLvl4 + 1)
            let blue5 = getRandomInt(1, blueBotLvl5 + 1)
            let orange1 = getRandomInt(1, orangeBotLvl1 + 1)
            let orange2 = getRandomInt(1, orangeBotLvl2 + 1)
            let orange3 = getRandomInt(1, orangeBotLvl3 + 1)
            let orange4 = getRandomInt(1, orangeBotLvl4 + 1)
            let orange5 = getRandomInt(1, orangeBotLvl5 + 1)

            //# Ники
            const blueBot1 = actualElems[0]
            const blueBot2 = actualElems[1]
            const blueBot3 = actualElems[2]
            const blueBot4 = actualElems[3]
            const blueBot5 = actualElems[4]
            const orangeBot1 = actualElems[5]
            const orangeBot2 = actualElems[6]
            const orangeBot3 = actualElems[7]
            const orangeBot4 = actualElems[8]
            const orangeBot5 = actualElems[9]



            let actualPointBlue1 = blue1
            let actualPointBlue2 = blue2
            let actualPointBlue3 = blue3
            let actualPointBlue4 = blue4
            let actualPointBlue5 = blue5
            let actualPointOrange1 = orange1
            let actualPointOrange2 = orange2
            let actualPointOrange3 = orange3
            let actualPointOrange4 = orange4
            let actualPointOrange5 = orange5

            // if (blueScore > orangeScore) {
            //    console.log('в мини матче выиграла синяя команда');
            // } else {
            //    console.log('в мини матче выиграла оранжевая команда');
            // }


            function darkLuck() {



               const maxValueOut = Math.max(
                  actualPointBlue1, actualPointBlue2, actualPointBlue3, actualPointBlue4, actualPointBlue5,
                  actualPointOrange1, actualPointOrange2, actualPointOrange3, actualPointOrange4, actualPointOrange5
               )
               if (actualPointBlue1 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue1}`);

                     actualPointBlue1 = Math.round(actualPointBlue1 / 2)
                     blue1 = actualPointBlue1

                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 1`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue1}`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ===========================`);

                  }
               }
               if (actualPointBlue2 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue2}`);

                     actualPointBlue2 = Math.round(actualPointBlue2 / 2)
                     blue2 = actualPointBlue2

                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 2`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue2}`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ===========================`);


                  }
               }
               if (actualPointBlue3 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue3}`);

                     actualPointBlue3 = Math.round(actualPointBlue3 / 2)
                     blue3 = actualPointBlue3

                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 3`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue3}`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ===========================`);


                  }
               }
               if (actualPointBlue4 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue4}`);

                     actualPointBlue4 = Math.round(actualPointBlue4 / 2)
                     blue4 = actualPointBlue4

                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 4`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue4}`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ===========================`);


                  }
               }
               if (actualPointBlue5 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue5}`);

                     actualPointBlue5 = Math.round(actualPointBlue5 / 2)
                     blue5 = actualPointBlue5

                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 5`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue5}`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ===========================`);


                  }
               }
               if (actualPointOrange1 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange1}`);

                     actualPointOrange1 = Math.round(actualPointOrange1 / 2)
                     orange1 = actualPointOrange1

                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 6`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange1}`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ===========================`);


                  }
               }
               if (actualPointOrange2 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange2}`);

                     actualPointOrange2 = Math.round(actualPointOrange2 / 2)
                     orange2 = actualPointOrange2

                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 7`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange2}`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ===========================`);


                  }
               }
               if (actualPointOrange3 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointBlue4}`);

                     actualPointOrange3 = Math.round(actualPointOrange3 / 2)
                     orange3 = actualPointOrange3

                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 8`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange3}`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ===========================`);


                  }
               }
               if (actualPointOrange4 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange4}`);

                     actualPointOrange4 = Math.round(actualPointOrange4 / 2)
                     orange4 = actualPointOrange4

                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 9`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange4}`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ===========================`);


                  }
               }
               if (actualPointOrange5 === maxValueOut) {
                  if (getRandomInt(1, 3) === 2) {
                     //-50%
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange5}`);

                     actualPointOrange5 = Math.round(actualPointOrange5 / 2)
                     orange5 = actualPointOrange5

                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: 10`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ${actualPointOrange5}`);
                     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DARKLUCK: ===========================`);


                  }
               }

            }
            darkLuck()

            let myTeamPlace = getRandomInt(1, 3)

            //# Счёт
            const meScore = Number(document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max'))
            let blueScore
            let orangeScore
            // const checkMyTeamPlace = document.querySelector('[data-my-team-place]').getAttribute('data-my-team-place')
            if (myTeamPlace === 1) {
               blueScore = blue1 + blue2 + blue3 + blue4 + meScore
               orangeScore = orange1 + orange2 + orange3 + orange4 + orange5
            }
            if (myTeamPlace === 2) {
               blueScore = blue1 + blue2 + blue3 + blue4 + blue5
               orangeScore = orange1 + orange2 + orange3 + orange4 + meScore
            }

            let myPlaceBlue1 = ''
            let myPlaceBlue2 = ''
            let myPlaceBlue3 = ''
            let myPlaceBlue4 = ''
            let myPlaceBlue5 = ''
            let myPlaceBlue6 = ''

            let myPlaceOrange1 = ''
            let myPlaceOrange2 = ''
            let myPlaceOrange3 = ''
            let myPlaceOrange4 = ''
            let myPlaceOrange5 = ''
            let myPlaceOrange6 = ''



            function reset() {

               // ============ zeroing
               blueScore = 0
               orangeScore = 0

               blue1 = 0
               blue2 = 0
               blue3 = 0
               blue4 = 0
               blue5 = 0

               orange1 = 0
               orange2 = 0
               orange3 = 0
               orange4 = 0
               orange5 = 0

               actualPointBlue1 = 0
               actualPointBlue2 = 0
               actualPointBlue3 = 0
               actualPointBlue4 = 0
               actualPointBlue5 = 0

               actualPointOrange1 = 0
               actualPointOrange2 = 0
               actualPointOrange3 = 0
               actualPointOrange4 = 0
               actualPointOrange5 = 0

            }
            reset()







            let x = getRandomInt(1, 7)

            let ifRemoveBlue = `
      <div class="main__table-player" data-player data-name-blue-bot-lvl5="${nameBlueBotLvl5}" data-blue-bot5="${blueBot5}" data-blue5="${blue5}" data-actual-point-blue5="${actualPointBlue5}" data-actual-point-max="${actualPointBlue5}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${blueBot5}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${blue5}</div>

</div>

</div>
      `

            let ifRemoveOrange = `
      <div class="main__table-player main__table-player--orange" data-player data-name-orange-bot-lvl5="${nameOrangeBotLvl5}" data-orange-bot5="${orangeBot5}" data-orange5="${orange5}" data-actual-point-orange5="${actualPointOrange5}" data-actual-point-max="${actualPointOrange5}">
      <div class="main__table-player-left">
         <div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
         <div class="main__table-player-name">${orangeBot5}</div>

      </div>
      <div class="main__table-player-right">
         <div class="main__table-player-succes">${orange5}</div>

      </div>

   </div>
      `



            let colorTeam = ''
            if (myTeamPlace === 2) {
               colorTeam = 'main__table-player--orange'
            }

            let myName = `
      <div class="main__table-player ${colorTeam}" data-player data-my-team-place="${myTeamPlace}" data-my-place="${x}" data-actual-point-max="${document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max')}">
      <div class="main__table-player-left">
      <div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
      <div class="main__table-player-name">Mainstory</div>

      </div>
      <div class="main__table-player-right">
      <div class="main__table-player-succes">${document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max')}</div>

      </div>

      </div>
      `

            if (myTeamPlace === 1) {
               //blue

               ifRemoveBlue = ''

               // let x = getRandomInt(1, 7)
               // console.log(`@@@@@@@@@@@@@@@@@@${x}`);

               if (1 === x) {
                  myPlaceBlue1 = myName
               }
               if (2 === x) {
                  myPlaceBlue2 = myName

               }
               if (3 === x) {
                  myPlaceBlue3 = myName

               }
               if (4 === x) {
                  myPlaceBlue4 = myName

               }
               if (5 === x) {
                  myPlaceBlue5 = myName

               }
               if (6 === x) {
                  myPlaceBlue6 = myName

               }
            }
            if (myTeamPlace === 2) {
               //orange

               ifRemoveOrange = ''


               // let x = getRandomInt(1, 7)
               // console.log(`@@@@@@@@@@@@@@@@@@${x}`);

               if (1 === x) {
                  myPlaceOrange1 = myName
               }
               if (2 === x) {
                  myPlaceOrange2 = myName

               }
               if (3 === x) {
                  myPlaceOrange3 = myName

               }
               if (4 === x) {
                  myPlaceOrange4 = myName

               }
               if (5 === x) {
                  myPlaceOrange5 = myName

               }
               if (6 === x) {
                  myPlaceOrange6 = myName

               }
            }







            //# Вывод
            const template = `

<div class="main__score" data-blue-score="${blueScore}" data-orange-score="${orangeScore}">
<div class="main__score-left">${blueScore}</div>
<div class="main__score-middle">00:00</div>
<div class="main__score-right">${orangeScore}</div>

</div>

<div class="main__table" data-table>
<div class="main__table-blue">

<div class="main__table-top">

<div class="main__table-title-team">СИНИЕ</div>
<div class="main__table-title-succes">УСПЕХИ</div>

</div>

${myPlaceBlue1}

<div class="main__table-player" data-player data-name-blue-bot-lvl1="${nameBlueBotLvl1}" data-blue-bot1="${blueBot1}" data-blue1="${blue1}" data-actual-point-blue1="${actualPointBlue1}" data-actual-point-max="${actualPointBlue1}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${blueBot1}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${blue1}</div>

</div>

</div>
${myPlaceBlue2}
<div class="main__table-player" data-player data-name-blue-bot-lvl2="${nameBlueBotLvl2}" data-blue-bot2="${blueBot2}" data-blue2="${blue2}" data-actual-point-blue2="${actualPointBlue2}" data-actual-point-max="${actualPointBlue2}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${blueBot2}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${blue2}</div>

</div>

</div>
${myPlaceBlue3}
<div class="main__table-player" data-player data-name-blue-bot-lvl3="${nameBlueBotLvl3}" data-blue-bot3="${blueBot3}" data-blue3="${blue3}" data-actual-point-blue3="${actualPointBlue3}" data-actual-point-max="${actualPointBlue3}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${blueBot3}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${blue3}</div>

</div>

</div>
${myPlaceBlue4}
<div class="main__table-player" data-player data-name-blue-bot-lvl4="${nameBlueBotLvl4}" data-blue-bot4="${blueBot4}" data-blue4="${blue4}" data-actual-point-blue4="${actualPointBlue4}" data-actual-point-max="${actualPointBlue4}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${blueBot4}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${blue4}</div>

</div>

</div>
${myPlaceBlue5}
${ifRemoveBlue}
${myPlaceBlue6}

</div>
<div class="main__table-orange">

<div class="main__table-top">

<div class="main__table-title-team main__table-title-team--orange">ОРАНЖЕВЫЕ</div>
<div class="main__table-title-succes">УСПЕХИ</div>

</div>
${myPlaceOrange1}
<div class="main__table-player main__table-player--orange" data-player data-name-orange-bot-lvl1="${nameOrangeBotLvl1}" data-orange-bot1="${orangeBot1}" data-orange1="${orange1}" data-actual-point-orange1="${actualPointOrange1}" data-actual-point-max="${actualPointOrange1}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${orangeBot1}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${orange1}</div>

</div>

</div>
${myPlaceOrange2}
<div class="main__table-player main__table-player--orange" data-player data-name-orange-bot-lvl2="${nameOrangeBotLvl2}" data-orange-bot2="${orangeBot2}" data-orange2="${orange2}" data-actual-point-orange2="${actualPointOrange2}" data-actual-point-max="${actualPointOrange2}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${orangeBot2}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${orange2}</div>

</div>

</div>
${myPlaceOrange3}
<div class="main__table-player main__table-player--orange" data-player data-name-orange-bot-lvl3="${nameOrangeBotLvl3}" data-orange-bot3="${orangeBot3}" data-orange3="${orange3}" data-actual-point-orange3="${actualPointOrange3}" data-actual-point-max="${actualPointOrange3}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${orangeBot3}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${orange3}</div>

</div>

</div>
${myPlaceOrange4}
<div class="main__table-player main__table-player--orange" data-player data-name-orange-bot-lvl4="${nameOrangeBotLvl4}" data-orange-bot4="${orangeBot4}" data-orange4="${orange4}" data-actual-point-orange4="${actualPointOrange4}" data-actual-point-max="${actualPointOrange4}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${orangeBot4}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${orange4}</div>

</div>

</div>
${myPlaceOrange5}
${ifRemoveOrange}
${myPlaceOrange6}

</div>


</div>


`
            // console.log(template)

            // const div = document.createElement('div')
            // div.innerHTML = template
            document.querySelector('[data-zone]').insertAdjacentHTML('afterbegin', template)
            // document.querySelector('[data-zone]').prepend(div)

            //# копирование в буфер обмена
            /*  navigator.clipboard.writeText(template).then(() => console.log("Скопировано")).catch(err => console.error(err))
              */
            const me = Number(document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max'))

            const maxValue = Math.max(
               actualPointBlue1, actualPointBlue2, actualPointBlue3, actualPointBlue4, actualPointBlue5,
               actualPointOrange1, actualPointOrange2, actualPointOrange3, actualPointOrange4, actualPointOrange5,
               me
            )



            // document.querySelectorAll('[data-actual-point-max]').forEach((e) => {
            //    const checkAtt = Number(e.getAttribute('data-actual-point-max'))
            //    if (checkAtt === maxValue) {
            //       e.classList.add('_active')
            //    }
            //    // else {
            //    //    e.classList.remove('_active')

            //    // }

            // })

            console.log('==================================================================')


            startAll()

         }


      }
      notHave()

   }



}

if (document.querySelector('[data-battle-section]')) {


   generateBattleData()

}



if (document.querySelector('[data-exit]')) {

   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('[data-exit]')) {
         rem('winner')
         rem('winnerColor')
         rem('score')


      }

   })

}









document.addEventListener('click', (event) => {
   const eventTarget = event.target

   if (eventTarget.closest('[data-card-category]')) {



      new Audio('audio/buttonclickrelease.mp3').play()


      const myMoney = Number(get('myMoney'))


      const color = eventTarget.closest('[data-card]').getAttribute('data-card-color')
      let x
      if (color === 'yellow') {
         x = 1600
      }
      if (color === 'red') {
         x = 800
      }
      if (color === 'pink') {
         x = 400
      }
      if (color === 'fiolet') {
         x = 200
      }
      if (color === 'blue') {
         x = 100
      }
      if (color === 'light-blue') {
         x = 50
      }



      if (confirm(`Продать за ${x}$ ?`)) {





         const result = myMoney + x

         document.querySelector('[data-my-money]').setAttribute('data-my-money', result)
         // document.querySelector('[data-my-money]').innerHTML = result
         save('myMoney', result)

         document.querySelector('[data-receiving]').querySelector('[data-receiving-title]').innerHTML = x



         eventTarget.closest('[data-card]').remove()




         const index = Number(eventTarget.closest('[data-card]').getAttribute('data-card-index'))
         eventTarget.closest('[data-card]').remove()

         const array = JSON.parse(get('array'))
         delete array[index]

         save('array', JSON.stringify(array))

         new Audio('audio/gambling.mp3').play()

         setTimeout(() => {
            document.querySelector('[data-receiving]').classList.add('_active')

         }, 1000);





      }



   }

})












document.addEventListener('click', (event) => {
   const eventTarget = event.target

   if (eventTarget.closest('.card__btn') || eventTarget.closest('.big-card__btn')) {

      if (eventTarget.innerText === 'ПРИМЕНИТЬ') {

         console.log(1);


         const index = Number(eventTarget.closest('[data-card]').getAttribute('data-card-index'))

         const array = JSON.parse(get('array'))
         delete array[index]

         save('array', JSON.stringify(array))


         const card = eventTarget.closest('[data-card]')
         const title = card.querySelector('[data-card-title]').innerText
         const img = card.querySelector('[data-card-img]').innerHTML
         const category = card.querySelector('[data-card-category]').innerText
         const color = card.getAttribute('data-card-color')

         document.querySelector('[data-receiving]').setAttribute('data-receiving-color', color)
         document.querySelector('[data-receiving]').querySelector('[data-card-color]').setAttribute('data-card-color', color)

         document.querySelector('[data-receiving-title]').innerText = title
         document.querySelector('[data-receiving-img]').innerHTML = img
         document.querySelector('[data-receiving-category]').innerText = category



         eventTarget.closest('[data-card]').remove()


         setTimeout(() => {
            document.querySelector('[data-receiving]').classList.add('_active')

         }, 1000);

         new Audio('audio/gambling.mp3').play()
         new Audio('audio/buttonclickrelease.mp3').play()




      }
   }

})












// import {
//    colorYellowItems,
//    colorRedItems,
//    colorPinkItems,
//    colorFioletItems,
//    colorBlueItems,
//    colorLightBlueItems
// } from './storage.js';
















document.addEventListener('click', (event) => {
   const eventTarget = event.target

   if (eventTarget.closest('[data-link]')) {



      if (eventTarget.hasAttribute('data-stop')) {


      } else {
         eventTarget.setAttribute('data-stop', '')

         new Audio('audio/buttonclickrelease.mp3').play()

         const path = eventTarget.getAttribute('data-link')


         setTimeout(() => {
            location.replace(path)
         }, 300)


      }

   }

})









