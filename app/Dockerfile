FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm init -y && npm install express pg
EXPOSE 3000
CMD ["node", "index.js"]
