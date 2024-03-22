import { useParams } from "react-router-dom";

type Params = {
    id:string,
}

export function Posts() {
    const { id } = useParams<Params>();
    console.log(id);
    return (
        <div className="article__paragraph">
            <h1>Posts {id}</h1>
        </div>
    );
}