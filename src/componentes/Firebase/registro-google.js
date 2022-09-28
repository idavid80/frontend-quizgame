import { React, useState } from "react"
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { Button } from "primereact/button";



const provider = new GoogleAuthProvider();

function RegistroConGoogle() {
  const [usuario, setUsuario] = useState()


  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((resultado) => {
      const nombre = resultado.user.displayName
      setUsuario(nombre)
      console.log(nombre)
    })
      .catch((error) => {
        console.log(error)
      })

  }
  const signOutWithGoogle = () => {
    signOut(auth).then(() => {
      setUsuario()
    })
      .catch((error) => {
        console.log(error)
      })
  }


  return (
    <div className="flex align-items-center justify-content-center ">
      {usuario ? <Button className="mx-1" label="Cerrar Sesión" onClick={signOutWithGoogle} /> : <Button className="mx-1" icon="pi pi-google" label="Inicia Sesión" onClick={signInWithGoogle} />}
      <p>{usuario}</p>
    </div>
  )
}




export default RegistroConGoogle