//Learning Handling Click Event 
function sayHello()
{
    console.log("Hello World")
}
function sayBye()
{
    console.log("Bye World")
}
export default function Button()
{
    return (
        <div>
            <button onClick={sayHello}>click me</button>
            <p onClick={sayBye}>I am the para</p>
        </div>
    );
}