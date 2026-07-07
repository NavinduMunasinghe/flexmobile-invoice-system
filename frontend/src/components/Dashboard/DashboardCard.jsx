export default function DashboardCard({
    title,
    value,
    icon,
    color = "bg-blue-500"
}) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-gray-500 text-sm font-medium">
                        {title}
                    </p>

                    <h2 className="text-3xl font-bold mt-2 text-gray-800">
                        {value}
                    </h2>

                </div>

                <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl ${color}`}
                >
                    {icon}
                </div>

            </div>

        </div>
    );
}