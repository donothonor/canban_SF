import React from "react";
import { useState } from "react";
import css from './LogUser.module.css'
import avatar from '../../assets/avatar.svg'
import arrow from '../../assets/arrow.svg'

function LogUser () {

    const [isMenuVisible, setMenuVisible] = useState(false)

    const showMenuHandler = () => {
        setMenuVisible(!isMenuVisible)
    }

    return (
        <>
            <div className={css.userLogo} onClick={showMenuHandler}>
                <div className={css.avatarWrapper}>
                    <img className={css.avatar} src={avatar}></img>
                </div>
                <img className={isMenuVisible? css.arrow : css.rotateArrow} src={arrow}></img>
            </div>
        </>
    )
}

export default LogUser