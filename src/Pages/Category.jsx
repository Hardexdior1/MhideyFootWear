import React from 'react'

const Category = ({category,filterItems}) => {
  return (
    <div className='buttons'>
        {category.map((category,index) =>{
            return <button onClick={()=>{
                filterItems(category)
            }} key={index}>{category}</button>
        })}
    </div>
  )
}

export default Category