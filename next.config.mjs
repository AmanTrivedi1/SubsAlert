/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "media.beehiiv.com",
        },
        {
          hostname: "img.clerk.com",
        },
        {
            hostname:"images.unsplash.com"
        },
        {
          hostname:"res.cloudinary.com"
        }
      ],
    },
  };
  
  export default nextConfig;