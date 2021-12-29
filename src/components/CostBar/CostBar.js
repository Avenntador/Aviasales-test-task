import './CostBar.css'

function CostBar() {
    return(
        <div className="cost_bar">
            <div>
                <input type="button" value="САМЫЙ ДЕШЕВЫЙ" />
            </div>
            <div>
                <input type="button" value="САМЫЙ БЫСТРЫЙ" />
            </div>
            <div>
                <input type="button" value="ОПТИМАЛЬНЫЙ" />
            </div>
        </div>
    )
}

export default CostBar;