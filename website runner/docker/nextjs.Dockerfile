
FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json ./

RUN pnpm install

COPY . ./

# RUN npm run build

EXPOSE 3000

RUN npx prisma generate                

ENTRYPOINT ["pnpm", "seed"]

CMD ["pnpm", "dev"]