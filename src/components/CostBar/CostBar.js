import './CostBar.css'

function CostBar() {
    return(
        <div className="cost_bar">
            <div className='cost_bar__btn'>
                <input className='active' type="button" value="САМЫЙ ДЕШЕВЫЙ" />
            </div>
            <div className='cost_bar__btn'>
                <input type="button" value="САМЫЙ БЫСТРЫЙ" />
            </div>
            <div className='cost_bar__btn'>
                <input type="button" value="ОПТИМАЛЬНЫЙ" />
            </div>
        </div>
    )
}

export default CostBar;