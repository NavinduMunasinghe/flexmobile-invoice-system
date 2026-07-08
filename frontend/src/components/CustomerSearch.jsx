export default function CustomerSearch({
    search,
    setSearch
}) {

    return (

        <div className="bg-white rounded-xl shadow p-4">

            <div className="relative">

                <input
                    type="text"
                    placeholder="🔍 Search by Name, Mobile or Email..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

            </div>

        </div>

    );

}