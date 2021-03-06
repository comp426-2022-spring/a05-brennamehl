[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7651105&assignment_repo_type=AssignmentRepo)
# a05 Human Interface

In this assignment, you will build an HTML human interface for your API. You will also document your API endpoints and consider package structure.

## DO NOT CLONE THIS REPOSITORY DIRECTLY

Use the GitHub classroom link instead: https://classroom.github.com/a/PUVGxeMe

If you clone this repo directly, it will not be added to the organization as an individual repo associated with your account and you will not be able to push to it.

## Instructions

Full instructions for this assignment are available at: https://comp426.johndmart.in/a/05/

<!-- DELETE EVERYTHING ABOVE THIS LINE -->

# Coinserver Description

This package exposes endpoints and provides a web interface to emulate random chance coin flip events in the following ways:

1. Flip one coin - returns result of a coin flip
2. Flip many coins - returns the results of many coin flips with a summary
3. Guess a coin flip and - returns the result of a flip and guess match

# Coinserver Installation

Run `npm install` inside the package root directory.

This package was built using Node.js LTS (16.x).
Other package dependency and version information can be found in `package.json`.

# Coinserver Runtime Documentation
```
node server.js [options]

--port, -p	Set the port number for the server to listen on. Must be an integer
            between 1 and 65535. Defaults to 5000.

--debug, -d If set to true, creates endlpoints /app/log/access/ which returns
            a JSON access log from the database and /app/error which throws 
            an error with the message "Error test successful." Defaults to 
            false.

--log, -l   If set to false, no log files are written. Defaults to true.
            Logs are always written to database.

--help, -h	Return this message and exit.
```

# Coinserver API Documentation

## Endpoints

### /app/ (GET)

#### Request cURL

```
curl http://localhost:5555/app/
```

#### Response body

```
200 OK
```

#### Response headers

```
HTTP/1.1 200 OK
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked
Content-Type: text/plain
Date: Sat, 30 Apr 2022 00:32:11 GMT
X-Powered-By: Express
```

### /app/flip/ (GET)

#### Request cURL

```
curl http://localhost:5555/app/flip/
```

#### Response body

```
{"flip":"tails"}
```

#### Response headers

```
HTTP/1.1 200 OK
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 16
Content-Type: application/json; charset=utf-8
Date: Sat, 30 Apr 2022 00:45:28 GMT
ETag: W/"10-N9e0DDykqBPnqphc8f4b
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flips/:number/ (GET)

#### Request cURL

```
 curl http://localhost:5555/app/flips/10
```

#### Response body

```
{"raw":["tails","heads","heads","tails","tails","heads","tails","heads","heads","tails"],"summary":{"heads":5,"tails":5}}
```

#### Response headers

```
HTTP/1.1 200 OK
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 121
Content-Type: application/json; charset=utf-8
Date: Sat, 30 Apr 2022 00:51:57 GMT
ETag: W/"79-Ao/mUY2UfS1O1jGRHMW...
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/coin/ (GET)

#### Request cURL

```
curl http://localhost:5555/app/flip/coin/
```

#### Response body

```
{"flip":"tails"}
```

#### Response headers

```
HTTP/1.1 200 OK
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 16
Content-Type: application/json; charset=utf-8
Date: Sat, 30 Apr 2022 00:45:28 GMT
ETag: W/"10-N9e0DDykqBPnqphc8f4b
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/call/:guess/ (GET)

#### Request cURL

```
curl http://localhost:5555/app/flip/call/heads
```

#### Response body

```
{"call":"heads","flip":"tails","result":"lose"}
```

#### Response headers

```
HTTP/1.1 200 OK
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 47
Content-Type: application/json; charset=utf-8
Date: Sat, 30 Apr 2022 00:54:56 GMT
ETag: W/"2f-7jHpBxeRlMwmX45a5nEi...
Connection:  keep-alive
Keep-Alive: timeout=5]
```

### /app/flip/call/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"guess":"heads"}' http://localhost:5000/app/flip/call/
```

#### Response body

```
{"call":"heads","flip":"heads","result":"win"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 46
ETag: W/"2e-U/q8iZ4JKqczXPIvtwiVRpEFlRc"
Date: Thu, 07 Apr 2022 16:30:07 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/coins/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"number":"30"}' http://localhost:5000/app/flip/coins/`
```

#### Response body

```
{"raw":["heads","heads","heads","tails","heads","heads","tails","tails","tails","heads","heads","heads","heads","heads","heads","tails","tails","heads","heads","heads","heads","heads","heads","heads","tails","heads","tails","heads","tails","heads"],"summary":{"heads":21,"tails":9}}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 283
ETag: W/"11b-9dPTqGfngSPFEOq4loChIlpdSIE"
Date: Thu, 07 Apr 2022 15:23:35 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/log/access/ (GET)

#### Request cURL

```
curl http://localhost:5555/app/log/access
```

#### Response body

```
[{"id":1,"remoteaddr":"::1","remoteuser":null,"time":"1650939501200.0","method":"GET","url":"/app/log/access","protocol":"http","httpversion":1.1,"status":200,"referer":null,"useragent":"curl/7.74.0"},{"id":2,"remoteaddr":"::1","remoteuser":null,"time":"1650939538422.0","method":"GET","url":"/app/log/access","protocol":"http","httpversion":1.1,"status":200,"referer":null,"useragent":"curl/7.74.0"},{"id":3,"remoteaddr":"::1","remoteuser":null,"time":"1650939778936.0","method":"GET","url":"/app/error","protocol":"http","httpversion":1.1,"status":200,"referer":null,"useragent":"curl/7.74.0"}]
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 401
ETag: W/"191-zIX/D9vHmBhTLyWkUb1+6Em57CE"
Date: Fri, 29 Apr 2022 06:58:12 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/log/error/ (GET)

_Not yet implemented_

#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/user/login/ (POST)

_Not yet implemented_

#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/user/new/ (POST)

_Not yet implemented_

#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/user/update/ (PATCH)

_Not yet implemented_

#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/user/delete/ (DELETE)

_Not yet implemented_

#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```
