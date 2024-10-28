

function Link({route}) {
    const  {name , path} = route
  return (
    <div className="list-none">
        <li className="mx-5"><a href={path}>{name}</a></li>
    </div>
  )
}

export default Link