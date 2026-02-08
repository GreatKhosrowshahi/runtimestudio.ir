import { Helmet } from "react-helmet-async";

interface MetaProps {
    title: string;
    description: string;
    canonical?: string;
}

const Meta = ({ title, description, canonical }: MetaProps) => {
    return (
        <Helmet>
            <title>{title} | Runtime Studio</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow" />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`${title} | Runtime Studio`} />
            <meta property="og:description" content={description} />
            <meta property="og:locale" content="fa_IR" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${title} | Runtime Studio`} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default Meta;
