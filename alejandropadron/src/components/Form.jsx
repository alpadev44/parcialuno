import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
    const [user, setUser] = useState({
        autor: '',
        song: '',
        year: '',
        genre: ''
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.autor.length > 3 &&  user.autor.charAt(0) !== '' && user.song.length > 5) {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }
    }

  return (
    <div className='Form'>
        <form onSubmit={handleSubmit}>
            <label>Autor</label>
            <input className='autor' type="text" value={user.autor} onChange={(e) => setUser({...user, autor: e.target.value})}/>
            <label>Song</label>
            <input className='song'type="text" value={user.song} onChange={(e) => setUser({...user, song: e.target.value})}/>
            <label>Year</label>
            <input className='year' type="text" value={user.year} onChange={(e) => setUser({...user, year: e.target.value})}/>
            <select  className='genre' value={user.genre} onChange={(e) => setUser({...user, genre: e.target.value})}>
                <option value="">Select option</option>
                <option value="Rock">Rock</option>
                <option value="Metal">Metal</option>
                <option value="Pop">Pop</option>
            </select>
            <button>Enviar</button>
            {err && 'Coloque la información correspondiente'}
        </form><br /><br />
        {show  && <Card autor={user.autor} song={user.song} year={user.year} genre={user.genre} />}
        {/* {show  ? <Card nombre={user.nombre} medico={user.medico}/> : null} */}
       
    </div>
  )
}

export default Form