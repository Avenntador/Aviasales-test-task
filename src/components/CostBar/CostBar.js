import React from 'react';
import './CostBar.css';

function CostBar({ setSelectedCost }) {
    
    const costRef = React.createRef();

    const clickHandler = (e) => {
        let target = e.target;
        for (let i = 0; i < costRef.current.children.length; i++) {
            costRef.current.children[i].firstElementChild.classList.remove('active');
        }

        target.classList.toggle('active'); 
        setSelectedCost(target.value);
    }

    return (
        <div onClick={clickHandler} ref={costRef} className="cost_bar">
            <div className='cost_bar__btn'>
                <button className='active' value="cheap">САМЫЙ ДЕШЕВЫЙ</button>
            </div>
            <div className='cost_bar__btn'>
                <button value="fast">САМЫЙ БЫСТРЫЙ</button>
            </div>
            <div className='cost_bar__btn'>
                <button value="optimum">ОПТИМАЛЬНЫЙ</button>
            </div>
        </div>
    )
}

export default CostBar;