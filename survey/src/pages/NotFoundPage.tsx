import React from 'react'
import {useNavigate} from 'react-router-dom'
import {ROUTES} from '../resources/routes-constants'

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate()

    /**
     * Call this function to redirect the user to the homepage.
     */
    const redirectToHomePage = () => {
        const url = new URL(window.location.href)
        if (url.host.indexOf('github.io') > 0) {
            navigate(ROUTES.GITHUB_PAGES_ROUTE)
        } else {
            navigate(ROUTES.HOMEPAGE_ROUTE)
        }
    }

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <h1 style={{fontSize: '4em'}}>Oops 404!</h1>
            <span style={{cursor: 'pointer'}} onClick={() => redirectToHomePage()}>
                Homepage
            </span>
        </div>
    )
}

export default NotFoundPage
