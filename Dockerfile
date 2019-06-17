FROM ubuntu

RUN export TERM=xterm

RUN apt-get update
RUN apt-get -y install gnupg
# RUN apt-get -y install redis-server
RUN apt-get install -y nano wget dialog net-tools curl

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
	apt-get -y install python build-essential nodejs git-core

# RUN apt-get install -y nginx 

# COPY ./reverse-proxy/nginx.conf /etc/nginx/nginx.conf

# RUN rm -rf /etc/nginx/conf.d/*

# RUN echo "daemon off;" >> /etc/nginx/nginx.conf

RUN mkdir -p /src

ADD ./app /src

WORKDIR /src

RUN rm -rf node_modules

ADD ./app/package.json /src/package.json

RUN npm install -force

#EXPOSE 80

RUN npm install -g nodemon

#CMD service nginx start && nodemon /src/app.js
CMD nodemon /src/app.js
#CMD ["nginx", "-g", "daemon off;"]
