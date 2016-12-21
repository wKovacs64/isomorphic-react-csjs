# *DEPRECATION NOTICE*

Server-side rendering was introduced in [react-csjs v2.0.0][react-csjs-2.0.0],
so the approach demonstrated in this project is no longer necessary. I'll leave
it here for now, for historical purposes.

## isomorphic-react-csjs-demo

This is a demo of React server-side rendering with [react-csjs][react-csjs]. The
interesting part is probably [serverSideRender.js](src/serverSideRender.js).

### Live hosted demo:

Check out [this HyperDev project][hd-project] for the code and
[results][hd-live].

### Or, try it out locally:

Install dependencies:

    npm install

Start the Express server:

    npm run server

The server is now listening at [http://localhost:3000](http://localhost:3000).

### Confirm:

To confirm you are seeing server-side rendering, you can perform one of the
following tests:

1. Disable JavaScript in your browser before connecting. You should see blue
   text upon loading the page.

2. Query the page using cURL from the command-line:

        curl -s http://localhost:3000

   You should get a response that includes a `<style>` tag with a `.blue_xxxxx`
   class and a `<span>` with the corresponding class on it.

   Example cURL output of successful server-side rendering:

            <!DOCTYPE html>
            <html lang="en"><head>
          <meta charset="UTF-8">
          <title>Blue</title>
        <style type="text/css">
          .blue_dILcZ {
            color: blue;
          }
        </style></head>
        <body>
        <div id="app"><span data-reactroot="" class="blue_dILcZ">This should be blue!</span></div>
        <script src="client.js"></script>


        </body></html>

### Extra:

You may also start webpack-dev-server with hot reloading for normal client-side
rendering and testing, but keep in mind this has nothing to do with server-side
rendering and is solely for playing with the client.

[react-csjs]: https://github.com/tizmagik/react-csjs
[react-csjs-2.0.0]: https://github.com/tizmagik/react-csjs/releases/tag/v2.0.0
[hd-project]: https://hyperdev.com/#!/project/luck-piper
[hd-live]: https://luck-piper.hyperdev.space/
