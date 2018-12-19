.PHONY: help
# https://stackoverflow.com/questions/45692255/how-make-openvpn-work-with-docker fix na vpn

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
USER_ID = `id -u $$USER`
args = `arg="$(filter-out $@,$(MAKECMDGOALS))" && echo $${arg:-${1}}`

client:
	docker-compose run  -u "$(USER_ID)" --name "shelter_client" --rm -p 8888:8888 node yarn dev:client

server:
	docker-compose run  -u "$(USER_ID)" --name "shelter_server" --rm node yarn dev:server:watch

start: ## run server
	docker-compose run  -u "$(USER_ID)" --name "shelter_start" --rm --service-ports node yarn start:server

up: ## start containers
	docker-compose up -d

down: ## remove containers
	docker-compose down --remove-orphans