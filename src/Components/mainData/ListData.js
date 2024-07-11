import React, { useState } from "react";
import data from "./data";
import "./style.css";

const List = () => {
    const [selected, setSelected] = useState(null);

    const handleChange = (getCurrentId) => {
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    return (
        <React.Fragment>
            <h1>Space Quiz</h1>
            <div className="wrapper">
                <div className="listData">
                    {data && data.length > 0 ? 
                        data.map((dataItem, index) => (
                            <div key={index} className="item">
                                <div onClick={() => handleChange(dataItem.id)} className="title">
                                    <h2>{dataItem.Question}</h2>
                                    <span>+</span>
                                </div>
                                {selected === dataItem.id && (
                                    <div className="content">{dataItem.Answer}</div>
                                )}
                            </div>
                        ))
                        : <div>no data found</div>
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default List;
