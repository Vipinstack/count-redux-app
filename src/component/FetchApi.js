import React from "react";

function FetchApi() {
    const [display, setDisplay]=React.useState([]);
 
  React.useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((data)=>{
          setDisplay(data);
          console.log(data);
      })
   
  }, []);


  return (
    <div>
    <ul>
    {
        display.map((items)=>{
            return <li><div key={items.id}>{items.id} {" "}
            <span key={items.id}>{items.username}</span>
        </div>
        </li>
        })
    }
    </ul>
    </div>
  );
}

export default FetchApi;