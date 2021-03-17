import React from 'react'
function Card(props) {
    const { image } = props;
    return (

        <>
            <img alt="project" key={props.key} src={require(`../../assets/images/${image}.jpg`)} />
            <h4>{props.name}</h4>
            <h2>{props.description}</h2>
            <h2>{props.link}</h2>
            <h2>{props.repo}</h2>
        </>
    )
}

export default Card;
