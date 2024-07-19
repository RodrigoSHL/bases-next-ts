import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page',
 description: 'About Page',
 keywords: ['About, Page'],
};

export default function AboutPage() {
    return (
        <>
            <span className="text-2xl">About Page</span>
        </>
    );
}