import ItemList from "./item-list"


export default function Page(){

    return(
    <main className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="text-4xl font-bold pt-5 pl-5">Shopping List</h1>
        <ItemList/>
    </main>
    );
}