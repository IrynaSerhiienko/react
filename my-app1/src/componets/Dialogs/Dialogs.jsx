import {NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.scss';

const Dialogs = (props) => {

    // let dialogs = [
    //     {id: 1, name: 'Iryna'},
    //     {id: 2, name: 'Tanja'},
    //     {id: 3, name: 'Sergey'},
    //     {id: 4, name: 'Kostja'},
    //     {id: 5, name: 'Oleg'},
    //     {id: 6, name: 'Maria'},
    //     {id: 7, name: 'Sasha'},
    // ]

    // let messages = [
    //     {id: 1, message: 'Hi'},
    //     {id: 2, message: 'How are you?'},
    //     {id: 3, message: 'How is your classes?'},
    //     {id: 4, message: 'What are you doing tonight?'},
    // ]

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)


    return ( <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>
    </div>
    )
}

export default Dialogs;