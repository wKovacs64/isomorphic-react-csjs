import express from 'express';
import serverSideRender from './serverSideRender';

const app = express();

app.get('/', serverSideRender);
app.use(express.static('dist'));

const server = app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${server.address().port}`);
});
