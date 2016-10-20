docker run -d -p 3000:3000 --name webserver node:angular2template
docker logs webserver
docker inspect webserver
:: Pause so the application can be tested from a browser using the IP address above and the port
::     http://<container ip>:3000
pause
docker stop webserver
docker rm webserver
