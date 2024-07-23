function Workcard({work}) { 

    const {company, duration ,descriptions } = work;
    console.log(work);
    return(
        <div className="flex flex-col bg-slate-400">
            <h2> <b>{company}</b></h2>
            <p>{duration}</p>
            <ul className="m-3">
                {
                    descriptions.map((description,index) => <li key={index}>{description}</li>)
                }
            </ul>
        </div>
    );
}

export default Workcard;
