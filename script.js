const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"I know I can be a little childish & act impulsively sometimes, and not talking to you for days was just plain silly.Is it too late now to say SORRY ?", images:"images/cat-02.gif"},
  {text:"I’ve been thinking a lot, and I just want to say I’m really sorry.Do you still miss me?", images:"images/cat-03.gif"},
  {text:"I miss you so much. I hope you still care about me,do you ?", images:"images/cat-04.gif"},
  {text:"I wanted to surprise you with this,I told you(if you remember?)I love you,Do you still love me ?", images:"images/cat-05.gif"},
]
const ohyes = {text:"I miss you Daddy!Can we talk?I wanna see you soon..💕 ", images:"images/cat-yes.gif"}
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