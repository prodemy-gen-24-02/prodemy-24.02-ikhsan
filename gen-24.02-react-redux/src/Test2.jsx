import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Test2 = () => {

    const [data, setData] = useState();

    const fetch = () => {axios.get('https://dummyjson.com/products').then(resp => {
            console.log(resp.data.products),
            setData(resp.data)
        })
    }

    useEffect(() => {
        fetch();
    },[])
    
    return(
        <div className="flex">
            <h1>Test2</h1>
            {data?.products?.map(({id, title, thumbnail}) => (
            <div key={id}>
                <p>{title}</p>
                <img src={thumbnail} alt="" />
            </div>
        ))}
    </div>
    )
}

export default Test2;