"use client"
import { ComponentPropsWithRef, useState } from "react";
import { FaShareAlt } from "react-icons/fa";


type Props = ComponentPropsWithRef<"button"> & {
    shareLink: string
}

export default function ShareButton({ shareLink, ...rest }: Props) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };
    return (
        <button {...rest} onClick={() => { handleCopy() }}>
            <FaShareAlt size={16} /> Share
            {
                copied && <span className="animate-bounce text-xs relative -top-4 text-[#484848] ">Copied</span>
            }
        </button>
    )
}
