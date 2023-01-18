import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Notfound() {
    const history = useHistory()
    useEffect(() => {
        setTimeout(() => {history.push('/')}, 3000)
    }, [])
    return (
        <div class="alert alert-danger" role="alert">
            Page Not Found
        </div>
    )
}

export default Notfound