FROM ubuntu:22.04

RUN apt update
RUN apt install -y git curl tar 

WORKDIR /tutorsite

RUN curl -sSL -o hugo.tar.gz \
      https://github.com/gohugoio/hugo/releases/download/v0.148.2/hugo_extended_withdeploy_0.148.2_Linux-64bit.tar.gz \
 && tar -xzf hugo.tar.gz \
 && rm hugo.tar.gz

COPY . .

EXPOSE 1313

ENTRYPOINT ["./hugo", "server", "--bind", "0.0.0.0", "-D"]
