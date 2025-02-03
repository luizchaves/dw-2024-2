import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import ping from 'ping';

const app = express();

app.use(morgan('tiny'));

class HTTPError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

app.post('/ping', async (req, res) => {
  const { host, count = 1 } = req.query;

  if (!host) {
    throw new HTTPError('Error when passing parameters', 400);
  }

  const pingResult = await ping.promise.probe(host, { min_reply: count });

  if (
    ['Name or service not known', 'Unknown host'].some((msg) =>
      pingResult.output.includes(msg)
    )
  ) {
    throw new HTTPError('Unknown host', 400);
  }

  res.json(pingResult);
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Content not found!' });
});

// Error handler
app.use((err, req, res, next) => {
  if (err instanceof HTTPError) {
    return res.status(err.code).json({ message: err.message });
  }

  // console.error(err.stack);
  // next(err)
  return res.status(500).json({ message: 'Something broke!' });
});

app.listen(3000, () => {
  console.log('App running at http://localhost:3000');
});
