import React from "react";
import { Code, CodeBlock } from "react-code-blocks";

function ObjectForm(){
    return(
        <>
        <p>Here is the syntax for using destructuring with objects</p>
        <CodeBlock
                text={`
                    let {var1 , var2} = {var1:..., var2:...} 
                `}
                language="javascript"
                showLineNumbers = {false}
                codeBlock
                
            />
        <p>Hers is an example using destructuring with objects</p>
        <h3>Setup:</h3>
        <CodeBlock
            text={`let options = {
                title: "Menu",
                width: 100,
                height: 200
            };
            
            let {title, width, height} = options;
            `}     
            language="javascript"
                showLineNumbers = {false}
                codeBlock   
        />
        <h3>Result:</h3>
        <CodeBlock
            text={`
                console.log(title) // Menu
                console.log(width) // 100
                console.log(height) // 200
            `}
            language="javascript"
                showLineNumbers = {false}
                codeBlock
        />
        <p>The order does not matter. </p>
        </>
    )
}

export default ObjectForm;