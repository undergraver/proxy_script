echo %~dp0
cd /D %~dp0
echo %CD%
python -m http.server 8080 --bind 127.0.0.1

