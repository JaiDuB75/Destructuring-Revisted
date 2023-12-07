import React from "react";
import {CodeBlock} from "react-code-blocks";

function ArraysForm(){

    let arr = ["John", "Doe"] //This is our initial array
    let [firstName, lastName] = arr; 

    return(
        <>
            <p>Here's an example of destructuring arrays. This example sets the initial array elements to the firstName and lastName variables. As a result programmers can use the variables instead of using array notation i.e: arr[0]</p>
            <h3>Setup:</h3>
            <CodeBlock
                text={`
                    let  arr = ["John", "Doe"] // This is our initial array
                    let  [firstName, lastName] = arr; // Sets firstName = arr[0] and lastName = arr[1]
                `}
                language="javascript"
                showLineNumbers = {false}
                codeBlock
            />
            <br></br>
            <h3>Result:</h3>
            <CodeBlock
                text={`
                    console.log(firstName " - " lastName) // ${firstName} - ${lastName}
                `}
                language="javascript"
                showLineNumbers = {false}
                codeBlock
            />
            <hr></hr>
            <p>Destructuring also allows programmers to use array methods like split(). </p>
            <h3>Setup:</h3>
            <CodeBlock
                text={`
                    let [firstName, lastName] = "John Doe".split(' ');
                `}
                language="javascript"
                showLineNumbers = {false}
                codeBlock
                
            />
            <br></br>
            <h3>Result:</h3>
            <CodeBlock
                text={`
                    console.log(firstName "-" lastName); // John - Doe
                `}
                language="javascript"
                showLineNumbers = {false}
                codeBlock
            />
        </>
    )

}

export default ArraysForm;