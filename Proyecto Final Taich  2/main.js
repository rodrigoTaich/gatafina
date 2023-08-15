
const btn = document.getElementById("btn")
btn.addEventListener('click', () =>{
    Toastify({

        text: "We will send you an email to proced to payment.", 
        action:"https://formsubmit.co/gfinastudio@gmail.com",
        method:"POST",
      
        duration: 2700,
        style:{
            background: '#645F6D'
        }
        
        }).showToast();
})

const btn2 = document.getElementById("btn2")
btn2.addEventListener('click', () =>{
    Toastify({

        text: "Your message was submitted.", 
        action:"https://formsubmit.co/gfinastudio@gmail.com",
        method:"POST",
      
        duration: 2700,
        style:{
            background: '#645F6D'
        }
        
        }).showToast();
})


  document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function() {
      formulario.reset();
    });
  });




const lista = document.getElementById("lista")

fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(response => response.json())
  .then(data => (
      data.forEach(publicacion  => {
          const li = document.createElement("li")
          li.className = "lista"
          li.innerHTML =`
          
          <h4>Name: ${publicacion.name}</h4>
          <h4> ${publicacion.email}</h4>
          <p>Review: ${publicacion.body}</p>
          `

          lista.appendChild(li)
      })
  ));

