# base Go image version.
FROM golang:1.12-buster

WORKDIR /project

# install some dependencies from apt-get.
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -y && \
    apt-get install -y yarn unzip && \
    rm -rf /var/lib/apt/lists/*

# install myitcv/gopherjs
RUN git clone https://github.com/myitcv/gopherjs /gopherjs
RUN cd /gopherjs && GO111MODULE=on go install

# install yarn dependencies
COPY package.json yarn.lock ./
RUN yarn install

# copy source
COPY . .
