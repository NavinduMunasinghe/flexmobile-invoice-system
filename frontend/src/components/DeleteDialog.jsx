export default function DeleteDialog({
    isOpen,
    title,
    message,
    onConfirm,
    onCancel
}) {

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl shadow-xl p-6 w-[420px]">

                <h2 className="text-2xl font-bold mb-4">
                    {title}
                </h2>

                <p className="text-gray-600 mb-6">
                    {message}
                </p>

                <div className="flex justify-end gap-3">

                    <button
                        onClick={onCancel}
                        className="px-5 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>

    );

}