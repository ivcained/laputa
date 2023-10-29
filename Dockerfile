# Builder Stage
FROM ghcr.io/foundry-rs/foundry as builder

# Copy our source code into the container
WORKDIR /app
RUN apk add nodejs --update-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/main --allow-untrusted

RUN apk add --update npm git

# Check Node.js and npm are installed correctly
RUN node -v && npm -v

# Install pnpm
RUN npm install -g pnpm@8
COPY . .
RUN pnpm install --frozen-lockfile
# RUN ls -ls
# RUN foundryup
ENV SKIP_FOUNDRY=false
ENV VITE_CHAIN_ID=84531
RUN pnpm mud deploy --profile=baseGoerli
RUN pnpm run build


# Runtime Stage
FROM node:14-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/packages/client/dist /app

EXPOSE 3000
CMD ["serve", "-s", "/app", "-p", "3000"]