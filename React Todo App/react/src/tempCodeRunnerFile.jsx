export  function Code({name}){
    const image = "https://picsum.photos/200";
    const alt = "picsum pic";
    return(
    <>
    <h1>Hello {name}!</h1>
      <img 
        src={image}
        alt = {alt}
      />

    <ul style={{
        backgroundColor:'black',
        color:'white'
    }}>
        <li>Study</li>
        <li>Shooping</li>
        <li>Go To Market</li>
    </ul>

    </>
    );
  }

  export function Card({children,title}) {
    return(
        <div>
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    );
    }