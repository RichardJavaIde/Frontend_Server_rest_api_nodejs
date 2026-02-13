import type { PropsWithChildren } from "react";

export default function ErrorMessage({children}: PropsWithChildren) {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 my-3 p-3 rounded relative mb-5" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">{children}</span>
        </div>
    );
}