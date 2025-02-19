const Pizza = ({name, amount, radius, pizza, change}) => {
return (
    <div className='options'>
        <h3>{name}</h3>
        <label>How many pizzas</label>
        <input type="number" min="1" value={amount} id={pizza} onChange={e => change(e, 'amount', pizza)} />
        <label>Radius in cm</label>
        <input type="number" min="1" value={radius} name={pizza} onChange={e => change(e, 'radius', pizza)} />
    </div>
)
}

class PizzaChecker extends React.Component {

    state = {
        firstPizza: {
            amount: 0,
            radius: 0
        },
        secondPizza: {
            amount: 0,
            radius: 0
        },
        validated: null,
        result: null,
        percentageDifferenceResult: null
    }

    handleChange = (e, parameter, pizza) => {

        if (pizza === 'first') {
            
            if (parameter === 'amount') {
                this.setState({
                    firstPizza: {
                        amount: e.target.value,
                        radius: this.state.firstPizza.radius
                    }
                })
            } else {
                this.setState({
                    firstPizza: {
                        amount: this.state.firstPizza.amount,
                        radius: e.target.value
                    }
                })
            }
        }   else {
            
            if (parameter === 'amount') {
                this.setState({
                    secondPizza: {
                        amount: e.target.value,
                        radius: this.state.secondPizza.radius
                    }
                })
            } else {
                this.setState({
                    secondPizza: {
                        amount: this.state.secondPizza.amount,
                        radius: e.target.value
                    }
                })
            }
        }
       
    }

    handleCheckFormFilled = () => {
        if (
            this.state.firstPizza.amount !== 0 &&
            this.state.firstPizza.radius !== 0 &&
            this.state.secondPizza.amount !== 0 &&
            this.state.secondPizza.radius !== 0
        ) {
            this.setState({
                validated: true
            })

            this.handlePizzaCalculate()
        } else {
            this.setState({
                validated: false
            })
        }
    }

    handlePizzaCalculate = () => {
        const piNumber = 3.14159
        const firstPizzaResult = Math.floor(this.state.firstPizza.amount * (Math.pow(this.state.firstPizza.radius, 2)) * piNumber)
        const secondPizzaResult = Math.floor(this.state.secondPizza.amount * (Math.pow(this.state.secondPizza.radius, 2)) * piNumber)

        if (firstPizzaResult > secondPizzaResult) {
            const percentageDifference = Math.floor(100 - (secondPizzaResult / firstPizzaResult) * 100)
            this.setState({
            result: 'First option',
            percentageDifferenceResult: percentageDifference 
            })
        } else {
            const percentageDifference = Math.floor(100 - (firstPizzaResult / secondPizzaResult) * 100)
            this.setState({
            result: 'Second option',
            percentageDifferenceResult: percentageDifference
        })
    }
    }

    handleClear = () => {
        this.setState({
            firstPizza: {
                amount: 0,
                radius: 0
            },
            secondPizza: {
                amount: 0,
                radius: 0
            },
            validated: null,
            result: null,
            percentageDifferenceResult: null
        })
    }

    render({validated, firstPizza, secondPizza, result, percentageDifferenceResult} = this.state) {
       return (
        <>
        <div className='background'></div>
            <div className='wrapper'>
                <h1>Pizza Checker</h1>
                <p>Check if you should order one larger pizza or more smaller ones.</p>
                {validated === false && <p className='error'>Fill in all fields</p>}
                <div className='calculator'>
                    <Pizza name='First option' change={this.handleChange} pizza='first' amount={firstPizza.amount} radius={firstPizza.radius}/>
                    <Pizza name='Second option' change={this.handleChange} pizza='second' amount={secondPizza.amount} radius={secondPizza.radius}/>
                </div>
                {result !== null && <p className='result'>You should choose {result}. This pizza is {percentageDifferenceResult} % bigger</p>}
                {validated !== true && <button className='check-btn' onClick={this.handleCheckFormFilled}>Check</button>}
                {validated === true && <button className='clear-btn' onClick={this.handleClear}>Clear</button> }
            </div>
            </>
        )
    }
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(<PizzaChecker />)