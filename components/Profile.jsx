import PromptCard from "./PromptCard"

const Profile = (props) => {
  return (
    <>
    <section className="w-full">
        <h1 className="head_text text-left">
        <span className="blue_gradient">{props.name}</span>
         Profile</h1>
         <p className="desc text-left">{props.desc}</p>
         <div className='mt-10 prompt_layout'>
      {props.data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleEdit={()=> props.handleEdit && 
          props.handleEdit(post)}
          handleDelete={()=>props.handleDelete &&
          props.handleDelete(post)}
        />
      ))}
    </div>
    </section>
    </>
  )
}

export default Profile