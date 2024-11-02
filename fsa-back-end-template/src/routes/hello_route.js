export const hello_route = {
    path: '/hello',
    method: 'get',
    handler: (req, res) => {
        res.status(200).json({ message: 'Hello from routes Express!' });
    }
}