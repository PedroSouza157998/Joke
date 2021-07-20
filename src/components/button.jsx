import { Button, ButtonGroup } from "@chakra-ui/react"

export default function ChakraButton(props) {
    return (
        <div>
            <Button style={{marginBottom: 30, height:50, width: 140, marginTop: 20, borderRadius: 15}} colorScheme="teal">
                {props.text}
            </Button>
        </div>
    );
}