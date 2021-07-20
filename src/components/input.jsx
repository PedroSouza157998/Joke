import { Input } from "@chakra-ui/react"

export default function ChakraInput(props){
    return(
        <div>
        <p style={{border:0, margin: 3}} >{props.placeholder}:</p>
        <Input 
        type={props.type}
        style={{width:244, height: 46, borderRadius: 20, 
            borderStyle:'solid', borderColor: 'black', borderWidth:1, borderBottomWidth: 2}}
        />
        </div>
    );
}