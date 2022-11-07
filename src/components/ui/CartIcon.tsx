import React from "react"
import styled from 'styled-components'

type HeartIconType = {
    width: string,
    height: string,
    fill: string
}

const Icon = styled.svg`
    @media(max-width: 1300px) {
        width: 20px;
        height: 20px;
    }
`

export const CartIcon: React.FC<HeartIconType> = ({width, height, fill}) => {
    return (
        <>
            <Icon xmlns="http://www.w3.org/2000/svg" width = {width} height = {height} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 455.297 455.297">
                <g>
                    <circle fill = {fill} cx="65.993" cy="417.586" r="35"/>
                    <path fill = {fill} d="M30.993,322.586v30h182.879c-5.914-9.267-10.676-19.335-14.094-30H30.993z"/>
                    <path fill = {fill} d="M323.059,183.727c-54.826,0-99.431,44.604-99.431,99.429s44.604,99.429,99.431,99.429   c54.825,0,99.429-44.604,99.429-99.429S377.884,183.727,323.059,183.727z M384.559,298.157h-46.5v46.5h-30v-46.5h-46.5v-30h46.5   v-46.5h30v46.5h46.5V298.157z"/>
                    <path fill = {fill} d="M393.673,2.711l-12.294,75H0l25.888,158.454c2.833,17.282,19.479,31.422,36.992,31.422h131.688   c7.715-64.052,62.392-113.859,128.49-113.859c26.887,0,51.884,8.244,72.6,22.333l23.496-143.349h36.142v-30H393.673z"/>
                    <path fill = {fill} d="M323.059,412.586c-12.147,0-23.907-1.686-35.062-4.829c-0.912,3.118-1.404,6.416-1.404,9.829c0,19.33,15.67,35,35,35   c19.33,0,35-15.67,35-35c0-3.145-0.421-6.19-1.2-9.089C345.054,411.166,334.219,412.586,323.059,412.586z"/>
                </g>
            </Icon>
        </>
    )
}