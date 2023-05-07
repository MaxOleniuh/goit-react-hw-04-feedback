import s from '@emotion/styled'

export const ButtonContainer = s.div`
    display: flex;
    gap: 10px;
`
export const Button = s.button`
    background-color: #fff;
    border-radius: 5px;
    border-color: #f9f9f9;
    padding: 5px;
    &:active{
        background-color: #4747e7;
    } 
`