import React from "react"

import styled from 'styled-components'
import { theme, flex } from "components/common/styled";

import { Book, price } from 'types'

import checkMark from 'assets/img/checkMark.svg'
import cross from 'assets/img/cross.svg'

import { BuyButton } from 'components/ui/BuyButton'

import { FavoriteButton } from "components/ui/FavoriteButton";

type BuyBlockType = {
    priceObj: price,
    book: Book
}

const Wrapper = styled.div`
    flex-basis: 38%;
    display: flex;
    justify-content: flex-end;
    @media(max-width: 1000px) {
        flex-basis: 60%;
    }
    @media(max-width: 660px) {
        flex-basis: 100%;
        justify-content: center;
        margin-top: 20px;
    }
`

const PriceCart = styled.div`
    width: 250px;
    height: 300px;
    border-radius: 10px;
    border: 1px solid ${theme.brown};
    @media(max-width: 660px) {
        width: 346px;
    }
`

const Stock = styled.div`
    ${flex}
    justify-content: flex-start;
    margin: 10px 0 0 20px;
`
const Icon = styled.img`
    width: 17px;
    height: 17px;
    margin-right: 10px;
    ${(props: {isStock: boolean}) => props.isStock &&`
        width: 20px;
        height: 20px;
    `}
`

const StockInfo = styled.p`
    font-size: 20px;
    padding-top: 1px;
    color: ${theme.gray};
    ${(props: {isStock: boolean}) => props.isStock &&`
        color: ${theme.orange};
        padding-top: 2px;
    `}
`

const PriceBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 35px 0 0 20px;
`

const OriginalPrice = styled.h4`
    font-size: 14px;
    color: ${theme.gray};
    text-decoration: line-through;
`

const CurentPriceBlock = styled.div`
    display: flex;
    align-items: center;
`

const CurentPrice = styled.h3`
    margin: 0 20px 0 0;
    font-size: 32px;
    color: ${theme.brown}
`

const Discount = styled.p`
    font-size: 16px;
    background-color: ${theme.orange};
    color: ${theme.beige};
    padding: 2px 5px;
    border-radius: 5px;
`

const FavoriteBlock = styled.a`
    ${flex};
    justify-content: flex-start;
    cursor: pointer;
    margin: 20px 0 0 20px;
`

export const BuyBlock: React.FC<BuyBlockType> = ({book, priceObj}) => {
 
    return (
        <Wrapper>
            <PriceCart>
                <Stock>
                    <Icon isStock = {priceObj?.inStock} src = {priceObj?.inStock ? checkMark : cross} />
                    <StockInfo isStock = {priceObj?.inStock}>{priceObj?.inStock ? "В наличии" : "Нет в наличии"}</StockInfo>
                </Stock>
                <PriceBlock>
                    {
                        priceObj?.discount &&
                        <OriginalPrice>{priceObj.price} ₽</OriginalPrice>
                    }
                    <CurentPriceBlock>
                        <CurentPrice>{priceObj?.currentPrice} ₽</CurentPrice>
                        {
                            priceObj?.discount &&
                            <Discount>- {priceObj.discount}%</Discount>
                        }
                    </CurentPriceBlock>
                </PriceBlock>
                    {
                        book.info.inStock &&
                        <BuyButton
                            style = "bookPage"
                            disabled = {false}
                            book = {book}>
                            Добавить в корзину
                        </BuyButton>
                    }
                <FavoriteBlock>
                    <FavoriteButton book = {book} text = "Добавить в избранное"/>
                </FavoriteBlock>
            </PriceCart>
        </Wrapper>
    )
}