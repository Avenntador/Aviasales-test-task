import './FilterBar.css';
import React from 'react';

function FilterBar({ setSelectedFilter }) {

    const formRef = React.createRef();

    const clickHandler = (e) => {
        let target = e.target;

        if (target.classList.contains('filter_bar__checkbox-item')) {
            let currentInput = target.children[0];
            currentInput.checked ? currentInput.checked = false : currentInput.checked = true;
        } else if (target instanceof HTMLLabelElement) {
            let currentInput = target.previousElementSibling;
            currentInput.checked ? currentInput.checked = false : currentInput.checked = true;
        }

        let selectedFilterArray = [];
        let idx = formRef.current.length;

        for (let i = 0; i < idx; i++) {
            if (formRef.current[i].checked) {
                selectedFilterArray.push(formRef.current[i].value)
            }
        }

       setSelectedFilter(selectedFilterArray);
    }

    return (
        <div className="filter_bar">
            <p className='filter_bar__title'>Количество пересадок</p>
            <form onClick={clickHandler} ref={formRef} className='filter_bar__checkbox-list'>
                <div className='filter_bar__checkbox-item'>
                    <input type="checkbox" defaultChecked name="all" id="all" value="all" />
                    <label htmlFor="all">Все</label>
                </div>
                <div className='filter_bar__checkbox-item'>
                    <input type="checkbox" name="zero" value="0" />
                    <label htmlFor="zero">Без пересадок</label>
                </div>
                <div className='filter_bar__checkbox-item'>
                    <input type="checkbox" name="one" value="1" />
                    <label htmlFor="one">1 пересадка</label>
                </div>
                <div className='filter_bar__checkbox-item'>
                    <input type="checkbox" name="two" value="2" />
                    <label htmlFor="two">2 пересадки</label>
                </div>
                <div className='filter_bar__checkbox-item'>
                    <input type="checkbox" name="three" value="3" />
                    <label htmlFor="three">3 пересадки</label>
                </div>
            </form>
        </div>
    )
}

export default FilterBar;