import React from 'react';
import s from './Nav.module.css';
import logo from '../images/logo.svg';
import req from '../images/measering.svg';
import calc from '../images//calculation.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className={s.nav}>
            <div className={s.wrapper}>
                <Link to=''>
                    <img src={logo} alt='' className={s.logo} />
                </Link>

                <span className={s.navigation}>
                    <Link to='/Services' className={s.link}>Services</Link>
                </span>
                <span className={s.navigation}>
                    <Link to='/Products' className={s.link}>Products</Link>
                </span>
                <span className={s.navigation}>
                    <Link to='/About' className={s.link}>About us</Link>
                </span>
                <span className={s.navigation}>
                    <Link to='/Portfolio' className={s.link}>Portfolio</Link>
                </span>
                <span className={s.navigation}>
                    <Link to='/FAQ' className={s.link}>FAQ</Link>
                </span>
                <span className={s.navigation}>
                    <Link to='/Contacts' className={s.link}>Contacts</Link>
                </span>

                <Link to='/Request'>
                    <button className={s.btmRequest}>
                        <img src={req} alt='' className={s.req}/>
                        <span className={s.btmText}>Make request</span>            
                    </button>
                </Link>
                <Link to='/Calculation'>
                    <button className={s.btmCalculation}>
                        <img src={calc} alt='' className={s.calc}/>
                        <span className={s.btmText}>Calculation</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Nav;