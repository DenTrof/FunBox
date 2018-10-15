import React from 'react'
import Header from 'components/Header'
import HomePage from 'containers/HomePage'
import BackgroundImg from 'assets/img/background.png';


export default function App() {
    return (
        <div className="app" style={{ backgroundImage: `url(${BackgroundImg})` }}>
            <Header />
            <HomePage />
        </div>
    )

}