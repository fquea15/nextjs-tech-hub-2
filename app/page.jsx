import Users from "@/components/Users"

async function fecthUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function HomePage() {

  const users = await fecthUsers()

  return (
    <Users users={users}/>
  )
}

export default HomePage
