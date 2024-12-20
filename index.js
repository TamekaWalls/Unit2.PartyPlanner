

const getEvents = async () => {
  const res = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2410-ftb-mt-web-pt/events');
  const json = await res.json()
  console.log(json.data)
  showEvents(json.data)
}

function showEvents(events) {
  const container = document.querySelector(`.container`)
  container.innerHTML = ""
  events.forEach((event) => {
    const itemDiv = document.createElement(`div`)
    itemDiv.innerHTML = `
      <h3>${event.name}</h3> 
    <p>Date: ${(new Date(event.date)).toDateString()}</p>
    <p>Time: ${(new Date(Event.time)).toLocaleTimeString()}</p>
    <p>Location: ${event.location}</p>
    <p>${event.description}</p>
    <button id="${event.id}">Delete</button>
  `
    container.appendChild(itemDiv)
  })
  addDeleteEvents()
}

function addDeleteEvents(){
  const buttons = document.querySelectorAll(`button`)
  buttons.forEach(btn =>{
  btn.addEventListener('click',(event) =>{
    deleteEvent(event.target.id)
    })
  })
}

async function deleteEvent (id){
  const res = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2410-ftb-mt-web-pt/events/${id}`,{
    method:"DELETE",
    headers: {}
  });
}
getEvents()