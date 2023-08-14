import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const TodoData = () => {

    const { todo, deleteTodo } = useContext(GlobalContext);

    return (
        <div className='relative'>
            {todo.length>0 ? todo.map((v, i) => {
                return (
                    <div className='m-1 flex flex-rows'>
                        <div className='-top-2 -left-1 bg-teal-100 px-3 rounded-l-lg shadow drop-shadow-xl text-sm text-center flex items-center'>{i + 1}</div>
                    <div
                        className='bg-teal-300 p-2 px-5'
                        key={i}>{v}</div>
                    <div onClick={() => deleteTodo(v)} className='-top-2 -right-1 bg-teal-100 px-2 rounded-r-lg shadow drop-shadow-xl text-sm text-red-500 font-bold flex items-center cursor-pointer hover:scale-105 ease-in-out duration-300'>{'x'}</div>
                    </div>
                )
            }) : <h1>{"Empty todo!"}</h1>}
        </div>
    )
}

export default TodoData