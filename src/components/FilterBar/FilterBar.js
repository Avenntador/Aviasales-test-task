import './FilterBar.css'

function FilterBar() {
    return (
        <div className="filter_bar">
            <p className='filter_bar__title'>Количество пересадок</p>
            <form className='filter_bar__checkbox-list'>
                <div className='filter_bar__checkbox-item'>
                    <input type="checkbox" name="all" id="all" />
                    <label htmlFor="all">Все</label>
                </div>
                <div className='filter_bar__checkbox-item'>
                    <input type="checkbox" name="zero" id="zero" />
                    <label htmlFor="zero">Без пересадок</label>
                </div>
                <div className='filter_bar__checkbox-item'>
                    <input type="checkbox" name="one" id="one" />
                    <label htmlFor="one">1 пересадка</label>
                </div>
                <div className='filter_bar__checkbox-item'>
                    <input type="checkbox" name="two" id="two" />
                    <label htmlFor="two">2 пересадки</label>
                </div>
                <div className='filter_bar__checkbox-item'>
                    <input type="checkbox" name="three" id="three" />
                    <label htmlFor="three">3 пересадки</label>
                </div>
            </form>
        </div>
    )
}

export default FilterBar;