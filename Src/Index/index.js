
import React from 'react'
import { render } from 'react-dom'

import Header from '../Components/Header/Header'
import Time_Axis from '../Components/Time_Axis/Time_Axis'

import './index.scss'

render(
    <article>
        <Header></Header>
        <section>
            <Time_Axis></Time_Axis>
        </section>
    </article>
    ,
    document.getElementById('root')
)

