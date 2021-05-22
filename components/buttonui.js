import Image from 'next/image'

import classnames from 'classnames/bind'

import styles from './buttonui.module.scss'


let cx = classnames.bind(styles)

export default function ButtonUI ( { icon, clickHandler, className }) {
    
    // btnui-close
    const btnuiClasses = cx({
        button_ui: true,
        close: icon === 'close'
    })

    return (
        <button 
            className = {btnuiClasses}
            onClick = {clickHandler}>
            <Image 
                src = {`/images/icon-${icon}.svg`} // backticks fro dynamic strig 
                width = {50}
                height = {50} // javascript numerals
                alt = 'Menu icon'
            />
        </button>
    )
}