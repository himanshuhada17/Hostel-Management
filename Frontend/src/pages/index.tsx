import { useGetAllUsersQuery } from "@/generated/graphql";
import { useQuery } from "@apollo/client";
import { useSession,signIn,signOut } from "next-auth/react";

export default function Home() {
  const session = useSession()

  const {loading,data }= useGetAllUsersQuery();
  console.log(data?.getAllUsers)

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

      <div>
        {data?.getAllUsers?.map(user => (
          <div key={user.id}>
            <div>{user.firstName}</div>
            <div>{user.email}</div>
            </div>
        ))

        }
      </div>
    </>
  );
}
