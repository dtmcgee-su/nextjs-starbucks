import { useState } from 'react'

// next.js componenets
import Image from 'next/image'
import Link from 'next/link'

// custom componenets
import ButtonUI from './buttonui'
import NavOverlay from './navoverlay'
import Container from './container'
import Row from './row'

// styles
import styles from './header.module.scss'

export default function Header() {

    const [isMenuVisible, setMenuVisible] = useState(false) // first item is variable to hold true or false and scond is function to update state 

    return (
        <header className = {styles.header}>
            <Container>
                <Row justifyContentSpaceBetween> 
            <Link href = "/">
                <a>
                    <Image 
                    src = '/images/starbucks-logo.svg'
                    width={100}
                    height = {100}
                    alt = "Starbucks logo"
                    />
                </a>
            </Link>
            <ButtonUI 
                icon= 'menu'
                clickHandler = {() => {setMenuVisible(true)}} // meaninng: dont use this unless it is invoked
            />
            {
                isMenuVisible && // is menu visible??
                    <NavOverlay 
                        closeClickHandler = {() => {
                            setMenuVisible(false)
                        }}
                    /> // If yes show the nav overlay 
            } 
            </Row>
            </Container>
        </header>
    )
} 