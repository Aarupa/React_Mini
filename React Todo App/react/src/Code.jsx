export  function Code({ name }){
    const image = "https://picsum.photos/200";
    const alt = "picsum pic";
    const people =[
        'Go to Shopping:4',
        'Homework of class:3',
        'going to college:2'
    ]
    const list = people.map((task,index) => <li key={index}>{task}</li>);
    const info=[{
        id:0,
        name:'Aarti',
        profession:'froent end developer',
    },{
        id:1,
        name:'Dinesh',
        profession:'ML developer',
    },{
        id:2,
        name:'kirti',
        profession:'tester',
    }]

    const Dinesh =info.filter(person=>person.profession==='ML developer');
    const listitem= Dinesh.map(person=>(
        <li key={person.id}>
            <p>
                <b>{person.name}:</b>
                {'  '+person.profession}
            </p>
        </li>
    ))
    
    function handle(){
      alert("Delete")
    };
   
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
        <button onClick={handle}>Delete</button>
        {list}
    </ul>
    <ul>
        {listitem}
    </ul>
    </>
    );
}

//   export function Card({children,title}) {
//     return(
//         <div>
//             <h2>{title}</h2>
//             <div>{children}</div>
//         </div>
//     );
//     }

    // <Card title="my content">
    //       <p>this is content inside card</p>
    // </Card>