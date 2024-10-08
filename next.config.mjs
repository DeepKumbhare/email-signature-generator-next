/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '/*',
            },
            {
                protocol: 'https',
                hostname: 'cdn2.hubspot.net',
                port: '',
                pathname: '/hubfs/53/tools/email-signature-generator/icons/**',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
            },
            {
                protocol: 'https',
                hostname: 'drive.google.com',
                port: '',
                pathname: '/uc?export=view&id=**',
              },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/d/**',
            }
             
        ]
    }
};

export default nextConfig;
