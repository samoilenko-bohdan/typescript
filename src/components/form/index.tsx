import React from "react"
import {connect} from "react-redux";


interface IProps {
    onGetWeather: Function;
}

class Form extends React.Component<IProps> {
    render() {
        return (
            <form onSubmit={(event) => this.props.onGetWeather(event)}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onGetWeather: async (e: any) => {
            e.preventDefault();
            const city = e.target.elements.city.value;
            const country = e.target.elements.country.value;
            const apiCall = await fetch(
                `http://localhost:8181/cxf/weather/city/${city},${country}`);
            const data = await apiCall.json();
            console.log(data);
            if (data.cod !== "404") {
                dispatch({type: "SET_WEATHER", data: data})
            } else {
                dispatch({type: "SET_ERROR"})
            }
        }
    })
)(Form);