import React, { useState } from 'react';
import pizza from '../images/CheesePizza.jpg';
import basket from '../images/basket.png';
import './PizzaCard.css';

const PizzaCard = () => {
    const [count, setCount] = useState(1);

    function plus() {
        setCount(count + 1);
    };

    function minus() {
        setCount(count - 1);
        if (count<=0){setCount(count)}
    };

    return (
        <div className='card'>
            <div>
                <div>
                    <img className='picture' src={pizza} alt='cheese' />
                    <div className='sticker'>Хит сезона</div>
                </div>
                <div className='pizzaName'>Сырная пицца</div>
                <div className='description'>Что может быть вкуснее? Томатный соус, колбаски Пепперони и 3 вида сыра: моцарелла, чеддер и дор-блю</div>
                <select
                    className='diameter'>
                    <option disabled selected>Диаметр</option>
                    <option>24 см</option>
                    <option>38 см</option>
                </select>
                <div className='price'>от 550 ₽</div>
                <div className='order'>
                    <button
                        className='countButton1' onClick={minus}> -
                    </button>
                    <span className='counter'>{count}</span>
                    <button
                        className='countButton2' onClick={plus}> +
                    </button>
                    <img className='basketIcon' src={basket} alt='basket'
                        onClick={() => {
                            alert(`Количество заказанных пицц: ${count} шт`);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;