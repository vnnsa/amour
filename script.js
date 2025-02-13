const alternatives = [
  {text:"", images:"https://media.tenor.com/28CE0PKDnHsAAAAm/laphie.webp"},
  {text:"I know I can be a little childish & act impulsively sometimes, and not talking to you for days was just plain silly.Is it too late now to say SORRY ?", images:"https://media.tenor.com/wbqDH6hm_gcAAAAi/peach-goma-peach-and-goma.gif"},
  {text:"I’ve been thinking a lot, and I just want to say I’m really sorry.Do you still miss me?", images:"https://s3.getstickerpack.com/storage/uploads/sticker-pack/lovely-kitties-o-3o/sticker_2.webp?3f151352ca5bf4450f79fc0beb66ff51&d=200x200"},
  {text:"I miss you so much. I hope you still care about me,do you ?", images:"https://s3.getstickerpack.com/storage/uploads/sticker-pack/lovely-kitties-o-3o/sticker_1.webp?3f151352ca5bf4450f79fc0beb66ff51&d=200x200"},
  {text:"I wanted to surprise you with this,I told you(if you remember?)I love you,Do you still love me ?", images:"https://i.pinimg.com/originals/95/86/ed/9586ed9e6d0b285b95ea77d4ef91ace8.gif"},
]
const ohyes = {text:"I miss you Daddy!Can we talk?I wanna see you soon..💕 ", images:"https://i.pinimg.com/originals/66/2f/4d/662f4df4317e04e9ddbfc6ff4ee4ee5d.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Yes"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'No'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})