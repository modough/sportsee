import { useEffect, useState } from "react";
import { dataBase } from "../data/db";





/**
 * A boolean constant indicating whether or not to use mocked data.
 * @type {boolean}
 * A custom hook that fetches user data from a given URL.
 * @param {string} url - The URL to fetch the user data from.
 * @param {number} id - The ID of the user to fetch data for.
 * @returns {object|null} - The user data if the fetch is successful, or `null` if it fails.
 */

const MOCKED_DATA = false

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