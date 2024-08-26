// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

if (process.env.NODE_ENV === 'production' && "https://3d627de24f5d06a1fc39000a06ca9a94@o4506813739368448.ingest.us.sentry.io/4507458386526208") {
  const Sentry = require('@sentry/node');
  Sentry.init({ dsn: "https://3d627de24f5d06a1fc39000a06ca9a94@o4506813739368448.ingest.us.sentry.io/4507458386526208" });
}

