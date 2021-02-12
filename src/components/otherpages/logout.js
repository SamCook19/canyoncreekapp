import React, {useState} from 'react';
import { Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function logout(props) {
    const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()

   async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/")
        } catch (error) {
            setError('Failed to logout')
        }
    }

    return (
        <div>
            <div className='logout'>
                <Button variant ="link" onClick={handleLogout}>
                    Log Out
                </Button>
                </div>
        </div>
    );
}

export default logout;