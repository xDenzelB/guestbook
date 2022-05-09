import fetch from 'cross-fetch';
global.fetch = fetch;
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const token = {
  "access_token": "MOCKED_ACCESS_TOKEN",
  "token_type": "bearer",
  "expires_in": 3600,
  "refresh_token": "UMCIQqCs35yG0av-6XqRbw",
  "user": {
    "id": "123456",
    "aud": "authenticated",
    "role": "authenticated",
    "email": "testing@user.com",
    "email_confirmed_at": "2022-05-09T18:51:50.670032Z",
    "phone": "",
    "confirmed_at": "2022-05-09T18:51:50.670032Z",
    "last_sign_in_at": "2022-05-09T18:52:11.391108Z",
    "app_metadata": {
      "provider": "email",
      "providers": [
        "email"
      ]
    },
    "user_metadata": {},
    "identities": [
      {
        "id": "123456",
        "user_id": "123456",
        "identity_data": {
          "sub": "123456"
        },
        "provider": "email",
        "last_sign_in_at": "2022-05-09T18:51:50.668125Z",
        "created_at": "2022-05-09T18:51:50.668161Z",
        "updated_at": "2022-05-09T18:51:50.668161Z"
      }
    ],
    "created_at": "2022-05-09T18:51:50.665928Z",
    "updated_at": "2022-05-09T20:50:12.120843Z"
  }
};

const entriesData = [
  {
    "id": 310,
    "guest_id": "b88222c7-bb90-427a-800c-5f848ead1f8e",
    "content": "Hello",
    "created_at": "2022-05-06T23:33:45.910957+00:00"
  },
  {
    "id": 500,
    "guest_id": "b88222c7-bb90-427a-800c-5f848ead1f8e",
    "content": "testing",
    "created_at": "2022-05-06T23:33:40.391909+00:00"
  }
];

const sentEntries = [
  {
    "id": 329,
    "guest_id": "b88222c7-bb90-427a-800c-5f848ead1f8e",
    "content": "Another post!",
    "created_at": "2022-05-06T23:33:40.391909+00:00"
  }
];

const server = setupServer(
  rest.post('https://ezwbsacoojmonmiqffad.supabase.co/auth/v1/token', (req, res, ctx) =>
    res(ctx.json(token))
  ),

  rest.get('https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries', (req, res, ctx) =>
    res(ctx.json(entriesData))
  ),
  rest.post('https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries', (req, res, ctx) =>
    res(ctx.json(sentEntries))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
