FROM golang:1.12-stretch AS build-stage

# Install node.js 14
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get update && apt-get -y install nodejs

# Install yarn
RUN apt-get update && apt-get install -y apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get -y install yarn

# Install myitcv/gopherjs
RUN git clone https://github.com/myitcv/gopherjs "/go/src/github.com/gopherjs/gopherjs" \
    && cd "/go/src/github.com/gopherjs/gopherjs" \
    && GO111MODULE=on go install

RUN mkdir /amino-js
WORKDIR /amino-js
COPY . .

# Install Go dependencies
RUN cd go/lib && go mod download
RUN cd go/extensions && go mod download
RUN cd go/src && go mod download
RUN cd go/js && go mod download

RUN yarn install
RUN yarn setup

CMD ["yarn", "pack"]
