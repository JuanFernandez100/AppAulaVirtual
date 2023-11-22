
import Link from "next/link"
import { API_URL } from "./config"


async function getUsuario(){

  const res =  await fetch(`${API_URL}/usuarios?populate=*`)
  if(!res.ok){
    throw new Error('Something went wrong')
  }

  const {data} = await res.json()
  return data
}

export default async function Home() {

  const usuarios = await getUsuario()
  console.log(usuarios)

  return (
    <main className="flex-col items-center justify-between p-24">
      {
      usuarios.map(({attributes, id}) =>(
        <Link key={id} href="#">
          <h1>
          {attributes.Nombre}
          </h1>
          <h2>
            {attributes.Apellido}
          </h2><br></br>
        </Link>
      )
      )}
    </main>
  )
}
