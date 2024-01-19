import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Scott','Michael','Tiger','Scott']
    // const persons = [
    //     {
    //         id:1,
    //         name:'Scott',
    //         age:30,
    //         skill:'React'
    //     },
    //     {
    //         id:2,
    //         name:'Michael',
    //         age:45,
    //         skill:'Angular'
    //     },
    //     {
    //         id:3,
    //         name:'Tiger',
    //         age:35,
    //         skill:'View'
    //     }
    // ]
    // const personList = persons.map(person => <Person key={person.id} person={person}/>
    // )
    const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>)
    return (
    <div>{nameList}</div>
  )
}

export default NameList