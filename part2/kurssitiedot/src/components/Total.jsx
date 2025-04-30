const Total = (props) => {
    const adder = (previous, add_value) => previous + add_value;
    const total = props.parts.map(part => part.exercises).reduce(adder)
    return (
        <b>total of {total} exercises</b>
    )
}

export default Total