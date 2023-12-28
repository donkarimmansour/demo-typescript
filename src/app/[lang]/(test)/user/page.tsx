"use client";

import { useGetUsersQuery } from "@/client/services/rtl/userApi";

const page = () => {

  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);
  
  if (isLoading || isFetching) return <p>Loading...</p>;
  if (error) return <p>Oh no, there was an error</p>;


  return (

    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>


       {!!data?.length && <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 20 }}>
         
          {data.map((user: any) => (

            <div key={user.id} style={{ border: "1px solid #ccc", textAlign: "center" }} >

              <img src={`https://robohash.org/${user.id}?set=set2&size=180x180`} alt={user.name} style={{ height: 180, width: 180 }} />
              <h3>{user.name}</h3>

            </div>

          ))} 

        </div>} 

    </main>

  );
}

export default page