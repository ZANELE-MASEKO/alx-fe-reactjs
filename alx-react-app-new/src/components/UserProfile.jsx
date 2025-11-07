function UserProfile (props) {

    return(
        <div style={{border:'1px solid grey', padding:'10px', margin:'10px'}}>
            <h2 style={{colr:'blue'}}>
                {props.name}
            </h2>
            <p>Age:<pan style={{fontWeight:'bold'}}> {props.age}</pan></p>
            <p>Bio: {props.bio}</p>
        </div>
    );
}

export default UserProfile