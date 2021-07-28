import { Input } from "@chakra-ui/react"

export default function ChakraInput(props) {
    return (
        <div style={{ margin: '5%', marginLeft: '20%' }}>
            <p style={{ border: 0, margin: 3 }} ><strong>{props.placeholder}</strong></p>
            <Input
                onChange={props.onChange}
                type={props.type}
                maxLength={300}
                value = {props.value}

                style={{
                    width: '80%', height: props.height, borderRadius: 20,
                    borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderBottomWidth: 2
                }}
            />
        </div>
    );
}