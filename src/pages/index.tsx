import { useSession,signIn,signOut } from "next-auth/react";

export default function Home() {
  const session = useSession()

if(session.data==null){
  return (
    <>
      <button className="mx-6 my-4" onClick={()=> signIn()}>
        LOGIN
      </button>
    </>
  );
}
  return (
    <>
      <h1>Helloo</h1>
      <button onClick={()=> signOut()}>
        Logout
      </button>
    </>
  );
}
