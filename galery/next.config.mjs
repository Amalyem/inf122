/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                hostname:'raw.githubusercontent.com',
               // hostname:'images.dog.ceo',
            }
        ]
    }
};

export default nextConfig;
