# BugTracker

Basic bug tracking SaaS application built on SQL, Express, React and Node.js

## Installation

Clone the repository

```bash
git clone git@github.com:JasonGodmere/BugTracker.git
```
or
```bash
git clone https://github.com/JasonGodmere/BugTracker.git
```

Then install necessary packages in the ```client``` and ```server``` directories

```bash
cd client
npm install
cd ../server
npm install
```

To run test instances of ```client``` and ```server``` execute the following commands in the main directory at two **separate** terminals.
```bash
cd client
npm start
```
```bash
cd server
npm start
```

## Deployment

#### Preface
>The basic architecture of the application lends itself well to a statically served ```client``` and node.js driven ```server```.
>
>To bring the content and webfiles closer together, the intended front-end is an AWS s3 bucket or similar. However, it is also recommended that a [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) links to as many of these static files as possible.

To start, generate the optimized static build of ```client```. Simply statically serve these files through an s3 bucket, NGINX instance or similar to run the client server.
```bash
cd client
npm run build
```

Then go to the server directory and create a docker image of the node.js server using ```server/Dockerfile```

```bash
cd server
docker build -t server-image-name .
```
Once the new docker image is created, you can export the image as a .tar file and upload it to your intended host server running docker.
```bash
docker save server-image-name > server-image-name.tar
```

## Contributing
This is not a serious project and is primarily a way to further develop my expertise with MERN stack, deployment piplines and cloud technologies.

That being said, pull requests are welcome. For major changes please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)