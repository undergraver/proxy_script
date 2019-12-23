# Proxy script

This repository aims to help users create their own simple proxy script in case you are in the situation where you need one.

# Further information

Check these pages:
* [stackoverflow](https://stackoverflow.com/questions/191023/how-does-windows-actually-detect-lan-proxy-settings-when-using-automatic-confi)
* [wikipedia](https://en.wikipedia.org/wiki/Web_Proxy_Auto-Discovery_Protocol)
* [proxy PAC information](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file)
* [proxy script sample](https://gist.github.com/raghur/7aba1d879d49f30e7c833875d79d966b)

# Prerequisites

A Python 3 installation able to run this command (it basically means you have the http.server module):

`python -m http.server 8080 --bind 127.0.0.1`

# Supported platforms

* Windows (using .bat files)
* \*nix platforms (sh interpretter is used)

# Installation

1. Clone this repository and go to scripts folder
2. Update your proxy script
   1. template available to modify - see sample.js
   2. download a template from your wpad server, if any, and modify
      1. a command like `wget wpad` should be enough in most cases
3. Run the script that launches the server (you can change the port from the launching scripts) 
4. Update the proxy settings for the browser to use the listening address shown when launching the script:
   1. It should be something like http://127.0.0.1:8080/sample.js
   2. On Windows you can set the proxy in the system proxy settings and instruct all the browsers to use system settings
