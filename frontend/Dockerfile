FROM node:16.14.0@sha256:fd86131ddf8e0faa8ba7a3e49b6bf571745946e663e4065f3bff0a07204c1dde

LABEL maintainer="Smit Gabani <gabanismit11@gmail.com>"
LABEL description="Crumble React front-end"

ENV PORT=3000

WORKDIR /frontend

COPY package*.json /frontend/
# COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
