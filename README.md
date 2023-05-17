# Start


```sh

# The server will start on localhost:8080, but accessing it from ChatGPT causes CORS errors.
# To solve this, we can use ngrok to create a tunnel to the server.
ngrok http 8080

# IMPORTANT: Copy the ngrok URL and paste it in the .env file, in the APP_PUBLIC_URL variable.
cp .env.template .env


npm install

# Start the server
npm run dev

# Now copy the ngrok link into the chat plugin field
```

# Info

The code was created using `npm init @deepkit/app openapi-plugin-deepkit`.
The full README: https://github.com/deepkit/deepkit-framework/blob/master/packages/create-app/files/README.md

I tried installing `npm install deepkit-openapi` (https://github.com/hanayashiki/deepkit-openapi)
but I've encountered errors, so I've copied the contens of the `deepkit-openapi` and `deepkit-openapi-core` packages into the `src/openapi` folder.

I couldn't figure out how to fix the CORS issue when running from my local machine, so I used ngrok to create a tunnel to the server.
