# ng build --prod
# docker build --rm -f "Dockerfile" -t paulgilchrist/angular-template:latest .
# docker run -d -p 80:80 paulgilchrist/angular-template
# docker rm -f <containerID>
FROM nginx:alpine
LABEL author="Paul Gilchrist"
COPY ./dist /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
# docker push paulgilchrist/angular-template