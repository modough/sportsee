import React from 'react'
import Board from "../components/Board"
import LeftNavbar from '../components/LeftNavbar'





/**
 * The function returns a JSX section containing a left navigation bar and a board component for a user
 * page in a React application.
 * @returns The `UserPage` component is being returned, which contains a `LeftNavbar` component and a
 * `Board` component wrapped in a `section` element with the `id` of "userPage".
 */
function UserPage() {
    return (
        <section id="userPage">
            <LeftNavbar />
            <Board />
        </section>
    )
}

export default UserPage