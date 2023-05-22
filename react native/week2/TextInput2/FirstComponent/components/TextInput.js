import React, * as Reaxt from "react"
import { Text,TextInput,View } from "react-native"

export default function TextInput(){
const [name,Onchangename]=React.useState('')
const [problem,Onchangeproblem]=React.useState('')
const [date,Onchangedate]=React.useState('')
return(
<View>
<Text>

Feadback form:

</Text>
<TextInput
value={name}
onChangeTex

/>
</View>


);


}
