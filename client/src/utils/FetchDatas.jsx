import { useEffect, useState } from "react";
import { dataBase } from "../data/db";



/* This code defines a custom React hook called `FetchDatas` that takes in two parameters: `url` and
`id`. It uses the `useState` and `useEffect` hooks to manage state and perform side effects
respectively. */


const MOCKED_DATA = false;


const FetchDatas = (url, id) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {

        if (MOCKED_DATA) {
            setUserData(dataBase.find((data) => { return data.id === parseInt(id) }))
        } else {
            fetch(url)
                .then(res => res.json())
                .then((data) => {
                    setUserData(data);
                })
                .catch((err) => {
                    console.error('An error has occured : ', err);
                });
        }
    }, []);

    return userData
}

export default FetchDatas