/** @type {import('next').NextConfig} */
const nextConfig = {
    "compilerOptions": {
        "baseUrl": "./pages/",
        "paths": {
            "@/*": ["/app/*"]
        }
    },
    "eslint": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },
}

module.exports = nextConfig
