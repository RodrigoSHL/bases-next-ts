import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Pricing Page',
 keywords: ['Pricing, Page'],
};

export default function PricingPage() {
    return (
        <>
            <span className="text-2xl">Pricing Page</span>
        </>
    );
}