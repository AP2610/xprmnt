// eslint-disable-next-line no-undef
module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home/',
                permanent: true,
            },
            {
                source: '/categories/products/:productId',
                destination: '/products/:productId',
                permanent: true
            }
        ];
    }
};
