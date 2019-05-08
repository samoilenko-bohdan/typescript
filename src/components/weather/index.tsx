import React from "react"
import {connect} from "react-redux";

interface IProps {
    store: any;
}

class Weather extends React.Component<IProps> {

    render() {
        return (
            <div className="weather__info">
                {Object.keys(this.props.store).map((point, index) =>
                    point === "error" ? <span className="weather__error">{this.props.store[point]}</span> :
                        (this.props.store[point] || this.props.store[point] === 0) &&
                        <p key={index} className="weather__key">
                            {point}
                            <span className="weather__value">{this.props.store[point]}</span>
                        </p>
                )}
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state
    }),
)(Weather);