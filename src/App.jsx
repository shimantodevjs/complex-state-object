import { useState } from 'react'
import emptyStar from './assets/empty-star.png'
import fullStar from './assets/full-star.png'

function App() {
  const [person, setPerson] = useState({
    firstName:'shyman',
    lastName: 'shimanto',
    phone:'+7999-121-8732',
    email: 'shimantodevjs@gmail.com',
    isFavourite: true
  })

  let starIcon=person.isFavourite? fullStar:emptyStar

  function toggleFev(){
     setPerson(prevPerson=>{
      return{
            ...prevPerson,
            isFavourite:!prevPerson.isFavourite
      }
     })
  }

  return (
       <main>
        <article className="card">
          <img src="https://play-lh.googleusercontent.com/EotxkWC4dXajaesh2iVgdIB5-o6pINoas_k-z7nVjRGSu4k9QZwMZIcRNXyUWGn3rg=w240-h480" alt="" className="card__img" />
          <div className="card__info">
            <img src={starIcon} alt="" className="card__fev" onClick={toggleFev}/>
            <h2 className="card__name">{`${person.firstName} ${person.lastName}`}</h2>
            <p className="contact">{person.phone}</p>
            <p className="contact">{person.email}</p>
          </div>
        </article>
       </main>
  )
}

export default App
