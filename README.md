# Proxy script

This repository aims to help users create their own simple proxy script in case you are in the situation where you need one.

# Further information

Check these pages:
* [stackoverflow](https://stackoverflow.com/questions/191023/how-does-windows-actually-detect-lan-proxy-settings-when-using-automatic-confi)
* [wikipedia](https://en.wikipedia.org/wiki/Web_Proxy_Auto-Discovery_Protocol)

# Prerequisites

A Python 3 installation able to run this command (it basically means you have the http.server module):

`python -m http.server 8080 --bind 127.0.0.1`

# Supported platforms

* Windows (using .bat files)
* \*nix platforms (sh interpretter is used)

# Installation

1. Clone this repository
2. Update your proxy script
   a. template available to modify
   b. download a template from your wpad server, if any, and modify
      1. a command like `wget wpad` should be enough in most cases
3. Replace the proxy script
4. Go to the proxy folder
