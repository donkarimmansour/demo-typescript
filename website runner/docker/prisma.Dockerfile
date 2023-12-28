FROM node:18-alpine

# RUN npm install -g pnpm
# RUN pnpm add -g prisma
RUN npm i -g prisma

WORKDIR /app

COPY ./prisma/ ./prisma/

COPY ./.env ./

RUN npx prisma generate                

EXPOSE 5555

CMD [ "prisma", "studio" ]
