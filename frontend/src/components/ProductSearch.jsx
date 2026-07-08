export default function ProductSearch({
    search,
    setSearch
}) {

    return (

        <div className="bg-white rounded-xl shadow p-4">

            <input
                type="text"
                placeholder="🔍 Search by Code, Name, Brand or Model..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

        </div>

    );

}