import { useState } from 'react'
import './App.css'

// TODO
// Create, Read, Update, Delete

function App() {
  const[todoList, setTodoList] = useState([
    {id: 0, content: '숨쉬기'},
    {id: 1, content: '공부준비하기'},
    {id: 2, content: '강의 듣기'},
  ])
  
    // {id, title, writer, content 등등 여러 객체를 사용해 정보를 담아준다. }
  return (
    <>
      <TodoList todoList = {todoList} setTodoList={setTodoList}/>
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList}/>


      {/* <input value={inputValue} onChange={(event) => 
        setInputValue(event.target.value)
        // 인풋의 값을 이벤트를 통해서 업데이트 해주기
      }/>
      <button onClick={() => {
        const newTodo = {id: Number(new Date()), 
          content: inputValue}
// 리스트 내용 추가하기 버튼 클릭시
          const newTodoList = [...todoList, newTodo];
      setTodoList(newTodoList);
      setInputValue("") // 추가후 입력창 비워주기
      }}
      >추가하기</button> */}

      
        {/*하드코딩 표시 가능 */}
        {/* <li>{todoList[0].content}</li> 
        <li>{todoList[1].content}</li> 
        <li>{todoList[2].content}</li>  */}
    </>
  )
}

function TodoInput() {
  const [inputValue, setInputValue] = useState('')
  return (
    <>
    <input value={inputValue} onChange={(event) => 
      setInputValue(event.target.value)
      // 인풋의 값을 이벤트를 통해서 업데이트 해주기
    }/>
    <button onClick={() => {
      const newTodo = {id: Number(new Date()), 
        content: inputValue}
// 리스트 내용 추가하기 버튼 클릭시
        const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setInputValue("") // 추가후 입력창 비워주기
    }}
    >추가하기</button>
</>
  )
}

function TodoList({todoList, setTodoList}) {
  return (
  <ul>
        {/* 반복적인 렌더링을 위해서 array map 메서드 사용 */}
        {todoList.map((todo)=> (
          <Todo key={todo.id} todo={todo} setTodoList={setTodoList}/>
          // <li key={todo.id}>{todo.content}</li>
        ))}
        </ul>)
}

// 리스트 
function Todo({todo, setTodoList}) {
  const [inputValue, setInputValue] = useState('')
  return (
  <li >{todo.content}

  {/* 수정하기 */}
  <input 
  value={inputValue}
  onChange={(event) => setInputValue(event.target.value)}/>
  <button onClick={() => {
    setTodoList((prev) => 
      prev.map((el) => el.id === todo.id ? {...el, content:inputValue} : el))
  }}
  >수정</button>

  {/* 삭제하기*/}
  <button onClick={() => {
    setTodoList((prev) => {
      return prev.filter(el => el.id !== todo.id)
    })
  }}>삭제</button>
  </li>
  )
  
}
export default App
