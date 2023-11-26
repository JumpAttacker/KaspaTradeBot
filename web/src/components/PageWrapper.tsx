import React from 'react';
import {cn} from "@/lib/utils.ts";

const PageWrapper = ({title, children, className}: { title: string, children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("p-4", className)}>
            <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
};

export default PageWrapper;