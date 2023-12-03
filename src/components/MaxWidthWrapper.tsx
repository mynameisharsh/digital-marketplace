import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthWrapper = ({className, children}: {className?: string, children: React.ReactNode}) => {
    return (
        <div className={cn("w-full mx-auto max-w-screen-xl px-2.5 md:px-20", className)}>
            {children}
        </div>
    )
};

export default MaxWidthWrapper;