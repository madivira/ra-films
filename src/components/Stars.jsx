import PropTypes from 'prop-types';
import React from "react";
import Star from "./Star";


function Stars(prop){
    let arr =[];
    for(let i = 1; i<= prop.count; i++){
        arr.push(i);
    }
    
    return(
        <>
           {5>=prop.count>=1 && <ul className="card-body-stars u-clearfix">{arr.map(item => <Star key={item}/>) }</ul>}
        </>
    )
};

Stars.propTypes = {
    num: PropTypes.number
}

export default Stars;