import s from './Item.module.css';

const Item = ({ item }) => {
    return (
              <div className={s.card}>
                <span>Hello: {item.name}</span>
                <div className={s.imgHolder}>
                    <img src={item.image} alt="" />
                </div>
                <span>Species: {item.species}</span>
              </div>
            );
    }

export default Item;
