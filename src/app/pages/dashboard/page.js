
import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUser from "@/app/componetes/ListUser";
import Link from "next/link";

export default async function Dashboard() {
    const users =  getUsers ();

    return (
        <div class="dash">
            <h1>Dashboard</h1>
            <Suspense fallback={<p>carregando...</p>}>
                 <ListUser user={users}/>
                    {users.map((users) => (
                     <p>{users.email}</p>
                     ))}
            </Suspense>
            <Link href="/pages/register">Registrar</Link><br/>
            <Link href="/pages/alterar">Alterar</Link>
        </div>
    );
};