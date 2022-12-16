import { useState } from 'react';
import style from './style.module.scss';

export default function Home() {
    const [name, setName] = useState('');
    const [nameList, setNameList] = useState([]);
    const [text, setText] = useState('Inserindo nome');
    const [error, setError] = useState('');

    function handleAddNameInList() {
        if(!name){
            setError('Digite um nome primeiro...');
            return;
        }

        const findName = nameList.findIndex((item) => item === name);

        if(findName !== -1) {
            setError('Esse nome já está na lista...');
            return;
        }

        setNameList([...nameList, name]);
        setName('');
        setError('');
    }
    
    function handleChangeText() {
        setText(text === 'Inserindo nome'? 'Editando nome' : 'Inserindo nome');
    }

    return (
        <div className={style.container}>
            <div>
                <h2>{text}</h2>
                <button 
                    id="btn-change-text"
                    onClick={()=> handleChangeText()}
                >Mudar texto</button>
                <input 
                    type="text" 
                    value={name} 
                    id="input-name"
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Name"
                />
                <button 
                    id="btn-insert"
                    className={style['btn-insert']}
                    onClick={() => handleAddNameInList()}
                >Adicionar</button>
                <span>{error}</span>
            </div>
            <div>
                {nameList.length ?
                    <ul>
                        {nameList.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul> :
                    <span>Lista de nomes vazia...</span>
                }
            </div>
        </div>
    );
}
