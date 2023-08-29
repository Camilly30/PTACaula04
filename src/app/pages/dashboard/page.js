import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";

export default async function Dashboard() {
    const users = await getUsers ();
    return (
        <div>
            <h1>Dashboard</h1>
            <Suspense fallback={<p>Carregando ...</p>}>
                <ListUser user={users}/>
            </Suspense>
        </div>
    );
};