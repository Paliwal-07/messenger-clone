/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        swcPlugins:[
            ["next-superjson-plugin",{}]
        ]
    },
    images:{
        domains:[
            "res.cloudinary.com",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "snoek.fandom.com"
        ]
    }
}

module.exports = nextConfig
