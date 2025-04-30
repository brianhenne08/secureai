# Dockerfile for SecureAI Frontend (Next.js)
FROM node:18

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]