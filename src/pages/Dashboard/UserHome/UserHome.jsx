import useAuth from "../../../hooks/useAuth"

const UserHome = () => {
  const {user} = useAuth()

  return (
    <div className='p-8'>
      <h2 className="text-2xl">
        <span>Hi, Welcome </span>
        {
          user?.displayName ? user.displayName : "Back"
        }
      </h2>
    </div>
  )
}

export default UserHome