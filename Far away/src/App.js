import { useState } from 'react';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Forms from './components/Forms';
import Header from './components/Header';

function App() {
  const[data,setData] = useState([])
  function addItem(item){
    setData([...data , item])
}
function deleteItem(id){
  setData(data.filter(item=>{
    return item.id !== id
  }))
}
function toggleItem (id){
  setData(data.map(item=>{
    return item.id === id ? {...item , packed : !item.packed} : item
  }))
}
  return (
    <div className="app">
      <Header/>
      <Forms onHandleItems={addItem}/>
      <Body data={data} onDeleteItem={deleteItem} onToggle={toggleItem}/>
      <Footer data={data}/>
    </div>
  );
}

export default App;
