import React from 'react'
import { Flex} from '../Containers/Containers';
import styled from 'styled-components'

const Container =styled(Flex)`
 &>label,&>input{
     display:block;
     margin:1% 3%;
    text-align:center;
 }
`
function Checkbox({title,forTitle,onChange}) {
    return (
        <Container width='40%'>
         <label htmlFor={forTitle}>{title}</label>
         <input type="checkbox"  onChange={onChange} name={forTitle}id={forTitle}/>
            
        </Container>
    )
}

export default Checkbox
