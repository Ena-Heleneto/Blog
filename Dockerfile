FROM node:18-alpine

WORKDIR /app
COPY . .
RUN apk --no-cache add git 
RUN npm install -g pnpm
RUN pnpm install && pnpm run build
RUN chmod +x ./run-server.sh
EXPOSE 3000

ENTRYPOINT [ "./run-server.sh" ]