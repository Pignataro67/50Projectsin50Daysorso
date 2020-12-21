

// jokeEl = document.getElementById('joke')
// jokeBtn = document.getElementById('jokeBtn')

// jokeBtn.addEventListener('click', generateJoke) 

// generateJoke()

// async function generateJoke() {
//     const config = {
//       headers: {
//         'Accept': 'application/json'
//       },
//     }
  
//     const res = await fetch('https://icanhazdadjoke.com', config)
    
//     const data  = await res.json()

//     jokeEl.innerHTML = data.joke
//   }


// function generateJoke() {
//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//   .then((res) => res.json())
//   .then((data) => {
//     jokeEl.innerHTML = data.joke
//   })
// }

// const sounds = ['appluase', 'boo', 'gasp','tada', 'victory', 'wrong']

// sounds.forEach(sound => {
//   const btn = document.createElement('button')
//     btn.classList.add('btn')

//     btn.innerText = sound

//     btn.addEventListener('click', () => {
//       stopSongs()

//       document.getElementById(sound).play()
//     })

//     document.getElementById('buttons').appendChild(btn)
// })

// function stopSongs() {
//   sounds.forEach(sound => {
//     const song = document.getElementById(sound)

//     song.pause();
//     song.currentTime = 0;
//   })
// }

// const labels = document.querySelectorAll('.form-control label')

// labels.forEach(label => {
//   label.innerHTML = label.innerText
//     .split('')
//     .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
//     .join('')
// })



// const left = document.querySelector('.left')
// const right = document.querySelector('.right')
// const container = document.querySelector('.container')

// left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
// left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

// right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
// right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))