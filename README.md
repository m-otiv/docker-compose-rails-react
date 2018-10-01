# docker-compose-rails-react

### Requirements

![Docker >= 17.04 ](https://badgen.net/badge/Docker/>=17.04/409be6?icon=docker)

![docker-compose >=1.8.0 ](https://badgen.net/badge/docker-compose/>=1.8/409be6?icon=docker)

### Install npm dependency

```bash
docker-compose run node npm install --only=production
```

The project start-up doesn't create a DB. For tmp I lunch follow command:

```bash
docker-compose exec app rake db:create
```
