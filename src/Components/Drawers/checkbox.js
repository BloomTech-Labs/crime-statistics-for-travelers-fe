import React from 'react'
import {Checkbox} from '@chakra-ui/core'
export const CheckBox = props => {
    console.log(props.handleChecks);
    return (
      <li>
       <input key={props.id} onClick={props.handleChecks}
 type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
      </li>
    )
}

export default CheckBox