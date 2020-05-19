import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/neab/week4.css';


function Week4() {
  const [lists , setLists] = useState([])
  const [item , setItem] = useState("")
  const addItem = (e) => {
    e.preventDefault()
    const taskformat = {
        id : 10 + Math.random(),
        task : e.target.task.value
    }
    const tmpLists = [...lists]
    tmpLists.push(taskformat)

    setLists(tmpLists)
    setItem("")

  }

  const deleteItem = (id) => {
      const tmpLists = lists.filter((item) => item.id !== id)
      setLists(tmpLists)
  }
  return (
    <div className="Week4">
        <header class="header">
	        <div class="brand-box">
                <Link to="/neab/index" ><span class="brand">Home</span></Link>
	        </div>
	        <div class="text-box">
		        <h1 class="heading-primary">
                    <span class="heading-primary-main">To do list</span>
		        </h1>
                <form onSubmit={addItem}>
                    <div class="form__group">
                        <input type="text" class="form__input" id="task" placeholder="Add List" value={item} onChange={(e) => setItem(e.target.value)} required="" />
                        <label for="name" class="form__label">Add List</label>
                    </div>
                    <div id="container">
                        <button type="submit" class="add-more">Add More</button>
                    </div>
                </form>
                {
                    lists.map((newItem) => {
                        return(
                            <li key={newItem.id}>
                                {newItem.task}
                                <button onClick={() => deleteItem(newItem.id)}>delete</button>
                            </li>
                    )
                    })
                }
                <a href="/neab/week1" class="btn btn-white btn-animated">WEEK1</a>
                <a href="/neab/week2" class="btn btn-white btn-animated">WEEK2</a>
                <a href="/neab/week3" class="btn btn-white btn-animated">WEEK3</a>
                <a href="/neab/week4" class="btn btn-white btn-animated">WEEK4</a>
                <a href="/neab/week5" class="btn btn-white btn-animated">WEEK5</a>
                <a href="/neab/week6" class="btn btn-white btn-animated">WEEK6</a>
	        </div>
            
        </header>
    </div>
  );
}

export default Week4;