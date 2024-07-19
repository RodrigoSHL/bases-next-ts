import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'Contact Page',
 keywords: ['Contact, Page'],
};

export default function ContactPage() {
    return (
        <>
            <span className="text-2xl">Contact Page</span>
        </>
    );
}