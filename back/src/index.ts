import app from './configuration/app';

const { PORT = 8080 } = process.env;

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
