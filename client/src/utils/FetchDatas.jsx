import { useEffect, useState } from "react";
import { dataBase } from "../data/db";
const REACT_MOCKED_DATA = false;


const FetchDatas = (url, id) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {

        if (!REACT_MOCKED_DATA) {
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