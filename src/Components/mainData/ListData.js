import React, { useState } from "react";
import data from "./data";

const List = () => {
    const [selected, setSelected] = useState(null);

    const handleChange = (getCurrenId) => {
        console.log(getCurrenId);
        setSelected(getCurrenId === selected ? null :getCurrenId);
    }

    return (
        <div className="wrapper">
            <div className="listData">
                {data && data.length > 0 ? 
                    data.map((dataItem, index) => (
                        <div key={index}>
                            <div onClick={() => handleChange(dataItem.id)} className="title">
                                <h2>{dataItem.Question}</h2>
                                <span>+</span>
                            </div>
                            {selected === dataItem.id && (
                                <div>{dataItem.Answer}</div>
                            )}
                        </div>
                    ))
                    : <div>no data found</div>
                }
            </div>
        </div>
    );
}

export default List;
